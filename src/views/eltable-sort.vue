<template>
  <el-table :data="tableData" border>
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column prop="age" label="Age" sortable></el-table-column>
    <el-table-column prop="address" label="Address"></el-table-column>
  </el-table>
</template>

<script>
const testData = [
        {
          name: 'John',
          age: 25,
          address: 'New York',
        },
        {
          name: 'Bob',
          age: 30,
          address: 'Los Angeles',
        },
        {
          name: 'Alice',
          address: 'Chicago',
        },
        {
          name: 'Charlie',
          age: 42,
          address: 'Seattle',
        },
        {
          name: 'Emily',
          address: 'Denver',
        },
        {
          name: 'Frank',
          age: 36,
          address: 'Boston',
        },
        {
          name: 'Grace',
          age: 27,
          address: 'San Francisco',
        },
        {
          name: 'Harry',
          age: 50,
          address: 'Dallas',
        },
        {
          name: 'Isabelle',
          address: 'Houston',
        },
        {
          name: 'Jack',
          address: 'Portland',
        },
];
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    testData.forEach((item, index) => {
      if (item.age === undefined) {
        item.age = null
      }
    });
    this.tableData = testData;
  }
}
</script>

<style>

</style>