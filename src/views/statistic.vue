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
  },
  methods: {
    // 获取地址栏参数
    getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    },

    // 四舍五入，增加千分位分隔符
    round(num) {
      return Number(Math.round(num * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
  }
}
</script>

<style>
/* 抖动提醒动画 */
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

/* 抖动提醒类 */
.shake {
  animation: shake 0.5s ease-in-out;
}
</style>