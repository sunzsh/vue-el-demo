<template>
  <div
    class="el-tree"
    :class="{
      'el-tree--highlight-current': highlightCurrent,
      'is-dragging': !!dragState.draggingNode,
      'is-drop-not-allow': !dragState.allowDrop,
      'is-drop-inner': dragState.dropType === 'inner'
    }"
    role="tree"
  >
    <CMTreeNode
      v-for="child in root.childNodes"
      :node="child"
      :props="props"
      :render-after-expand="renderAfterExpand"
      :show-checkbox="showCheckbox"
      :key="getNodeKey(child)"
      :render-content="renderContent"
      @node-expand="handleNodeExpand">
    </CMTreeNode>
    <div class="el-tree__empty-block" v-if="isEmpty">
      <span class="el-tree__empty-text">{{ emptyText }}</span>
    </div>
    <div
      v-show="dragState.showDropIndicator"
      class="el-tree__drop-indicator"
      ref="dropIndicator">
    </div>
  </div>
</template>

<script>
import { Tree } from 'element-ui'
import CMTreeNode from './tree-node.vue';

export default {
  extends: Tree,
  name: 'CMTree',
  components: {
    CMTreeNode
  },
};
</script>
