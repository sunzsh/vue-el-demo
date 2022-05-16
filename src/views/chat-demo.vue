<template>
    <div>
        <div class="chat-container">
            <div class="chat-header" @click="showFixed=!showFixed">
                稻香
            </div>
            <div v-for="chat in chats" class="chat-row" :class="{'reverse': chat.reverse}">
                <el-avatar class="chat-avatar" shape="square" :src="chat.avatar"></el-avatar>
                <div class="chat-pop" v-html="chat.msg">
                </div>
            </div>
            <div class="chat-row reverse">
                <el-avatar class="chat-avatar" shape="square" :src="me"></el-avatar>
                <div class="chat-pop">
                    {{ msg }}
                </div>
            </div>

            <el-input class="chat-input" type="textarea" v-model="msg"/>
        </div>





        <in-body>
            <el-collapse v-model="activeNames" class="colp" v-if="showFixed">
                <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
            </el-collapse>
        </in-body>



    </div>
</template>
<script>

const avatar1 = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
const avatar2 = 'https://avatars.githubusercontent.com/u/6297087?v=4';

export default {
  data() {
      return { 
          showFixed: true,
          me: avatar2,
          chats: [
              { msg: '对这个世界如果你有太多的抱怨', avatar: avatar1 },
              { msg: '跌倒了就不敢继续往前走', reverse:true, avatar: avatar2 },
              { msg: '为什么人要这么的脆弱 堕落', avatar: avatar1 },
              { msg: '请你打开电视看看', reverse:true, avatar: avatar2 },
              { msg: '多少人为生命在努力勇敢的走下去', reverse:true, avatar: avatar2 },
              { msg: '我们是不是该知足', reverse:true, avatar: avatar2 },
              { msg: '珍惜一切 就算没有拥有', avatar: avatar1 },
              { msg: '还记得你说家是唯一的城堡', reverse:true, avatar: avatar2 },
              { msg: '随着稻香河流继续奔跑', avatar: avatar1 },
              { msg: '😊&nbsp;&nbsp;微微笑 小时候的梦我知道', reverse:true, avatar: avatar2 },
              { msg: '不要哭让萤火虫带着你逃跑', avatar: avatar1 },
              { msg: '乡间的歌谣永远的依靠', avatar: avatar1 }
          ],
          msg: `回家吧 回到最初的美好，不要这么容易就想放弃，就像我说的：追不到的梦想 换个梦不就得了`,
          activeNames: ['1']
      }
  }
}
</script>
<style scoped>

/* 折叠面板 */
.colp {
    position: fixed;
    width: 300px;
    top: 100px;
    right: 240px;
    border-radius: 8px;
    overflow: hidden;
}
.colp >>> .el-collapse-item__wrap,
.colp >>> .el-collapse-item__header,
.colp >>> .el-collapse-item__content {
    background-color: #555c64;
    color: #fff;
}
.colp >>> .el-collapse-item__wrap,
.colp >>> .el-collapse-item__header{
    padding: 0px 18px;
}
.colp >>> .el-collapse-item__header, .colp >>> .el-collapse-item__wrap {
    border-bottom-color: #555c64;
}

/* 聊天窗口 */
.chat-container {
    min-height: 500px; 
    background-color: #e7eaed;
    width: 400px; 
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #555c64;
    overflow: hidden;
    padding-bottom: 200px;
}
.chat-container .chat-header {
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #555c64;
    color: #fff;
    margin-bottom: 15px;

}

.chat-container .chat-row {
    display: flex;
    margin: 13px;
    align-items: flex-start;
}

.chat-container .chat-row.reverse {
    display: flex;
    flex-direction: row-reverse;
}

.chat-container .chat-row.reverse .chat-pop {
    margin-left: 0px;
    margin-right: 13px;
    background-color: #4e9c3e;
    color: #ffffff;
}
.chat-container .chat-row.reverse .chat-pop::after {
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-left-color: rgb(78, 156, 62);
    position: absolute;
    left: inherit;
    top: 10px;
    right: -11px;
}
.chat-container .chat-row .chat-avatar {
    width: 35px;
    height: 35px;
}

.chat-container .chat-row .chat-pop {
    margin-left: 13px;
    padding: 8px 10px;
    max-width: 230px;
    border-radius: 4px;
    font-size: 14px;
    background-color: #FFFFFF;
    color: #3e3e3e;
    position: relative;
    min-width: 30px;
}
.chat-container .chat-row .chat-pop::after {
    content: ' ';
    display: inline-block;
    border: solid 6px #FFFFFF;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    position: absolute;
    top: 10px;
    left: -11px;
}

.chat-container .chat-input {
    position: absolute;
    bottom: 0px;
}
</style>