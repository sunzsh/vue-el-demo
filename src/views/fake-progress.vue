<template>
  <div>
    <el-progress 
      type="circle" 
      :percentage="parseInt(fake.progress*100)"
    />

    <div>
      {{ fake.progress }}
    </div>
    <el-button type="primary" @click="fake.end()">结束</el-button>
  </div>
</template>

<script>
import FakeProgress from 'fake-progress'

export default {
  data() {

    return {
      fake: new FakeProgress({
        timeConstant : 10000,
        autoStart : true
      })

    }

  }
}
</script>

<style>

</style>