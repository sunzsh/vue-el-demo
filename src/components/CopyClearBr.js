const CopyClearBr = {
  install(Vue) {
    Vue.component('copy-clearbr', {
      render(h) {
        return h('pre', {
          style: {
            'height': '0',
            'line-height': '0',
            'font-size': '0',
            'width': '0'
          }
        }, '%%BR%%')
      }
    })
    addEventListener('copy', (event) => {
      const selection = window.getSelection()
      const str = selection.toString().replace(/\n+%%BR%%\n+/g, '')
      event.clipboardData.setData('text/plain', str)
      event.preventDefault()
    })
  }
}
export default CopyClearBr
