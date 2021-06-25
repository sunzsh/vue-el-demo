<template>
  <div id="app">
    <el-container class="ctner" :class="{'folded': folded}">
      <el-header class="header" height="">Header</el-header>
      <el-container>
        <el-aside class="left" width="">
          <span class="btn_fold" @click="folded=!folded"><i :class="folded?'el-icon-s-unfold':'el-icon-s-fold'"></i></span>
          <el-menu 
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            default-active="1-4-1" class="el-menu-vertical-demo" :collapse="folded" :collapse-transition="false">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CMCalendar from '@/components/cm-calendar'

export default {
  data() {
    return {
      folded: true,
      value1: undefined,
      value2: undefined,
      value3: undefined
    }
  },
  components: {
    CMCalendar
  }
}
</script>

<style lang="scss" scoped>
$h_height: 46px;
.header {
  background-color: #fff;
  position: fixed;
  height: #{$h_height};
  line-height: #{$h_height};
  box-shadow: 0px 10px 7px #cecece;
  width: 100%;
}
.left {
  position: fixed;
  top: #{$h_height};
  left: 0px;
  width: 300px;
  background-color: #545c64;
  height: calc(100vh - #{$h_height});
  transition: width 0.3s;
  -webkit-transition: width 0.3s; /* Safari */
}
.main {
  margin: #{$h_height} 0px 0px 300px;
  transition: margin-left 0.3s;
  -webkit-transition: margin-left 0.3s; /* Safari */
}
.el-menu {
  border-right: 0px;
}

.folded .left {
  width: 64px;
}
.folded .main {
  margin-left: 64px;
}
.folded .el-menu span {
  display: none;
}

.btn_fold {
  display: block;
  height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: #3c4752;
  color: #fff;
  position: fixed;
  width: 300px;
  bottom: 0px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  z-index: 9;

  transition: width 0.3s;
  -webkit-transition: width 0.3s; /* Safari */

}
.folded .btn_fold {
  width: 64px;
}

</style>

<style>
.disable_pre_next .prev-month, .disable_pre_next .next-month{
  visibility: hidden;
}
</style>