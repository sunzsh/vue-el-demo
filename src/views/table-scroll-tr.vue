<template>
  <div>
    <el-button @click="start" :loading="staring" type="primary">start</el-button>
    <el-table
      ref="tbldemo"
      :data="tableData"
      height="250"
      border
      :row-class-name="({row})=>row.loading?'is-loading-row':''"
      style="width: 100%">
      <el-table-column
        prop="ind"
        label="序号"
        align="center"
        width="80">
        <template slot-scope="scope">
          <i class="el-icon-check" v-if="scope.row.status === 1" style="color: green"></i>
          <i class="el-icon-loading" v-else-if="scope.row.loading"></i>
          <span v-else>{{scope.$index + 1}}</span>
        </template>
      </el-table-column>
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
    </el-table>
  </div>
</template>

<script>
  import elTableScrollToRow from '@/utils/elTableScrollToRow.js'
  export default {
    data() {
      return {
        staring: false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          loading: false,
          status: 0
        }]
      }
    },
    methods: {
      async testAjaxing() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 500)
        });
      },
      async start() {
        this.tableData.forEach(item => item.status = 0)
        this.staring = true
        for (const item of this.tableData) {
          item.loading = true

          // 滚动到这一行
          elTableScrollToRow(this.$refs.tbldemo, item)

          await this.testAjaxing()    // 模拟ajax请求
          
          item.status = 1
          item.loading = false
        }
        this.staring = false
      }
    }
  }
</script>
<style scoped>
::v-deep .is-loading-row {
  background-color: #40a0ff32;
}
</style>