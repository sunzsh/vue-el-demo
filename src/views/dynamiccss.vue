<!-- 动态css -->
<template>
  <div>

    <div :style="declareBgColor" class="bg">
      test
    </div>

    <input v-model="bgColor" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: 'blue'
    }
  },
  computed: {
    declareBgColor() {
      return `--bgColor: ${this.bgColor};`
    }
  }
}
</script>

<style scoped>

.bg {
  
  background-color: var(--bgColor);
}


</style>