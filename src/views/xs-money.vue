<template>
  <div>
    <!-- 
      :symbolCanSelect="false" 货币符号可否被选中
      :show-symbol="true" 是否显示货币符号
      :precision="2" 精度
      :disable-toggle-separator="false" 是否禁用分隔符切换
      color="red"
      separator="," 分隔符
      money-symbol="￥" 货币符号
      empty-string="-" 空值显示
      empty-string-color="blue"
     -->
    <div class="test">
      价格： 
      <!-- {{ fmtMoney(price) }} -->
      <money :value="price"  />
    </div>

    <el-input v-model="price" placeholder="" style="width: 200px; margin-top: 20px;" />


  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 1234567.89
    }
  }
}
</script>

<style scoped>
.test {
  font-size: 24px;
} 
</style>