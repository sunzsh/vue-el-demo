export default function elTableScrollToRow($table, rowData) {
  const bodyWrapper = $table.$el.querySelector('.el-table__body-wrapper')
  const rowIndex = $table.data.indexOf(rowData)
  const tr = bodyWrapper.querySelectorAll('tr')[rowIndex]
  if (!bodyWrapper || !tr) {
    return
  }
  if (bodyWrapper.clientHeight + bodyWrapper.scrollTop < tr.offsetTop + tr.clientHeight || tr.offsetTop < bodyWrapper.scrollTop) {
    bodyWrapper.style.scrollBehavior = 'smooth'
    bodyWrapper.scrollTop = tr.offsetTop + tr.clientHeight - bodyWrapper.clientHeight
  }
}