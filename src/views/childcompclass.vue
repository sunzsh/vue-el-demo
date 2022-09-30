<!-- 父子组件样式重名 -->
<template>
  <div>

    <div class="home">
      <test-2></test-2>
      123123
    </div>

  </div>
</template>

<script>

import Test2 from '@/components/Test2.vue';

export default {
  components: {
    Test2,
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.home {
  background-color: blue;
}
</style>