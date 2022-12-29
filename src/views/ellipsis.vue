<template>
  <div>


    {{ sl }}
    <br />
    <div v-trunced="sl" class="test"> {{value}}</div>
    <input v-model="value" />


  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'testtests',
      sl: false
    }
  }
}
</script>

<style scoped>
.test {
  background-color: red;
  color: #fff;
  width: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>