<template>
    <div>
            <div class="box">box-sizing</div>
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
.box {
    font-size: 32px;
    background-color:rgb(224, 168, 168);
    width: 260px;
    height: 260px;
    padding-left: 40px;
    border-left: 5px solid #000;

    
    /* box-sizing: content-box; */
    /* box-sizing: padding-box; */
    box-sizing: border-box;
    /* box-sizing: margin-box; */

}
</style>