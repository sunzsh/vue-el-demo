<template>
    <div>
            <div class="wrapper">
                <div class="left">left</div>
                <div class="right">right</div>
            </div>
    </div>
</template>
<script>

export default {
  data() {
      return { 
          msg: undefined
      }
  }
}
</script>
<style scoped>
.wrapper {
    width: 100%;
}
.wrapper div {
    display: inline-block;
height: 80px;
}

.left {
    background-color: rgb(137, 137, 199);
    padding-left: 20px;
    box-sizing: border-box;
    width: 50%;
}
.right {
    background-color: rgb(148, 194, 146);
    width: 50%;
}
</style>