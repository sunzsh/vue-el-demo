<template>
  <div style="margin: 120px">
    <!-- {{prepared}} -->
    <el-button type="primary" @click="search">查询</el-button>
    

    <el-table :data="dataList">
      <el-table-column label="公司" prop="comCode" :formatter="comFmter"></el-table-column>
      <el-table-column label="类型" prop="type" :formatter="row=>this.typeDic[row.type]?this.typeDic[row.type]:row.type"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import prepared from '@/utils/prepared';
import { getCompanies, getTypes, getData } from '@/service/base';

export default {
  mixins: [prepared(2)],
  data() {
    return {
      dataList: [],
      compDic: {},
      typeDic: {},
    }
  },
  methods: {
    search() {
      this.preparedThen(() => {
        getData().then(res => {
          this.dataList = res.data;
        })
      })
    },
    comFmter(row, column) {
      return this.compDic[row.comCode] ? this.compDic[row.comCode] : row.comCode;
    }
  },
  created() {
    getCompanies().then(res => {
      this.compDic = res;
      this.prepareSubmit();
    });

    getTypes().then(res => {
      this.typeDic = res;
      this.prepareSubmit();
    });

    this.search();
  }
};
</script>

<style>

</style>