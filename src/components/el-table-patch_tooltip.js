import { Table } from 'element-ui'

const TablePatched = {
  extends: Table,
  mounted() {
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('keyup', this.keyup)
  },
  destroyed() {
    document.removeEventListener('keydown', this.keydown)
    document.removeEventListener('keyup', this.keyup)
  },
  methods: {
    keydown(e) {
      if (e.key !== 'Alt') {
        return
      }
      const tableBody = this.$children.find(item => item.$options._componentTag === 'table-body')
      if (!tableBody.$refs.tooltip || !tableBody.$refs.tooltip.expectedState) {
        return
      }
      tableBody.$refs.tooltip.handleClosePopperBak = tableBody.$refs.tooltip.handleClosePopper
      tableBody.$refs.tooltip.handleClosePopper = () => {} // 👈 重点
      
      tableBody.$refs.tooltipBak = tableBody.$refs.tooltip
      delete tableBody.$refs.tooltip // 👈 重点
    },
    keyup(e) {
      if (e.key !== 'Alt') {
        return
      }
      const tableBody = this.$children.find(item => item.$options._componentTag === 'table-body')
      if (!tableBody.$refs.tooltipBak) {
        return
      }
      tableBody.$refs.tooltip = tableBody.$refs.tooltipBak
      delete tableBody.$refs.tooltipBak

      tableBody.$refs.tooltip.handleClosePopper = tableBody.$refs.tooltip.handleClosePopperBak
      delete tableBody.$refs.tooltip.handleClosePopperBak
    }
  }
}

export default {
  install(Vue) {
    Vue.component(Table.name, TablePatched);
  }
}