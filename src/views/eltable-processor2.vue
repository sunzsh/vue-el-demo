<!-- 表格进度条2 -->
<template>
  <div>
    <el-table
      ref="table"
      :data="tableData"
      :row-style="rowStyle"
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
    </el-table>
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
    rowStyle({ row }) {
      return { '--process': (row.process * 100) + '%', '--row-height': '53px' }
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
.el-table >>> tr::after{
  content: ' ';
  transition: width 0.3s ease;
  background-color: #409EFF;
  width: var(--process);
  margin-top: calc(var(--row-height) - 4px);
  height: 3px;
  position: absolute;
  left: 0px;
}
</style>