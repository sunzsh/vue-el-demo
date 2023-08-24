<template>
  <div>
      <el-pagination
        ref="pagination"
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>