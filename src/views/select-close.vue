<template>
  <div class="app-container">
    <el-select ref="sel" v-model="serviceName" placeholder="请选择" size="mini">
      <el-option
        v-for="(item, index) in serviceList"
        :key="index"
        :label="item.service_alias"
        :value="item.service_name"
      />
      <el-pagination
        ref="pag"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceName: null,
      serviceList: [
        {
          service_alias: 1,
          service_name: 1
        },
        {
          service_alias: 2,
          service_name: 2
        },
        {
          service_alias: 3,
          service_name: 3
        }
      ]
    };
  },
  mounted() {
    const _handleClose = this.$refs.sel.handleClose;
    this.$refs.sel.handleClose = () => {
      const pageSizeSelect = this.$refs.pag.$children.find(item => item.$el.classList.contains('el-pagination__sizes')).$children[0];
      if (!pageSizeSelect.visible) {
        _handleClose();
      }
    }
  }
};
</script>
