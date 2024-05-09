<!-- OnlyOffice Demo -->
<template>
  <div>
    <p>演示数据已删除，请大家自己更换自己的演示地址</p>
    <el-form ref="form" label-width="110px">
      <el-form-item label="docId" style="margin-top: 32px">
        <div style="position: relative;">
          <div style="position: absolute; top: -32px; left: 0;">
            <el-button class="file" type="text" @click="docId='918898'">抗日英雄王二小.pptx</el-button>
            <el-button class="file" type="text" @click="docId='907396'">北京市商品住宅销售额.xls</el-button>
            <el-button class="file" type="text" @click="docId='907402'">国家5A级旅游景区最大承载量.xls</el-button>
            <el-button class="file" type="text" @click="docId='907408'">全国居民人均收入情况.xls</el-button>
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
      baseUrl="https://xxx.onlyoffice.com"
      width="100%" 
      height="400px"
      :documentId="docId"
      :requestToken="requestToken"
    ></OnlyOffice>

    <el-dialog title="编辑" :visible.sync="edit.visible">
      <OnlyOffice 
        ref="onlyOffice2"
        baseUrl="https://xxx.onlyoffice.com"
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
      requestToken: 'xxxxxxxx',
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
</style>