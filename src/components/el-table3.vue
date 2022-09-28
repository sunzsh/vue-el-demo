<script>
    import { Table } from 'element-ui';
    export default {
        extends: Table,
        mounted() {
            this.$nextTick(function () {
                let thead = this.$el.querySelector('.el-table__header-wrapper thead');
                let theadNew = thead.cloneNode(true);
                this.$el.querySelector('.el-table__body-wrapper table').appendChild(theadNew);
            })
        },
    }
</script>
<style scoped>
    .el-table >>> .el-table__body-wrapper thead {
        display: none;
    }
    @media print {
        .el-table >>> .el-table__header-wrapper {
            display: none;
        }
        .el-table >>> .el-table__body-wrapper thead {
            display: table-header-group;
        }
    }
</style>