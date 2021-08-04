<template>
    <div>
      <CMTree class="myTest" :data="data"></CMTree>
    </div>
</template>

<script>

import CMTree from '@/components/cm-tree/tree.vue'

export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }]
      };
    },
    methods: {
    },
    components: {
        CMTree
    }
  };

</script>

<style scoped>

.myTest >>> .el-tree-node__children_cmwrapper {
  min-height: 140px;
}

</style>