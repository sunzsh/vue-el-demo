<template>
  <div>

    <el-button v-if="toggle" :disabled="dis" key="test">禁用</el-button>
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
      toggle: false,
      dis: true,
    }
  }
}
</script>