<!-- 父子组件样式重名 -->
<template>
  <div>

    <div class="home">
      父
      <test-2></test-2>   <!-- 子组件 -->
    </div>

  </div>
</template>

<script>

import Test2 from '@/components/Test2.vue';

export default {
  components: {
    Test2,
  }
}
</script>
<style scoped>
.home {
  background-color: turquoise
}
</style>