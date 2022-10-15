<!-- 折叠百分比高度demo，应用布局 -->
<template>
  <div>

    <div class="conatiner">
      <div class="left">
         <el-collapse class="my_colp" v-model="activeName" accordion>
          <MyElCollapseItem title="一致性 Consistency" name="1">
            <div class="content">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </div>
          </MyElCollapseItem>
          <MyElCollapseItem title="反馈 Feedback" name="2">
            <div class="content">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </div>
          </MyElCollapseItem>
          <MyElCollapseItem title="效率 Efficiency" name="3">
            <div class="content">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </div>
          </MyElCollapseItem>
        </el-collapse>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import MyElCollapseItem from '@/components/MyElCollapseItem.vue'
export default {
  data() {
    return {
      activeName: '1'
    }
  },
  components: {
    MyElCollapseItem
  }
}
</script>

<style scoped>

  .conatiner {
      display: flex;
      align-items: stretch;
      padding: 20px;
      height: 80vh;
  }
  .left {
      width: 200px;
  }
  .right {
      flex: 1;
      height: 100%;
      background-color: aqua;
  }

  .my_colp {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
      box-sizing: border-box;
  }
</style>