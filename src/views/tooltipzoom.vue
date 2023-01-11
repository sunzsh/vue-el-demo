<template>
  <div>
    <div class="title">zoom和滚动一起导致的tooltip显示错位问题</div>
    <el-tooltip content="Top center" placement="top">
      <el-button v-fixZoom>我是上面的ToolTip</el-button>
    </el-tooltip>
    <div class="slice">----------------------</div>
    <el-tooltip content="Top center" placement="top">
      <el-button v-fixZoom>我是下面的ToolTip</el-button>
    </el-tooltip>
    <div class="slice">----------------------</div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.style.zoom = 1.6
  },
  destroyed() {
    document.body.style.zoom = 1
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 15px;
}
.slice {
  margin: 300px 0;
}
</style>