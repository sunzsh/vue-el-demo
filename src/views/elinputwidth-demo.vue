<template>
    <div>
        <input v-model="msg"/>
        <br/>
        <br/>
        <div class="chat">{{msg}}</div>  
    </div>
</template>
<script>

export default {
  data() {
      return { 
          msg: undefined
      }
  }
}
</script>
<style scoped>
.chat {
    padding: 8px;
    max-width: 230px;
    overflow: hidden;
    background-color: aquamarine;
    border-radius: 6px;
    display: inline-block;
}
</style>