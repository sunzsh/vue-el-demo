<!-- flex br demo -->
<template>
  <div>
    <div class="flex">
      <span>姓名：</span>
      <copy-clearbr />
      <span>张三</span>
    </div>
    <div class="flex">
      <span>年龄：</span>
      <copy-clearbr />
      <span>12</span>
    </div>
    <div class="flex">
      <span>性别：</span>
      <copy-clearbr />
      <span>男</span>
    </div>

    <el-divider></el-divider>

    <div style="position: relative">
      <div style="">姓名：</div>
      <copy-clearbr />
      <div style="">李四</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .flex {
    display: flex;
  }
</style>