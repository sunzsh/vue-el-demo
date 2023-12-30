<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    <h1>问题描述</h1>
    <div>当我给页面body 设置 zoom 不为 1的时候,页面如果此时咩有滚动，分页器下拉框不会产成错位，当页面有滚动的时候分页器下拉框出现错位</div>
    <h1 v-for="item in 20" :key="item">demo</h1>

    <el-button type="primary" @click="setZoom">给body设置zoom为0.9</el-button>
    <el-button type="primary" @click="setZoomone">给body设置zoom为1</el-button>
    <el-pagination
      v-fixZoom
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    <div>
      <!-- <br><br>
      <el-select v-model="model" placeholder="">
        <el-option label="1" value="1"></el-option>
        <el-option label="22" value="2"></el-option>
      </el-select>
      <br><br>
      <el-tooltip content="Top center" placement="top">
        <el-button>我是下面的ToolTip</el-button>
      </el-tooltip>
      <br><br> -->
      <el-popconfirm
        confirm-button-text='好的'
        cancel-button-text='不用了'
        icon="el-icon-info"
        icon-color="red"
        title="这是一段内容确定删除吗？"
      >
        <el-button v-fixZoom slot="reference">删除</el-button>
      </el-popconfirm>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        model: 1
      };
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      setZoom(){
        document.body.style.zoom = '0.9';
      },
      setZoomone(){
        document.body.style.zoom = '1';
      }
    }
  }
</script>

<style scoped>
.block{
  margin-bottom:500px;
}
</style>