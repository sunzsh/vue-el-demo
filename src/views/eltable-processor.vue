<!-- 表格进度条 -->
<template>
  <div>
    <!-- :row-class-name2="rowProcessClassName" -->
    <!-- :row-style2="rowProcess" -->
    <!-- propName4RowProcessVisable="showProcess" -->
    <el-table5
      ref="table"
      :data="tableData"
      propName4RowProcessValue="process"
      propName4RowProcessVisable="showProcess"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="进度值">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.process" size="mini" :precision="2" :step="0.02" :min="0" :max="1"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="进度">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.showProcess">
          </el-switch>
        </template>
      </el-table-column>
    </el-table5>
    <br>
    <el-button type="" @click="mock(2, 0.8)">测试</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          process: 0.2,
          showProcess: true
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          process: 0.3,
          showProcess: true
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          process: 0,
          showProcess: false
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          process: 0,
          showProcess: false
      }]
    }
  },
  methods: {
    rowProcess({ row }) {
      return { 'color': 'red'}
    },
    rowProcessClassName({ row }) {
      return { 'test': true }
    },
    mock(index) {
      const row = this.tableData[index];
      row.showProcess = true
      row.process = 0
      let inc = () => {
        row.process += 0.03
        if (row.process < 1) {
          setTimeout(inc, 30)
        } else {
          setTimeout(() => {
            row.showProcess = false
          }, 400);
        }
      }
      inc()
    }
  }
}
</script>
<style scoped>
>>> .test {
  background-color: lemonchiffon;
}
</style>