<!-- OnlyOffice Demo2 -->
<template>
  <div>
    <el-form size="mini" ref="form" label-width="110px" class="elform">
      <el-form-item label="docId" style="margin-top: 32px">
        <div style="position: relative;">
          <div style="position: absolute; top: -32px; left: 0;">
            <el-button class="file" type="text" @click="docId='6'">【私有化部署】国家5A级旅游景区最大承载量.xls</el-button>
          </div>
          <el-input v-model="docId"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="requestToken">
        <el-input v-model="requestToken"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="$refs.onlyOffice.reload()">当前页加载</el-button>
        <el-button @click="open(docId, requestToken)">Dialog加载</el-button>
      </el-form-item>
    </el-form>
    <OnlyOffice 
      ref="onlyOffice"
      mode="editor"
      baseUrl="https://xxx.xxx.xxx"
      width="100%" 
      height="500px"
      :documentId="docId"
      :requestToken="requestToken"
    ></OnlyOffice>

    <el-dialog title="编辑" :visible.sync="edit.visible">
      <OnlyOffice 
        ref="onlyOffice2"
        baseUrl="https://xxx.xxx.xxx"
        width="100%" 
        height="400px"
        :documentId="edit.docId"
        :requestToken="edit.requestToken"
      ></OnlyOffice>
    </el-dialog>
  </div>
</template>

<script>
import OnlyOffice from '@/components/OnlyOffice';
export default {
  components: {
    OnlyOffice
  },
  data() {
    return {
      docId: '',
      requestToken: '',
      edit: {
        visible: false,
        docId: '',
        requestToken: ''
      }
    }
  },
  methods: {
    open(docId, requestToken) {
      this.edit.visible = true;
      this.edit.docId = docId;
      this.edit.requestToken = requestToken;
    }
  }
}
</script>

<style scoped>
.file {
  margin-right: 20px;
}
.elform ::v-deep .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
  margin-bottom: 8px;
}
</style>