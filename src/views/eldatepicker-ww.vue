<template>
  <div>
    <el-date-picker 
      v-model="value"
      type="week"
      value-format="yyyy-WW"
      format="yyyy 第 WW 周"
    />
    {{ value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  }
}
</script>