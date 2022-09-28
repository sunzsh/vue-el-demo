<template>
  <div>
    {{test}}
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  computed: {
    test() {
      console.log('---------');
      return this.msg;
    }
  }
  
}
</script>