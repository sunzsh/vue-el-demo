<template>
  <div>

    <el-select v-model="value" class="auto_sel" placeholder="请选择" clearable="true">
      <template slot="prefix">
        {{(options.find(item => item.value === value)||{}).label || ''}}
      </template>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    

  </div>
</template>

<script>

export default {
  data() {
    return {
      value: '',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎蚵仔煎蚵仔煎蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须'
        }, {
          value: '选项5',
          label: '北京烤鸭北京烤鸭'
        }]
    };
  }
}
</script>
<style scoped>
.auto_sel {
  min-width: 120px;
}
.auto_sel >>> .el-input{
  position: relative;
}
.auto_sel >>> .el-input__prefix {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  position: relative;
  left: 0px;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid #ffffff00;
  box-sizing: border-box;
  vertical-align: middle;
  visibility: hidden;

}
.auto_sel >>> input {
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>