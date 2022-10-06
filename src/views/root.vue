<!-- 首页 -->
<template>
  <div>
    <el-table
      :data="$fullRouter.options.routes"
      :show-header="false"
      row-class-name="row-pointer"
      style="width: 100%"
      @row-click="jump">
      <el-table-column
        prop="path"
        label="链接"
        width="190">
      </el-table-column>
      <el-table-column
        prop="name"
        label="描述">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {

  methods: {
    jump(row) {
      this.$router.push(row.path);
      this.drawer = false;
    }
  },
}
</script>

<style>

</style>