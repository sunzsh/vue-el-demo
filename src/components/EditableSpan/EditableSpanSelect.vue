<template>
  <el-tooltip
    :key="refreshToken"
    class="item"
    effect="dark"
    :content="tipMsgComputed"
    :manual="true"
    v-model="tipVisible"
    placement="top"
    :popper-append-to-body="popperAppendToBody"
  >
    <span>
      <span
        v-if="!editing"
        :key="refreshToken"
        class="editable-span"
        :style="{ '--loading-color': loadingColor }"
        :class="{ 'loading': loading }"
        @click="handleClick"
        tabindex="0"
        @keydown.enter.stop="handleClick"
      >{{ displayValue }}</span>
      
      <el-select
        v-else
        ref="select"
        v-model="editValue"
        size="small"
        class="editable-select"
        :loading="loading"
        filterable
        default-first-option
        @change="handleChange"
        @visible-change="handleVisibleChange"
        @blur="handleBlur"
      >
        <el-option
          v-for="item in options"
          :key="item[valueKey]"
          :label="item[labelKey]"
          :value="item[valueKey]">
        </el-option>
      </el-select>
    </span>
  </el-tooltip>
</template>

<script>
export default {
  name: 'EditableSpanSelect',
  props: {
    object: { type: Object, default: () => ({}) },
    field: { type: String, default: null },
    loadingColor: { type: String, default: '#fbdca2' },
    editTip: { type: String, default: null },
    popperAppendToBody: { type: Boolean, default: true },
    
    // Select specific props
    options: { type: Array, default: () => [] },
    valueKey: { type: String, default: 'value' },
    labelKey: { type: String, default: 'label' },
  },
  data() {
    return {
      loading: false,
      editing: false,
      tipVisible: false,
      refreshToken: 0,
      tipMsg: null,
      editValue: null,
      backupValue: null,
      dropdownVisible: false,
    };
  },
  computed: {
    displayValue() {
      const val = this.getByPath(this.object, this.field);
      // Find label
      // Note: options might be objects or simple values if needed, but props say valueKey/labelKey usage.
      // We assume options is array of objects.
      if (this.options && this.options.length) {
        const option = this.options.find(opt => opt[this.valueKey] === val);
        if (option) {
            return option[this.labelKey];
        }
      }
      
      if (val === null || val === undefined || val === '') {
        return '-';
      }
      return val;
    },
    tipMsgComputed() {
      return this.tipMsg || this.editTip || '';
    }
  },
  methods: {
    /* ========== 触发与退出编辑 ========== */
    handleClick() {
      if (this.loading || this.editing) {
        return;
      }

      this.tipVisible = this.editTip !== null;
      this.editing = true;

      const origin = this.getByPath(this.object, this.field);
      this.editValue = origin;
      this.backupValue = origin;

      this.$nextTick(() => {
        if (this.$refs.select) {
          this.$refs.select.focus();
          // 尝试展开下拉框
          if (this.$refs.select.toggleMenu) {
             // element-ui select method
             this.$refs.select.visible = true; 
             // Or just clicking it might work, but programmatic open is safer
          }
        }
      });
    },
    
    handleChange(val) {
        // 选中即保存
        this.save(val);
    },

    handleVisibleChange(visible) {
        this.dropdownVisible = visible;
        if (!visible) {
            // 下拉框关闭时，如果未处于loading状态（正在保存），则退出编辑态
            // 稍微延迟一下，确保 handleChange 有机会执行
            setTimeout(() => {
                if (this.editing && !this.loading) {
                    // 检查值是否改变，如果没变，直接退出
                    if (this.editValue === this.backupValue) {
                        this.done();
                    }
                }
            }, 100);
        }
    },
    
    handleBlur(e) {
        // blur event logic
        // el-select blur triggers when focus leaves.
        // If dropdown is open, we usually ignore blur until dropdown closes.
        setTimeout(() => {
            if (this.editing && !this.loading && !this.dropdownVisible) {
                 if (this.editValue === this.backupValue) {
                    this.done();
                }
            }
        }, 100);
    },

    save(now) {
      if (now === this.backupValue) {
        this.done();
        return;
      }

      if (!this.$listeners.commit) {
        this.done({ message: '已更新' });
        return;
      }

      this.loading = true;
      this.showTipManually('正在保存中...');

      this.$emit('commit', this.object, this.field, now, this.done);
    },

    /* ========== 状态控制 & 提示 ========== */
    done(opts = {}) {
      const { error, message } = opts;

      this.loading = false;
      this.editing = false;
      this.dropdownVisible = false;
      
      // 强制重渲染
      this.refreshToken++;

      if (message) {
        this.showTipManually(message);
        setTimeout(this.hideTipManually, error ? 1500 : 800);
      } else {
        this.hideTipManually();
      }
    },
    showTipManually(msg) {
      if (!msg) {
        return;
      }
      this.tipMsg = msg;
      this.tipVisible = true;
    },
    hideTipManually() {
      this.tipVisible = false;
      setTimeout(() => {
        this.tipMsg = null;
      }, 300);
    },

    /* ========== 工具函数 ========== */
    normalizePath(path) {
      return path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
    },
    getByPath(obj, path) {
      if (!obj || !path) {
        return undefined;
      }
      const parts = this.normalizePath(path).split('.');
      let cur = obj;
      for (let i = 0; i < parts.length; i++) {
        if (cur == null) {
          return undefined;
        }
        cur = cur[parts[i]];
      }
      return cur;
    }
  }
};
</script>

<style lang="scss" scoped>
.editable-span {
  display: inline-block;
  outline: none;
  cursor: pointer;
  border-bottom: 1px dashed transparent;
  transition: all 0.2s;
  min-height: 1.2em; /* Ensure it has height even if empty */
}

.editable-span:hover {
  background-color: #f8ebd2;
  border-bottom-color: #dcdfe6;
}

.editable-select {
    width: 100%;
    min-width: 120px;
}

.loading {
  animation: blink 1s infinite;
  min-width: 12px;
}

@keyframes blink {
  0%   { background-color: var(--loading-color); }
  50%  { background-color: transparent; }
  100% { background-color: var(--loading-color); }
}
</style>
