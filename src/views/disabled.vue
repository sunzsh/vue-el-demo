<!-- disabled禁用bug -->
<template>
  <div style="text-align: center;">

    <el-button v-if="show" :disabled="true">禁用的</el-button>
    <el-button v-if="!show">其他按钮</el-button>

    <br>
    <button @click="show=!show">test</button>

    <!-- Vue computed 实现原理 -->
    <!-- Wather & Dep 关系 -->

  </div>
</template>

<script>

export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    // this.show = true
  }
}
</script>