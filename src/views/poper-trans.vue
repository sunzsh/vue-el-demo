<template>
  <div>
    <el-popover
      v-scoped="this"
      placement="right"
      width="400"
      transition="abc"
      trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    };
  },
  mounted() {
    // console.log(this.$options._scopeId);
    // this.$refs.popover.$refs.popper.setAttribute(this.$options._scopeId, '')
  }
};
</script>

<style scoped>
.abc-enter-active, .abc-leave-active {
  transition: all .3s;
}
.abc-enter, .abc-leave-to {
  opacity: 0;
  transform: translate(-50px, -50px) scale(0.3);
}
</style>