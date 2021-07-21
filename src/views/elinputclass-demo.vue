<template>
    <div style="padding-top: 30px;">


      <el-input class="myTxt" placeholder="请输入内容"/>


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

 .myTxt ::v-deep input {
  background-color: #000;
}


</style>