<!-- disabled禁用bug2 -->
<template>
  <div style="text-align: center;">


    {{test}}
    <br/>
    <input v-model="xiaoshanA" />

    <input v-model="xiaoshanB" />

  </div>
</template>

<script>

export default {
  data() {
    return {
      xiaoshanA: 'a',
      xiaoshanB: 'b',
    }
  },
  computed: {
    test() {
      console.log('-------');
      return window.g ? this.xiaoshanA : this.xiaoshanB;
    }
  },
}
</script>