<template>
  <div id="app">
    <el-container class="ctner" :class="{'folded': folded}">
      <el-header class="header" height="">
        Header
        <el-badge :value="1" class="item msg" @click.native="drawer = true">
          <i class="el-icon-bell "></i>
        </el-badge>
      </el-header>
      <el-container>
        <el-aside class="left" width="">
          <span class="btn_fold" @click="folded=!folded"><i :class="folded?'el-icon-s-unfold':'el-icon-s-fold'"></i></span>
          <el-menu 
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :collapse="folded" :collapse-transition="false">

              <el-menu-item index="/scoped1">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">scoped1</span>
              </el-menu-item>

              <el-menu-item index="/scoped2">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">scoped2</span>
              </el-menu-item>
              
              <el-menu-item index="/cm-calendar">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">CMCalendar</span>
              </el-menu-item>

              <el-menu-item index="/sticky">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">sticky</span>
              </el-menu-item>

              <el-menu-item index="/chart">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">chart</span>
              </el-menu-item>
              
              <el-menu-item index="/boxsizing-width">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">boxsizing-width</span>
              </el-menu-item>

              <el-menu-item index="/boxsizing-height">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">boxsizing-height</span>
              </el-menu-item>

              <el-menu-item index="/elinputclass">
                <i class="el-icon-s-opportunity"></i>
                <span slot="title">elinputclass</span>
              </el-menu-item>
              
              
          </el-menu>
        </el-aside>

        <el-main class="main">
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>

    <el-drawer
        title="消息"
        custom-class="aside_msg"
        size="360px"
        :visible.sync="drawer"
        >
        <el-collapse>
          <el-collapse-item >
            <template slot="title">
              
              <div class="title_wrapper">
                <el-badge is-dot></el-badge>
                <span class="title">一致性 Consistency</span>
                <span class="time">刚刚</span>
              </div>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item class="readed">
            <template slot="title">
              <div class="title_wrapper readed">
                <span class="title">反馈 Feedback</span>
                <span class="time">1天前</span>
              </div>
            </template>
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item class="readed">
            <template slot="title">
              <div class="title_wrapper readed">
                <span class="title">效率 Efficiency</span>
                <span class="time">2天前</span>
              </div>
            </template>
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item class="readed">
            <template slot="title">
              <div class="title_wrapper readed">
                <span class="title">可控 Controllability</span>
                <span class="time">3天前</span>
              </div>
            </template>
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-drawer>
  </div>
</template>

<script>
import CMCalendar from '@/components/cm-calendar'

export default {
  data() {
    return {
      folded: true,
      drawer: false
    }
  },
  components: {
    CMCalendar
  }
}
</script>

<style lang="scss" scoped>
$h_height: 46px;
$l_max_width: 230px;
$l_min_width: 64px;
.header {
  background-color: #fff;
  position: fixed;
  height: #{$h_height};
  line-height: #{$h_height};
  box-shadow: 0px 10px 7px #cecece;
  width: 100%;
  z-index: 9;
}
.left {
  position: fixed;
  top: #{$h_height};
  left: 0px;
  z-index: 10;
  width: #{$l_max_width};
  background-color: #545c64;
  height: calc(100vh - #{$h_height});
  transition: width 0.3s;
  -webkit-transition: width 0.3s; /* Safari */
  padding-bottom: 40px;
}
.main {
  overflow: visible;
  margin: #{$h_height} 0px 0px #{$l_max_width};
  transition: margin-left 0.3s;
  -webkit-transition: margin-left 0.3s; /* Safari */
}
.el-menu {
  border-right: 0px;
}

.folded .left {
  width: #{$l_min_width};
}
.folded .main {
  margin-left: #{$l_min_width};
}
.folded .el-menu span {
  display: none;
}

.btn_fold {
  display: block;
  height: 40px;
  line-height: 40px;
  background-color: #3c4752;
  color: #fff;
  position: fixed;
  width: #{$l_max_width};
  bottom: 0px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  z-index: 9;

  transition: width 0.3s;
  -webkit-transition: width 0.3s; /* Safari */

}
.folded .btn_fold {
  width: #{$l_min_width};
}

.msg {
  float: right;
  font-size: 23px;
  position: relative;
  top: 12px;
  right: 4px;
  cursor: pointer;
  line-height: 23px;
}


::v-deep .el-drawer.aside_msg {
  margin: 20px 20px 20px 0px;
  height: calc(100vh - 40px);
  border-radius: 9px;
}


::v-deep .el-drawer.aside_msg .el-drawer__body {
  padding: 0px 12px 0px 12px;
}

.title {
  float: left;
}
.time {
  float: right;
}
.readed div {
  color:rgb(156, 156, 156);
}
.title_wrapper {
  width: 100%;
}
.title_wrapper .el-badge{
  float: right;
}
.el-collapse ::v-deep .el-collapse-item__arrow {
  display: none;
}
</style>