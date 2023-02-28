<template>
  <div>
    <span v-clickoutside="close">test</span>
  </div>
</template>

<script>
import Clickoutside from 'element-ui/src/utils/clickoutside'
export default {
  directives: { Clickoutside },
  methods: {
    close() {
      this.$message('外部被点击')
    }
  }
}
</script>