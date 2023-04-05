<template>
  <div>

    <LabelDatePicker
      type="year"
      v-model="start"
      :arrowOffset="12"
    >
      <span style="cursor: pointer">{{ start || '请选择' }}</span>
    </LabelDatePicker>


    <!-- <el-date-picker
      type="year"
      v-model="start"
      value-format="yyyy"
      :arrowOffset="12"
    >
    </el-date-picker> -->
  </div>
</template>

<script>
import LabelDatePicker from '@/components/label-datepicker.vue';
export default {
  data() {
    return {
      start: ''
    }
  },
  components: {
    LabelDatePicker
  }
}
</script>

<style>

</style>