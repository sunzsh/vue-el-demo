<template>
  
  <el-select ref="sel" v-model="value">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

</template>
<script>

export default {
  props: {
    bgColor: {
      type: String,
      default: 'blue'
    }
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  watch: {
    bgColor(val) {
      this.$refs.sel.$children[1].$el.style.setProperty('--bgColor', this.bgColor)
    }
  },
  mounted() {
    const poperEle = this.$refs.sel.$children[1].$el;
    // poperEle.setAttribute(this.$options._scopeId, "")
    // poperEle.style.backgroundColor = 'red'

    console.log(this.$options._scopeId);

    this.$refs.sel.$children[1].$el.style.setProperty('--bgColor', this.bgColor)
  }
}
</script>


<style scoped>

.el-select-dropdown {
  background-color: var(--bgColor);
}
.el-select-dropdown >>> .popper__arrow::after {
  border-bottom-color: var(--bgColor);
}

</style>