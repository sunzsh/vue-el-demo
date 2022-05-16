<template>
  <div>
    <div class="test">{{ msg }}</div>
    <el-input v-model="msg" placeholder=""></el-input>
    <el-button type="primary" @click="changeMsg">test</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'test'
    }
  },
  methods: {
    changeMsg() {
      this.msg = 'changed'
    }
  }
  
}
</script>
<style scoped>
.test {
  color: red;
}
</style>
