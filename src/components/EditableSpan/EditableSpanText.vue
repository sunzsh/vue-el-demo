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
    <span
      :key="refreshToken"
      class="editable-span"
      :style="{ '--loading-color': loadingColor }"
      :class="{ 'loading': loading, 'editing': editing }"
      ref="EditableSpanText"
      @click="handleClick"
      @blur="handleBlur"
      @keydown.enter.stop="handleEnterKey"
      @keydown.esc.stop="handleEscKey"
      @keydown="handleKeydown"
      @paste="handlePaste"
      @input="handleInput"
      tabindex="0"
    >{{ displayValue }}</span>
  </el-tooltip>
</template>

<script>
const moneyCentToYuanForDisplay = (value) => {
  if (value === null || value === undefined || value === '') {
    return '-';
  }
  return parseInt(value, 10) / 100;
}
const moneyCentToYuanForEdit = (value) => {
  if (value === null || value === undefined || value === '') {
    return '';
  }
  return parseInt(value, 10) / 100;
}
const moneyYuanToCent = (value) => {
  if (value === null || value === undefined || value === '') {
    return '-';
  }
  return Math.round(parseFloat(value, 10) * 100);
}


const FORMAT_DEFAULT = (value) => value;


export default {
  name: 'EditableSpanText',
  props: {
    object: { type: Object, default: () => ({}) },
    field: { type: String, default: null },
    loadingColor: { type: String, default: '#fbdca2' },
    editTip: { type: String, default: null },
    // 展示用格式：从源数据 -> 展示字符串
    displayFormat: {
      type: Function,
      default: FORMAT_DEFAULT
    },
    // 编辑用格式：从源数据 -> 可编辑字符串
    editFormat: {
      type: Function,
      default: FORMAT_DEFAULT
    },
    // 保存数据用格式：从编辑后字符串 -> 源数据
    valueFormat: {
      type: Function,
      default: FORMAT_DEFAULT
    },
    popperAppendToBody: { type: Boolean, default: true },
    // 数字模式：'integer' - 仅整数，'decimal' - 可带小数点，null - 不限制
    numberMode: { type: String, default: null, validator: value => [null, 'integer', 'decimal'].includes(value) },
    // 小数位数限制（仅在decimal模式下生效）
    decimalPlaces: { type: Number, default: null },

    moneyCent: { type: Boolean, default: false }
  },
  data() {
    return {
      backupValue: '',
      loading: false,
      editing: false,
      tipVisible: false,
      refreshToken: 0,
      tipMsg: null,
      escPressed: false,
      defaultDisplayFormat: null,
      defaultEditFormat: null,
      defaultValueFormat: null
    };
  },
  computed: {
    displayValue() {
      const v = this.getByPath(this.object, this.field);
      const formatted = this.displayFormatComputed(v);
      if (formatted === null || formatted === undefined || formatted === '') {
        return '-';
      }
      return formatted;
    },
    tipMsgComputed() {
      return this.tipMsg || this.editTip || '';
    },
    displayFormatComputed() {
      if (this.defaultDisplayFormat && this.displayFormat === FORMAT_DEFAULT) {
        return this.defaultDisplayFormat;
      }
      return this.displayFormat;
    },
    editFormatComputed() {
      if (this.defaultEditFormat && this.editFormat === FORMAT_DEFAULT) {
        return this.defaultEditFormat;
      }
      return this.editFormat;
    },
    valueFormatComputed() {
      if (this.defaultValueFormat && this.editFormat === FORMAT_DEFAULT) {
        return this.defaultValueFormat;
      }
      return this.valueFormat;
    }
  },
  methods: {
    // 保证 el 内存在一个不可见文本节点（哨兵），并把光标放到其末尾
    caretToEnd(el) {
      if (!el) {
        return;
      }
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(el);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    },
    selectAll(el) {
      if (!el) {
        return;
      }
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(el);
      sel.removeAllRanges();
      sel.addRange(range);
    },
    /* ========== 触发与退出编辑 ========== */
    handleClick(e) {
      if (this.loading || this.editing) {
        return;
      }

      this.tipVisible = this.editTip !== null;
      this.editing = true;

      // 进入编辑态：将 span 文本设为可编辑的字符串
      const origin = this.getByPath(this.object, this.field);
      const formatted = this.editFormatComputed ? this.editFormatComputed(origin) : origin;
      if (this.$refs.EditableSpanText && formatted != this.$refs.EditableSpanText.innerText) {
        this.$refs.EditableSpanText.innerText = formatted == null ? '' : String(formatted);
      }
      this.backupValue = this.$refs.EditableSpanText ? this.$refs.EditableSpanText.innerText : '';
      if (this.$refs.EditableSpanText) {
        this.$refs.EditableSpanText.contentEditable = true;
        this.$nextTick(() => {
          this.$refs.EditableSpanText.focus()
          if (!e) {
            // 设置光标
            const el = this.$refs.EditableSpanText;
            this.selectAll(el);
          }
        });
      }
    },
    handleEnterKey(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!this.editing) {
        this.handleClick();
        return;
      }
      if (this.$refs.EditableSpanText) {
        this.$refs.EditableSpanText.blur();
      }
    },
    handleEscKey(e) {
      e.preventDefault();
      e.stopPropagation();
      // 设置ESC标志，避免blur事件触发commit
      this.escPressed = true;
      // 取消：不触发保存，直接退出并重算展示
      this.done();
    },
    handleBlur() {
      if (!this.editing) {
        return;
      }
      // 如果是ESC键触发的，直接返回，不处理blur逻辑
      if (this.escPressed) {
        this.escPressed = false;
        return;
      }

      this.tipVisible = false;

      const el = this.$refs.EditableSpanText;
      let now = el ? el.innerText : '';
      now = now.replace(/^\s+|\s+$/g, '');
      const old = this.backupValue;

      // 数字模式下格式化和验证输入
      if (this.numberMode && now) {
        now = this.formatNumberText(now);
        // 验证数字格式
        if (this.numberMode === 'integer' && !/^-?\d*$/.test(now)) {
          this.done({ error: true, message: '请输入有效的整数' });
          return;
        }
        if (this.numberMode === 'decimal' && !/^-?\d*\.?\d*$/.test(now)) {
          this.done({ error: true, message: '请输入有效的数字' });
          return;
        }
        // 更新显示值
        if (el) {
          el.innerText = now;
        }
      }

      // 未修改：直接退出编辑态并刷新展示
      if (now === old) {
        this.done();
        return;
      }

      // 将保存交给父组件（可能有校验/落库/写回）
      if (!this.$listeners.commit) {
        // 无监听者：视为本地编辑完成，仅退出
        this.done({ message: '已更新' });
        return;
      }

      if (el) {
        el.contentEditable = false;
      }
      this.loading = true;
      this.showTipManually('正在保存中...');

      // if (now === '') {
      //   now = null
      // }
      // 发出 commit
      this.$emit('commit', this.object, this.field, this.valueFormatComputed(now), this.done);
    },

    /* ========== 状态控制 & 提示 ========== */
    done(opts = {}) {
      const { error, message } = opts;

      // 清理编辑态 DOM
      const el = this.$refs.EditableSpanText;
      if (el) {
        el.innerText = '';
        el.contentEditable = false;
      }

      // 强制一次重渲染
      this.refreshToken++;

      this.loading = false;
      this.editing = false;

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

    /* ========== 数字模式处理 ========== */
    // 验证字符是否符合数字模式
    isValidNumberChar(char, currentText = '', cursorPosition = 0) {
      if (!this.numberMode) {
        return true;
      }
      
      // 允许的基本字符
      if (/[0-9]/.test(char)) {
        return true;
      }
      
      // 负号只能在开头
      if (char === '-') {
        return cursorPosition === 0 && !currentText.includes('-');
      }
      
      // 小数点处理
      if (char === '.' && this.numberMode === 'decimal') {
        return !currentText.includes('.');
      }
      
      return false;
    },
    
    // 格式化数字文本
    formatNumberText(text) {
      if (!this.numberMode || !text) {
        return text;
      }
      
      let formatted = text;
      
      if (this.numberMode === 'integer') {
        // 移除所有非数字字符（保留负号）
        formatted = formatted.replace(/[^-0-9]/g, '');
        // 确保负号只在开头
        const hasNegative = formatted.startsWith('-');
        formatted = formatted.replace(/-/g, '');
        if (hasNegative) {
          formatted = '-' + formatted;
        }
      } else if (this.numberMode === 'decimal') {
        // 移除除数字、小数点、负号外的字符
        formatted = formatted.replace(/[^-0-9.]/g, '');
        // 确保负号只在开头
        const hasNegative = formatted.startsWith('-');
        formatted = formatted.replace(/-/g, '');
        if (hasNegative) {
          formatted = '-' + formatted;
        }
        
        // 确保只有一个小数点
        const parts = formatted.split('.');
        if (parts.length > 2) {
          formatted = parts[0] + '.' + parts.slice(1).join('');
        }
        
        // 限制小数位数
        if (this.decimalPlaces !== null && parts.length === 2) {
          const decimalPart = parts[1].substring(0, this.decimalPlaces);
          formatted = parts[0] + '.' + decimalPart;
        }
      }
      
      return formatted;
    },
    
    // 处理键盘输入
    handleKeydown(e) {
      if (!this.editing || !this.numberMode) {
        return;
      }
      
      // 允许的控制键
      const allowedKeys = [
        'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
        'Home', 'End', 'Tab', 'Enter', 'Escape'
      ];
      
      if (allowedKeys.includes(e.key)) {
        return;
      }
      
      // Ctrl/Cmd + 组合键（复制、粘贴、全选等）
      if (e.ctrlKey || e.metaKey) {
        return;
      }
      
      const currentText = e.target.innerText || '';
      const selection = window.getSelection();
      const cursorPosition = selection.anchorOffset;
      
      if (!this.isValidNumberChar(e.key, currentText, cursorPosition)) {
        e.preventDefault();
      }
    },
    
    // 处理粘贴
    handlePaste(e) {
      if (!this.editing || !this.numberMode) {
        return;
      }
      
      e.preventDefault();
      const pastedText = (e.clipboardData || window.clipboardData).getData('text');
      const currentText = e.target.innerText || '';
      const selection = window.getSelection();
      
      // 获取选中的文本范围
      let newText;
      let beforeSelection = '';
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        beforeSelection = currentText.substring(0, range.startOffset);
        const afterSelection = currentText.substring(range.endOffset);
        newText = beforeSelection + pastedText + afterSelection;
      } else {
        newText = currentText + pastedText;
      }
      
      const formatted = this.formatNumberText(newText);
      e.target.innerText = formatted;
      
      // 重新设置光标位置
      this.$nextTick(() => {
        const newPosition = Math.min(formatted.length, beforeSelection.length + formatted.length - currentText.length);
        this.setCursorPosition(e.target, newPosition);
      });
    },
    
    // 处理输入事件
    handleInput(e) {
      if (!this.editing || !this.numberMode) {
        return;
      }
      
      const currentText = e.target.innerText || '';
      const formatted = this.formatNumberText(currentText);
      
      if (formatted !== currentText) {
        const cursorPosition = window.getSelection().anchorOffset;
        e.target.innerText = formatted;
        
        this.$nextTick(() => {
          const newPosition = Math.min(formatted.length, cursorPosition);
          this.setCursorPosition(e.target, newPosition);
        });
      }
    },
    
    // 设置光标位置
    setCursorPosition(el, position) {
      if (!el) {
        return;
      }
      
      const range = document.createRange();
      const sel = window.getSelection();
      
      if (el.childNodes.length > 0) {
        const textNode = el.childNodes[0];
        const maxPosition = textNode.textContent.length;
        range.setStart(textNode, Math.min(position, maxPosition));
        range.setEnd(textNode, Math.min(position, maxPosition));
      } else {
        range.setStart(el, 0);
        range.setEnd(el, 0);
      }
      
      sel.removeAllRanges();
      sel.addRange(range);
    },
    
    /* ========== 工具函数 ========== */
    normalizePath(path) {
      // a[0].b => a.0.b
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
    },
    setByPath(obj, path, value) {
      const parts = this.normalizePath(path).split('.');
      let cur = obj;
      for (let i = 0; i < parts.length - 1; i++) {
        const key = parts[i];
        if (cur[key] == null) {
          const nextKey = parts[i + 1];
          const nextIsIndex = /^\d+$/.test(nextKey);
          this.$set(cur, key, nextIsIndex ? [] : {});
        }
        cur = cur[key];
      }
      const lastKey = parts[parts.length - 1];
      this.$set(cur, lastKey, value);
    },
    doDestroy() {
      if (this.$refs.popper) {
        this.$refs.popper.doDestroy();
      }
    },
    initMoneyFormat() {
      if (this.moneyCent) {
        this.defaultDisplayFormat = moneyCentToYuanForDisplay;
        this.defaultEditFormat = moneyCentToYuanForEdit;
        this.defaultValueFormat = moneyYuanToCent;
      } else {
        this.defaultDisplayFormat = null;
        this.defaultEditFormat = null;
        this.defaultValueFormat = null;
      }
    }
  },
  created() {
    this.initMoneyFormat();
  },
  watch: {
    moneyCent: {
      handler(newVal) {
        if (newVal) {
          this.initMoneyFormat();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.editable-span {
  display: inline-block;
  outline: none;
  cursor: text;
}

.editable-span:hover,
.editable-span:focus {
  background-color: #f8ebd2;
}

.editing {
  background-color: #fcca6c;
  transform: scale(1.4);
  padding-left: 0.3em;
  padding-right: 0.3em;
  border: 1px solid #fcca6c;
  border-radius: 2px;
  position: relative;
  z-index: 99;
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
