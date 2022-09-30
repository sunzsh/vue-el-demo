<!-- disabled禁用bug -->
<template>
  <div style="text-align: center;">

    <el-button v-if="toggle" :disabled="dis">禁用</el-button>
    <el-button v-if="!toggle">其他按钮</el-button>

    <br/>
    
    <el-switch v-model="toggle"></el-switch>
    <el-switch v-model="dis"></el-switch>

  </div>
</template>

<script>

export default {
  data() {
    return {
      toggle: true,
      dis: true,
    }
  }
}
</script>