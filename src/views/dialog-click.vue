<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开 Drawer</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <el-input v-model="txt" placeholder=""></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer">
      <div>
        <span>我来啦！</span>
        <el-input v-model="txt" placeholder=""></el-input>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      drawer: false,
      txt: '拖拽后，弹窗自己关闭'
    };
  }
}
</script>
