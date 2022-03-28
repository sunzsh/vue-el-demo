<template>
    <div>
          <!-- type="datetime" -->
        <el-date-picker
          v-model="value"
          popper-class="time-select-borderstyle1"
          :default-value="timeDefaultShow"
          :picker-options="op"
          type="month"
          popperClass="test"
          placeholder="选择日期时间">
        </el-date-picker>
    </div>
</template>

<script>


export default {
  data() {
    return {
      value: undefined,
      op: {
        cellClassName: function (date) {
          if(date.format('yyyy-MM-dd') == '2022-01-02')
          return 'today2'
        }
      },
      timeDefaultShow:'2022-01-09'
    }
  },
  methods:{
    
  }
}
</script>

<style>

.time-select-borderstyle1 .el-time-panel{
  border: 1px solid #409EFF;
}


.el-date-table td.today span, .el-month-table td.today .cell, .el-year-table td.today .cell {
    color: inherit;
    font-weight: inherit;
}



.el-date-table td.today2 span {
    color: #409eff;
    font-weight: bold;
}
</style>