<template>
  <div>

    <div class="some-panel">
      <div v-drag drag-min-top="50" style="height: 20px; background-color: blue"></div>
    </div>
    
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.some-panel {
  width: 200px;
  height: 140px;
  position: absolute;
  background-color: coral;
}
.some-panel[dragged] {
  height: 200px;
}
</style>