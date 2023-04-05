<template>
  <span>
    <MyDatePicker
      ref="mypicker"
      :value="pickerValue"
      @input="changeValue"
      v-bind="$attrs" />
    <span class="span-datepicker-label-wrapper" @click="clickLabel">
      <slot />
    </span>
  </span>
</template>
<script>
import { DatePicker } from 'element-ui';
const MyDatePicker = {
  extends: DatePicker,
  name: 'SpanDatePicker',
  data() {
    return {
      referenceDom: null
    }
  },
  computed: {
    reference() {
      return this.referenceDom || this.$refs.reference.$el.nextElementSibling;
    }
  },
  mounted() {
    this.$refs.reference.$el.style.display = 'none';
  }
}
export default {
  components: {
    MyDatePicker
  },
  data() {
    return {
      pickerValue: this.value
    }
  },
  mounted() {
    this.$refs.mypicker.referenceDom = this.$slots.default[0].elm
  },
  methods: {
    clickLabel() {
      this.$refs.mypicker.showPicker()
    },
    changeValue(val) {
      this.pickerValue = val
      this.$nextTick(() => {
        this.$emit('input', this.$refs.mypicker.displayValue)
      })
    }
  }
}
</script>