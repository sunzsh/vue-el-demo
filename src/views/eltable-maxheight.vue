<template>
  <section style="width: 600px; height: 600px;">

    <el-table2 :data="tableData" max-height="50%">
      <el-table-column fixed prop="num" label="序号" width="80"></el-table-column>
      <el-table-column prop="name" label="姓名" width="80"></el-table-column>
      <el-table-column prop="province" label="省份" width="80"> </el-table-column>
      <el-table-column prop="city" label="市区" width="100"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300" > </el-table-column>
      <el-table-column prop="zip" label="邮编" width="100"> </el-table-column>
    </el-table2>

    <div style="text-align: right; margin-top: 8px;">
      <el-button type="primary">其他按钮等等</el-button>
    </div>
  </section>
  
</template>

<script>
export default {
    data() {
      return {
        tableData: [ ]
      }
    },
    mounted() {
      for (let i = 0; i < 10; i++) {
        this.tableData.push({
          num: i+1,
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路1518弄',
          zip: 200333
        });
      }
    }
};
</script>