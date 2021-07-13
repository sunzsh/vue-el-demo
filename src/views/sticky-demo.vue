<template>
    <div class="aside_wrapper">
          <div class="aside">1</div>
          <div class="aside">2</div>
          <div class="aside aside_sticky">3</div>
          <div class="aside">4</div>
          <div class="aside">5</div>
          <div class="aside">6</div>
          <div class="aside">7</div>
          <div class="aside">8</div>
          <div class="aside">9</div>
          <div class="aside">7</div>
          <div class="aside">8</div>
          <div class="aside">9</div>
          <div class="aside">7</div>
          <div class="aside">8</div>
          <div class="aside">9</div>
    </div>
</template>
<script>

export default {
  data() {
      return {
          
      }
  }
}
</script>
<style scoped>
.aside_wrapper {
}
.aside {
  display: block;
  width: 200px;
  height: 80px;
  background-color:aqua;
  border-radius: 3%;
  margin-bottom: 30px;
}
.aside_sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 66px;
  z-index: 8;
  background-color: antiquewhite;
}
</style>