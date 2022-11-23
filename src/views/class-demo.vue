<!-- 样式覆盖demo -->
<template>
  <div>
    <span
      class="static"
      :class="{'dynamic': flag}"
    >
      test
    </span>

    <br><br>

    <el-button @click="flag=!flag" >test</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    }
  }
}
</script>

<style>
  .red {
    color: #fff;
    background-color: red;
  }
</style>