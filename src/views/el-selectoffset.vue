<template>
   <div>
    <!-- 我想修改select的el-select-dropdown的样式，想渲染必须放到 <div id="app"> 中，
      查看elementui的文档说有个属性 popper-append-to-body可以用，但是发现有个dropdown错位的bug
    -->
    <div style="padding: 20px">
      <span>不在el-form里的正常</span>
      <el-select v-model="form.region" placeholder="请选择活动区域" :popper-append-to-body="false">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </div>
    <el-form :model="form" label-width="125px">
      <el-form-item label="dropdown正常">
        <el-select v-model="form.region" placeholder="请选择活动区域" :popper-append-to-body="true">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="dropdown错位" >
        <el-select v-model="form.name" placeholder="请选择活动区域" :popper-append-to-body="false">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>


export default {
  data() {
      return {
        
        form:{
          region: '',
          name: ''
        }
      }
  }
}
</script>

<style scoped>
    .select-item .el-form-item__content {
      margin-left: 0px !important;
      /* position: initial; */
    }
</style>