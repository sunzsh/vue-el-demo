<template>
  <div style="">
    <div style="width: 20vw; margin:80px auto 0px auto">

      <el-input v-model="name" :class="{'apply-shake':shakeTxtName}" placeholder="请填写昵称"></el-input>
      
      <div style="text-align: center; margin-top: 20px;">
        <el-button type="primary" @click="sumbit">确定</el-button>
      </div>
      
    </div>

    <div style="width: 45vw; margin:80px auto 0px auto">
      <el-table
        :data="tableData"
        @row-click="checkRow"
        :row-class-name="tableRowClassName"
        style="width: 100%">
        <el-table-column
          prop="checked"
          label=""
          class-name="checked-column"
          width="40">
          <template slot-scope="scope">
            <i v-if="scope.row.checked" class="el-icon-success"></i>
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
          width="100">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          width="80">
          <template slot-scope="scope">
            <div :class="{ 'apply-shake': scope.row.shake }">
              {{scope.row.gender}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <div style="text-align:right; margin-top: 20px; ">
      <el-button type="">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      shakeTxtName: false,
      tableData: [{
        date: '2016-05-02',
        name: '张三',
        gender: '男',
        address: '上海市普陀区金沙江路 1518 弄',
        checked: false,
        shake: false,
      }, {
        date: '2016-05-04',
        name: '李四',
        gender: '男',
        address: '上海市普陀区金沙江路 1517 弄',
        checked: false,
        shake: false,
      }, {
        date: '2016-05-01',
        name: '王五',
        gender: '女',
        address: '上海市普陀区金沙江路 1519 弄',
        checked: false,
        shake: false,
      }, {
        date: '2016-05-03',
        name: '赵六',
        gender: '男',
        address: '上海市普陀区金沙江路 1516 弄',
        checked: false,
        shake: false,
    }]
    };
  },
  methods: {

    sumbit() {
      if (this.name === '') {
        this.shakeTxtName = true;
        setTimeout(() => {
          this.shakeTxtName = false;
        }, 820);
        return;
      }
      this.$message('确定');
    },

    checkRow(row) {
      if (row.gender === '女') {
        row.shake = true;
        setTimeout(() => {
          row.shake = false;
        }, 820);
        return;
      }
      row.checked=!row.checked
    },

    tableRowClassName({row}) {
      if (row.checked) {
        return 'row checked-row';
      }
      return 'row';
    }
  }
}
</script>

<style scoped>
>>> .row {
  cursor: pointer;
}
>>> .checked-row {
  background-color: #40a0ff1e;
}
>>> .checked-column {
  text-align: center;
  color: #409EFF;
  font-size: 16px;
}
/* Standard syntax */
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.apply-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
</style>