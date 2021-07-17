<template>
    <div style="background: rgb(208, 208, 208); height: 500px; padding: 10px 20px; width: 400px;">
        测试：<input v-model="msg"/>
        <br/>
        <br/>
        <div style="display: flex;">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

            <div class="chat-pop">
                {{ msg }}
            </div>
        </div>
    </div>
</template>
<script>

export default {
  data() {
      return { 
          msg: '还记得你说家是唯一的城堡，随着稻香河流继续奔跑，微微笑，小时候的梦我知道'
      }
  }
}
</script>
<style scoped>

.chat-pop {
    margin-left: 10px;
    padding: 8px;
    max-width: 230px;
    border-radius: 7px;
    background-color: rgb(78, 156, 62);
    color: #fff;
    position: relative;
}
.chat-pop::after {
    content: ' ';
    display: inline-block;
    border: solid 6px rgb(78, 156, 62);
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    position: absolute;
    top: 10px;
    left: -11px;
}

</style>