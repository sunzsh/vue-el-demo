<template>
  <div>
    <img style="width: 300px;" :src="imgUrl" @click="openImgViewer([imgUrl])" />
    <h2 @click="drawer=true">test</h2>
    <h2 @click="openImgViewer([imgUrl2])">test2</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>
    <h2>test</h2>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer">
      <img style="width: 300px;" :src="imgUrl2" @click="openImgViewer([imgUrl2, imgUrl])" />
    </el-drawer>
  </div>
</template>

<script>
export default {
  inject: {
    openImgViewer: {
      default: () => {}
    }
  },
  data() {
    return {
      imgUrl: 'https://element.eleme.cn/static/theme-index-blue.c38b733.png',
      imgUrl2: 'https://element.eleme.cn/static/theme-index-red.c8e136e.png',
      drawer: false
    }
  }
}
</script>

<style>

</style>