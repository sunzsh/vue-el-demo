<template>
  <div>
    <el-input v-clickoutside="clickoutside" v-model="name" />
    <div ref="testResize" style="width: 80%; background-color: red">test</div>
    <el-button @click="showing=!showing" type="primary">切换</el-button>
  </div>
</template>

<script>
import { formatDate } from 'element-ui/src/utils/date-util'
import Clickoutside from 'element-ui/src/utils/clickoutside'
import { getValueByPath } from 'element-ui/src/utils/util'
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'
export default {
  directives: { Clickoutside },
  data() {
    return {
      name: 'test',
      showing: true
    }
  },
  mounted() {
    console.log(formatDate(new Date(), 'yyyy-MM-dd'));
    addResizeListener(this.$refs.testResize, this.resizeDiv)
    const user = { name: 'zhangsan', addr: { city: '北京'}}
    console.log(getValueByPath(user, 'addr.city'));
  },
  destroyed() {
    removeResizeListener(this.$refs.testResize, this.resizeDiv);
  },
  methods: {
    clickoutside() {
      console.log('clickoutside');
    },
    resizeDiv() {
      console.log('resize div');
    }
  }
}
</script>

<style scoped>
.test {
  background-color: red;
}
</style>