<template>
  <div>
    <p>1. 对话框设置了<code>destroy-on-close</code>属性，</p>
    <p>2. 对话框内表单有一个 input 被 tooltip 包裹，</p>
    <p>3. 关闭并再次打开对话框，input 值丢失，未被包裹的 input 没有问题</p>
    <p></p>
    <el-button @click="openDialog">Button</el-button>
    <el-dialog ref="dd" :visible.sync="visible" title="Hello world" :destroy-on-close="true" @opened="showD">
      <el-button @click="changeData">CLICK</el-button>
      <el-form ref="form" :model="form" label-width="120px">
        <el-tooltip class="item" effect="dark" content="设置了destroy-on-close属性，且input被tooltip包裹，关闭并再次打开对话框时，input值丢失" placement="top">
          <el-form-item label="被 tooltip 包裹" prop="deviceSerialNumber">
            {{form.deviceSerialNumber}}
            <el-input v-model="form.deviceSerialNumber" placeholder="请输入设备序列号" />
          </el-form-item>
        </el-tooltip>
        
        <el-form-item label="未被包裹的" prop="name">
            <el-input v-model="form.name" placeholder="" />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data: function() {
        return { 
          visible: false,
          form: {
            deviceSerialNumber: '123456',
            name: '设备-1'
          }
        }
    },
    methods: {
        showD() {
            // console.log(this.$refs.dd.updatePopper());
        },
        openDialog() {
            this.visible = true
        },
        changeData() {
            this.form.deviceSerialNumber = "222222222222222"
            this.form.name = "设备-99999"
        }
    }
}
</script>

<style>

</style>