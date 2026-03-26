<template>
  <div>
    <span class="desc">用户信息</span>

  <el-descriptions title="用户信息">
    <el-descriptions-item label="用户名">{{ form.userName }}</el-descriptions-item>
    <el-descriptions-item label="手机号">{{ form.phone }}</el-descriptions-item>
    <el-descriptions-item label="居住地">{{ form.liveCity }}</el-descriptions-item>
    <el-descriptions-item label="政治面貌">
      <editable-span-select
        :object="form"
        field="politicalStatus"
        :options="politicalStatusOptions"
        value-key="code"
        label-key="name"
        @commit="handleCommit"
      />
    </el-descriptions-item>
    <el-descriptions-item label="联系地址">
      <editable-span-text
        :object="form"
        field="address"
        @commit="handleCommit"
      />
    </el-descriptions-item>
    <el-descriptions-item label="备注">
      <EditableSpanText 
        :object="form" 
        field="remark" 
        @commit="editRemark"></EditableSpanText>
    </el-descriptions-item>
  </el-descriptions>


    <!-- <EditableSpanText 
        :object="form" 
        field="remark" 
        @commit="editRemark"></EditableSpanText> -->
  </div>
</template>
<script>

import EditableSpanText from '@/components/EditableSpan/EditableSpanText.vue'
import EditableSpanSelect from '@/components/EditableSpan/EditableSpanSelect.vue';
export default {
  name: 'EditableDemo',
  components: {
    EditableSpanText,
    EditableSpanSelect
  },
  data() {
    return {
      form: {
        userName: 'kooriookami',
        phone: '-',
        liveCity: '苏州市',
        remark: '学校',
        address: '江苏省苏州市吴中区吴中大道 1188 号',
        politicalStatus: '党员'
      },
      politicalStatusOptions: [
        { code: '党员', name: '党员' },
        { code: '团员', name: '团员' },
        { code: '群众', name: '群众' },
      ],
    }
  },
  methods: {
    editRemark(obj, field, value, done) {
      setTimeout(() => {
        this.$set(obj, field, value);
        done({ error: false, message: '👍 更新成功' });
      }, 1000);
    },
    handleCommit(object, field, value, done) {
      // 模拟异步保存
      setTimeout(() => {
        // 更新本地数据
        object[field] = value;
        // 通知组件完成
        done({ message: '修改成功' });
      }, 500);
    }
  }
}
</script>

<style scoped>
.desc {
  /*  */
}

</style>