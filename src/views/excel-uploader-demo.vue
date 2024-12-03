<!-- ExcelUploader 组件 demo -->
<template>
  <div>

    <ExcelReader v-model="tableData">
      <el-button type="text">选择</el-button>
    </ExcelReader>
    
    <pre>{{ tableData }}</pre>


  </div>
</template>

<script>
import ExcelReader from './../components/ExcelReader.vue'
export default {
  components: { ExcelReader },
  data() {
    return {
      tableData: null
    }
  },
  computed: {
    columns() {
      return this.tableData ? Object.keys(this.tableData[0]).map(key => ({ prop: key, label: key })) : []
    }
  }
}
</script>

<style>

</style>