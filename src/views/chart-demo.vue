<template>
    <div style="background: rgb(208, 208, 208); height: 500px; padding: 10px 20px; width: 400px;">
        <el-input type="textarea" v-model="msg"/>
        <br><br>
        <div style="display: flex;">
            <el-avatar src="https://avatars.githubusercontent.com/u/6297087?v=4"></el-avatar>

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