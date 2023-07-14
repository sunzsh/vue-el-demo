<template>
  <div>
    <div style="margin-bottom: 16px">
      <el-button type="primary" @click="addRow">新增</el-button>
      <el-button @click="delRow">删除</el-button>
    </div>
    <el-table ref="mytable" height="200" :data="tableData" border @selection-change="selectionChange">
      <el-table-column align="center" type="selection" fixed></el-table-column>
      <el-table-column fixed align="center" type="index">
        <template #header>#</template>
      </el-table-column>
      <el-table-column align="center" label="field1" prop="field1" width="120px">
        <template slot-scope="scope">
          <el-select style="width: 100%" v-model="scope.row.field1" @input="$refs.mytable.doLayout()" multiple>
            <el-option value="选项一很长哟选项一很长哟"></el-option>
            <el-option value="选项二很长哟选项二很长哟"></el-option>
            <el-option value="选项三很长哟选项三很长哟"></el-option>
            <el-option value="选项四很长哟选项四很长哟"></el-option>
            <el-option value="选项五很长哟选项五很长哟"></el-option>
            <el-option value="选项六很长哟选项六很长哟"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center" label="field2" prop="field2"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
 data: function () {
    return {
      currentSelectionRows: [],
      tableData: [
        {
          field1: "1",
          field2: "2"
        }
      ]
    };
  },
  methods: {
    addRow() {
      this.tableData.push({});
    },
    selectionChange(val) {
      this.currentSelectionRows = val;
    },
    delRow() {
      this.$confirm("确认删除选中的行吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.tableData = this.tableData.filter((item) => {
          return !this.currentSelectionRows.includes(item);
        });
        this.currentSelectionRows = [];
      });
    }
  }
}
</script>

<style scoped>
</style>