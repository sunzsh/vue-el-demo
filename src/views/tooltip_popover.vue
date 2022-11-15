<!-- el-tooltip disable变化导致错位问题 -->
<template>
  <div>
    

  <el-popover
    placement="right-start"
    width="180"
    trigger="manual"
    v-model="openMsg">
    <div style="height: 200px">消息列表...</div>
    <el-tooltip :disabled="openMsg" slot="reference" ref="tool" content="消息" placement="right">
      <el-button @click="openMsg=!openMsg; $refs.tool.updatePopper()" icon="el-icon-message" ></el-button>
    </el-tooltip>
  </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMsg: false
    }
  },
  methods: {
  }
}
</script>

<style>

</style>