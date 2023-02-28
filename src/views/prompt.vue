<!-- prompt自动全选 -->
<template>
  <div>
    {{ name }}
    <i class="el-icon-edit" style="cursor: pointer" @click="modify" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '张三'
    }
  },
  methods: {
    modify() {
      const uid = Math.random().toString(36).substring(2)
      this.$prompt('请输入新名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: this.name,
        customClass: uid,
        onOpen: () => {
          document.querySelector(`.${uid} .el-input__inner`).select()
        }
      }).then(({ value }) => {
        this.name = value
      })

    }
  }
}
</script>