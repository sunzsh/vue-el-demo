<!-- 动态css2 -->
<template>
  <div>

    <CusSelect :bgColor="bgColor"></CusSelect>
    
    <el-color-picker v-model="bgColor" style="vertical-align: top"></el-color-picker>

    <br/>
    <br/>

    <el-select v-model="value" placeholder="请选择">
      <el-option
        label="111"
        value="111">
      </el-option>
    </el-select>

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
      bgColor: '#8CC492',
      value: ''
    }
  },
  
}
</script>

<style scoped>

</style>