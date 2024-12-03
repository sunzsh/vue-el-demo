<template>
  <div>
    {{ abcd }}
    <el-table :data="gridData">
      <el-table-column
        width="150"
        property="date"
        label="日期"
      ></el-table-column>
      <el-table-column
        width="100"
        property="name"
        label="姓名"
      ></el-table-column>
      <el-table-column
        width="300"
        property="address"
        label="地址"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridData: [],
      abcd: 'default'
    };
  },
  methods: {
    init() {
      this.gridData = [
        {
          date: Math.random() * 100,
          name: "<NAME>",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: Math.random() * 100,
          name: "<NAME>",
          address: "上海市普陀区金沙江路 1517 弄",
        },
      ];
      this.abcd = '123'
      console.log("数据已添加");
    },
  },
};
</script>

<style>
</style>