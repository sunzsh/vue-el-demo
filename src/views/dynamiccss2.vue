<!-- 动态css2 -->
<template>
  <div>

    <CusSelect :bgColor="bgColor"></CusSelect>
    
    <br/>

    <el-color-picker v-model="bgColor"></el-color-picker>

    

  </div>
</template>

<script>
import CusSelect from '@/components/cus-select.vue'
export default {
  components: {
    CusSelect
  },
  data() {
    return {
      bgColor: '#409EFF',
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
  
}
</script>

<style scoped>

</style>