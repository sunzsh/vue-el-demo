<template>
  <div>
    <el-table border :data="gridData">
      <el-table-column
        width="150"
        property="date"
        label="日期"
      ></el-table-column>
      <el-table-column
        width="100"
        property="name"
        label="姓名"
      ></el-table-column>
      <el-table-column
        width="300"
        property="address"
        label="地址"
      ></el-table-column>
      <el-table-column width="180" label="操作" fixed="right" align="center">
        <template slot-scope="scope">

          <el-popover
            placement="right"
            width="400"
            trigger="click"
            @hide="hideClick(scope.$index)"
          >
            <demo v-if="scope.row.isShow" :ref="'demo' + scope.$index" v-fixed-column-ref></demo>

            <el-button slot="reference" @click="btnClick(scope.$index)">click 激活{{ scope.row.isShow }}</el-button>
          </el-popover>

        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
  
  <script>
  import demo from "./20241203children"

export default {
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "<NAME>",
          address: "上海市普陀区金沙江路 1518 弄",
          isShow: false,
          key: 0,
        },
        {
          date: "2016-05-04",
          name: "<NAME>",
          address: "上海市普陀区金沙江路 1517 弄",
          isShow: false,
          key: 1,
        },
      ],
      isShow: false,
    };
  },
  components: {
    demo,
  },
  methods: {
    btnClick(idx) {
      this.gridData[idx].isShow = true;
      
      this.$nextTick(() => {

        this.$refs["demo" + idx].init();

        
      });
    },
    hideClick(idx) {
      this.gridData[idx].isShow = false;
    },
  },
};
</script>
  

  