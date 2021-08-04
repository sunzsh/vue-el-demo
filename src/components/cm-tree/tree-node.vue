<template>
<div
    class="el-tree-node"
    @click.stop="handleClick"
    @contextmenu="($event) => this.handleContextMenu($event)"
    v-show="node.visible"
    :class="{
      'is-expanded': expanded,
      'is-current': node.isCurrent,
      'is-hidden': !node.visible,
      'is-focusable': !node.disabled,
      'is-checked': !node.disabled && node.checked
    }"
    role="treeitem"
    tabindex="-1"
    :aria-expanded="expanded"
    :aria-disabled="node.disabled"
    :aria-checked="node.checked"
    :draggable="tree.draggable"
    @dragstart.stop="handleDragStart"
    @dragover.stop="handleDragOver"
    @dragend.stop="handleDragEnd"
    @drop.stop="handleDrop"
    ref="node"
  >
    <div class="el-tree-node__content"
      :style="{ 'padding-left': (node.level - 1) * tree.indent + 'px' }">
      <span
        @click.stop="handleExpandIconClick"
        :class="[
          { 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded },
          'el-tree-node__expand-icon',
          tree.iconClass ? tree.iconClass : 'el-icon-caret-right'
        ]"
      >
      </span>
      <el-checkbox
        v-if="showCheckbox"
        v-model="node.checked"
        :indeterminate="node.indeterminate"
        :disabled="!!node.disabled"
        @click.native.stop
        @change="handleCheckChange"
      >
      </el-checkbox>
      <span
        v-if="node.loading"
        class="el-tree-node__loading-icon el-icon-loading">
      </span>
      <node-content :node="node"></node-content>
    </div>
    <el-collapse-transition>
      <div
        class="el-tree-node__children"
        v-if="!renderAfterExpand || childNodeRendered"
        v-show="expanded"
        role="group"
        :aria-expanded="expanded"
      >
        <div class="el-tree-node__children_cmwrapper">
          <CMTreeNode
            :render-content="renderContent"
            v-for="child in node.childNodes"
            :render-after-expand="renderAfterExpand"
            :show-checkbox="showCheckbox"
            :key="getNodeKey(child)"
            :node="child"
            @node-expand="handleChildNodeExpand">
          </CMTreeNode>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script type="text/jsx">
import  ElTreeNode  from 'element-ui/packages/tree/src/tree-node.vue'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

export default {
  extends: ElTreeNode,
  name: 'CMTreeNode',
  components: {'el-collapse-transition':CollapseTransition}
};
</script>
