<template>
    <div>
        <CMCalendar v-model="value"></CMCalendar>
    </div>
</template>
<script>
import CMCalendar from '@/components/cm-calendar'

export default {
  data() {
      return {
          value: undefined
      }
  },
  components: {
      CMCalendar
  }
}
</script>
<style scoped>

</style>