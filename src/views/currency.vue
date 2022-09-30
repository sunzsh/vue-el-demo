<!-- 货币类库 -->
<template>
    <div>
        <in-body>
                <el-collapse value="1" class="colp">
                    <el-collapse-item title="货币测试" name="1">
                        <div>{{ fmtMoney(money) }}</div>
                        <div>{{ fmtMoney2(money) }}</div>
                    </el-collapse-item>
                </el-collapse>
        </in-body>

        <in-body>
            <el-button class="top2" type="" @click="add"> + 0.1 </el-button>
        </in-body>

    </div>
</template>
<script>
import currency from 'currency.js';
import InBody from '../components/InBody.vue';

export default {
  components: { InBody },
  data() {
      return { 
          money: 12345.67,
      }
  },
  methods: {

      add() {
        //   this.money += 0.1;
          this.money = currency(this.money).add(.1);
      }

  },

}
</script>
<style scoped>

/* 折叠面板 */
.colp {
    position: fixed;
    width: 300px;
    top: 100px;
    left: 240px;
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
.top2 {
    position: fixed;
    top: 240px;
    left: 240px;
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