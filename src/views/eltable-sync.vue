<template>
  <div>

    <el-avatar shape="square" :size="30" src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erb2vicWtK05UqZ1U1lr2ayllgsWGPNP3HzHGhXpoYRLyVtclmlc7Z5J0tLibiaFafMyQm6niaJl5AACw/132" />
  
    <el-table 
      :data="tableData" 
      :row-class-name="selectedClass" 
      @row-click="clickRow"
    >
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
    </el-table>

  </div>
</template>

<script>

function ajaxData() {
  return new Promise((resolve, reject) => {
    const data = []
    for (let i = 0; i < 10; i++) {
      data.push({
        name: 'name' + i,
        age: 20 + i
      })
    }
    resolve(data);
  });
}

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    ajaxData().then(data => {
      this.tableData = data;
      this.tableData.forEach(obj => {
        debugger
        this.$set(obj, 'selected', false);
      })
    })
  },
  methods: {
    clickRow(row) {
      row.selected = !row.selected
    },
    selectedClass({ row }) {
      if (row.selected) {
        return 'selected-row'
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .selected-row, ::v-deep .selected-row.selected-row.selected-row td:hover {
  color: rgb(29, 78, 142);
  font-weight: bold;
}
</style>
