<template>
    <div>
        <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogTableVisible" width="60vw">
            <el-table :data="gridData">
                <el-table-column property="date" label="日期" minWidth="150"></el-table-column>
                <el-table-column property="name" label="姓名" minWidth="200"></el-table-column>
                <el-table-column property="address" label="地址" minWidth="200"></el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gridData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            dialogTableVisible: false,
        }
    }
}
</script>

<style>

</style>