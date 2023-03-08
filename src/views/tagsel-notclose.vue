<template>
  <div class="query-wrapper">
    <el-row type="flex" justify="space-between">
      <el-col :span="5">
        <span class="query-label">关键字：</span>
        <el-input v-model="txtSearch" placeholder="请输入关键字" clearable />
      </el-col>
      <el-col :span="5" style="align-items: flex-start">
        <span class="query-label">标签：</span>
        <el-popover
          ref="popoverTags"
          v-scoped="this"
          placement="bottom-start"
          transition="transition-popover-tb"
          :visible-arrow="false"
          popper-class="popover-tags"
          width="201"
          trigger="click"
          @show="tagsPopoverShowing=true"
          @hide="tagsPopoverShowing=false"
        >
          <div style="">
            <el-checkbox-group v-model="checkedTags">
              <el-checkbox v-for="(tag) in allTags" :key="tag.id" :label="tag.id" class="tag-item">{{ tag.name }}</el-checkbox>
            </el-checkbox-group>
          </div>
          <el-button slot="reference" class="dis-btn-hover">
            <!-- <span style="font-weight: bold; margin-right: 8px;">标签</span> -->
            <div style="display:inline-block; width: 100px;">
              <span v-show="!checkedTags || checkedTags.length === 0" style="color: var(--color-fontb9)">
                请选择
              </span>
              <span v-show="checkedTags && checkedTags.length > 0">
                <span style="">已选</span>
                <span> ( {{ checkedTags.length }} ) </span>
                <!-- <span class="blue-badge">{{ checkedTags.length }}</span> -->
              </span>
            </div>
            <i v-if="checkedTags && checkedTags.length > 0" class="el-icon-circle-close tag-popover-close" style="margin-left: 12px;" @click.stop="checkedTags = []" />
            <i v-else class="el-icon-arrow-down tag-popover-arrow" :class="{ 'opening':tagsPopoverShowing }" style="margin-left: 12px;" />
          </el-button>
        </el-popover>
      </el-col>
      <el-col :span="6">
        <span class="query-label">地址：</span>
        <el-input v-model="addrSearch" placeholder="模糊匹配地址" clearable />
      </el-col>
      <el-col :span="3" style="align-items: flex-start">
        <span class="query-label">&nbsp;</span>
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtSearch: '',
      addrSearch: '',
      allTags: [
        { name: '豪华型', id: 0 },
        { name: '中型', id: 1 },
        { name: '混合动力车', id: 2 },
        { name: '后驱', id: 3 },
        { name: '汽油车', id: 4 },
        { name: '奔驰', id: 5 },
        { name: '跑车', id: 6 },
        { name: '油耗高', id: 7 },
        { name: '商用车', id: 8 },
        { name: 'SUV', id: 9 },
        { name: '前驱', id: 10 },
        { name: '轿车', id: 11 }
      ],
      tagsPopoverShowing: false,
      checkedTags: []
    }
  }
}
</script>

<style lang="scss" scoped>



.query-wrapper {
  --color-font2: #595959;
  --color-fontb9: #b9b9b9;
  --content-padding: 16px;
  margin-bottom: var(--content-padding);
  padding-bottom: var(--content-padding);
  border-bottom: 1px solid #F5F5F5;
  .query-label {
    font-size: 13px;
    color: var(--color-font2);
    cursor: default;
  }
  .date-split {
    text-align: center;
    line-height: 32px;
    font-size: 13px;
    color: var(--color-font2);
  }
  > .el-row {
    margin-bottom: 12px;
    > .el-col {
      display: flex;
      flex-direction: column;
    }
  }
  .query-line-height {
    .el-radio {
      line-height: 32px;
    }
  }
}

.popover-tags {
  max-height: calc(100vh - 250px);
  overflow: auto;
  padding: 6px 0px;
  .tag-item {
    width: 100%;
    .el-checkbox__label {
      width: 100%;
    }
    height: 34px;
    line-height: 34px;
    margin: 0px;
    padding: 0px 12px;
    &:hover {
      background-color: #0000000d;
    }
  }
}
.tag-popover-arrow {
  transition: transform .5s;
  &.opening {
    transform: rotate3d(1, 0, 0, 180deg);
  }
}
.tag-popover-close {
  opacity: 0.6;
  &:hover {
    opacity: 0.9;
  }
}

.el-button {
  &.dis-btn-hover:hover, &.dis-btn-hover:focus {
    background-color: rgba(255, 255, 255, 0.93);
    color: var(--color-font2);
    border-color: #DCDFE6;
  }
}

.transition-popover-tb-enter-active, .transition-popover-tb-leave-active {
  transition: all .2s;
}
.transition-popover-tb-enter, .transition-popover-tb-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>