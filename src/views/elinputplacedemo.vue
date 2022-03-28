<template>
    <div style="padding-top: 30px;">


      <el-input class="myTxt" placeholder="请输入内容" data-foo="nihao"/>


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


.myTxt {
  width: 200px;
}
.myTxt ::v-deep input::after {
  content:attr(class) ' ';
  background-color: red;
  position: absolute;
  top: 0px;
  left: 0px;
}
.myTxt:has(> img) {
  
}


</style>