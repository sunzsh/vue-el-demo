import { Pagination } from 'element-ui'

const PaginationPatched = {
  extends: Pagination,
  mounted() {
    const input = this.$el.querySelector('input[type=number]')
    if (input) {
      input.oninput = (e) => {
        if (e.data === '' && e.target.value === '') {
          e.target.value = '0'
          setTimeout(() => { e.target.value = '' }, 0);
        }
      }
    }
  }
}

export default {
  install(Vue) {
    Vue.component(Pagination.name, PaginationPatched);
  }
}