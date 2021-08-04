<template>
    <div>
        <el-date-picker
          v-model="value"
          type="datetime"
          popper-class="time-select-borderstyle1"
          placeholder="选择日期时间">
        </el-date-picker>
    </div>
</template>

<script>

export default {
  data() {
    return {
      value: undefined
    }
  }
}
</script>

<style>

.time-select-borderstyle1 .el-time-panel{
  border: 1px solid #409EFF;
}

</style>