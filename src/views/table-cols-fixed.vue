<!-- eltable展开配合固定列的展开内容滚动问题 -->
<template>
  <div>


    <h1>原版效果：</h1>
    <el-table
      :data="tableData"
      border
      style="width: 50%">
      <el-table-column fixed type="expand">
        <div>
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
        </div>
        <div></div>
      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-divider></el-divider>

    <h1>修改后：</h1>
    <el-table
      :data="tableData"
      class="cols-fixed-table"
      border
      style="width: 50%">
      <el-table-column fixed type="expand">
        <div class="expand-wrapper">
          testtesttesttesttesttesttesttesttesttest 修改后，这里只能固定高度了，自适应高度比较复杂，考虑到可能会有很多行，若用js监听来实现同步高度，会有性能问题
        </div>
        <div></div>
      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>



  </div>
  
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
    
  }
}
</script>

<style scoped>
.cols-fixed-table >>> .el-table__expanded-cell,
.cols-fixed-table >>> .el-table__body-wrapper {
  position: static;
}

.cols-fixed-table >>> .expand-wrapper {
  background-color: #fff;
  position: absolute;
  left: 0px;
  z-index: 999;
  width: calc(100% - 1px);
  overflow: auto;
}

.cols-fixed-table >>> .expand-wrapper, 
.cols-fixed-table >>> .expand-wrapper + div {
  height: 150px;
}

.cols-fixed-table >>> .el-table__expanded-cell {
  padding: 0px;
}
  
</style>