<template>
  <div>
    <!-- @finish="hilarity" -->
    <el-statistic 
      :value="deadline"
      format="HH:mm:ss" 
      time-indices
    />
  </div>
</template>

<script>

export default {
  data() {
    return {
      deadline: Date.now() + 1000 *  60 * 60 * 2
    }
  }
}
</script>

<style>

</style>