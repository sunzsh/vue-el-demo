<!-- 动态css -->
<template>
  <div>

    <div :style="declareBgColor" class="bg">
        test
    </div>
    <br/>

    <el-select :style="declareBgColor" class="bg2" :popper-append-to-body="false" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    
    <br/>

    <input v-model="bgColor" />

    

  </div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: 'blue',
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
  computed: {
    declareBgColor() {
      return `--bgColor: ${this.bgColor};`
    }
  },
  
}
</script>

<style scoped>

.bg {
  background-color: var(--bgColor);
}

.bg2 >>> .el-popper .el-scrollbar {
  background-color: var(--bgColor);
}
.bg2 >>> .popper__arrow::after {
  border-bottom-color: var(--bgColor);
}


</style>