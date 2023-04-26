<!-- 自动提示标签选择 -->
<template>
  <div>
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <!-- <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input> -->
    <!-- @blur="closeTagInput" -->
    <span
      v-clickoutside="closeTagInput"
      v-if="inputVisible"
    >
      <ElAutocomplete2
        :popper-width="120"
        ref="saveTagInput"
        class="input-new-tag"
        size="small"
        v-model="inputValue"
        
        :popper-append-to-body="false"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="(v) => handleSelect(v.value)"
      >
      </ElAutocomplete2>
    </span>
    

    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

    

  </div>
</template>

<script>
import Clickoutside from 'element-ui/src/utils/clickoutside'
import ElAutocomplete2 from '@/components/Autocomplete2/index.vue'
const tags = [
  {"value": "轿车"},
  {"value": "越野车"},
  {"value": "跑车"},
  {"value": "敞篷车"},
  {"value": "家庭用车"},
  {"value": "商务车"},
  {"value": "电动车"},
  {"value": "混合动力车"},
  {"value": "自动挡"},
  {"value": "手动挡"},
  {"value": "多功能车"},
  {"value": "SUV"},
  {"value": "MPV"},
  {"value": "皮卡"},
  {"value": "大巴车"},
  {"value": "小型货车"},
  {"value": "重型货车"},
  {"value": "二手车"},
  {"value": "新能源车"},
  {"value": "进口车"}
]
export default {
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    };
  },
  components: {
    ElAutocomplete2
  },
  directives: { Clickoutside },
  methods: {
    closeTagInput() {
      if (!this.inputVisible) {
        return
      }
      if (this.inputValue === '') {
        return
      }
      this.handleSelect(this.inputValue)
    },
    handleSelect(item) {
      this.dynamicTags.push(item);
      this.inputVisible = false
      this.inputValue = ''
    },
    querySearch(queryString, cb) {
      const res = tags.filter(tag => {
        return tag.value.toUpperCase().indexOf(queryString.toUpperCase()) > -1
      })
      cb(res);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>