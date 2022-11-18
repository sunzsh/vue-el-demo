<script>
import { Table } from 'element-ui';
const TableClone = Object.assign({}, Table);
TableClone.props = Object.assign({}, TableClone.props);

delete TableClone.props.rowStyle
delete TableClone.props.rowClassName
export default {
  extends: TableClone,
  props: {
    rowStyle2: Function,
    rowClassName2: Function,
    propName4RowProcessValue: String,
    propName4RowProcessVisable: String,
  },
  methods: {
    doLayout() {
      TableClone.methods.doLayout.call(this);
      this.syncEachRowHeight();
    },
    syncEachRowHeight() {
      const tableEl = this.$el;
      if (tableEl) {
        const tbody = tableEl.querySelector('table.el-table__body tbody')
        for (const tr of tbody.children) {
          tr.style.setProperty('--row-height', tr.offsetHeight + 'px')
        }
      }
    },
    rowStyle({ row, rowIndex }) {
      const style = this.rowStyle2 ? this.rowStyle2({ row, rowIndex }) : {}
      if (this.propName4RowProcessValue) {
        style['--process'] = row[this.propName4RowProcessValue] * 100 + '%'
      }
      return style
    },
    rowClassName({ row, rowIndex }) {
      const className = this.rowClassName2 ? this.rowClassName2({ row, rowIndex }) : {}
      if (this.propName4RowProcessVisable) {
        className['row-process'] = row[this.propName4RowProcessVisable]
      } else if (this.propName4RowProcessVisable === undefined && this.propName4RowProcessValue) {
        className['row-process'] = row[this.propName4RowProcessValue] > 0
      }
      return className
    }
  },
  updated() {
    this.syncEachRowHeight();
  },
}
</script>
<style>

.el-table .row-process::after{
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