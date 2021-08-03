<template>
    <div>
        <vxe-toolbar>
          <template #buttons>
            <vxe-button icon="fa fa-plus" @click="insertEvent">新增</vxe-button>
            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>
            <vxe-button @click="getInsertEvent">获取新增</vxe-button>
            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
            <vxe-button @click="revertEvent">还原</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          show-overflow
          keep-source
          ref="xTable"
          :data="tableData"
          :checkbox-config="{range: true}"
          :mouse-config="{selected: true}"
          :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true, isChecked: true}"
          :edit-config="{trigger: 'dblclick', mode: 'cell', showStatus: true, icon: 'fa fa-pencil-square-o'}">
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: '$select', options: sexList}"></vxe-table-column>
          <vxe-table-column field="address" title="Address" :edit-render="{name: 'input'}"></vxe-table-column>
        
        </vxe-table>
    </div>
</template>

<script>
import XEUtils from 'xe-utils'

export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: '鸿星尔克', role: 'Develop', sex: '0', age: 28, address: '北京' },
                { id: 10002, name: '蜜雪冰城', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
                { id: 10003, name: '程序员小山与Bug', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Summer', role: 'Designer', sex: '1', age: 23, address: '青岛' },
                { id: 10005, name: '拿来吧你', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'zhaoey', role: 'Designer', sex: '1', age: 21, address: '大连' }
              ],
              sexList: [
                { label: '', value: '' },
                { label: '男', value: '1' },
                { label: '女', value: '0' }
              ]
            }
          },
          methods: {
            insertEvent () {
              const $table = this.$refs.xTable
              $table.insert().then(({ row }) => {
                $table.setActiveCell(row, 'name')
              })
            },
            getInsertEvent () {
              const $table = this.$refs.xTable
              const insertRecords = $table.getInsertRecords()
              this.$XModal.alert(JSON.stringify(insertRecords))
            },
            getRemoveEvent () {
              const $table = this.$refs.xTable
              const removeRecords = $table.getRemoveRecords()
              this.$XModal.alert(JSON.stringify(removeRecords))
            },
            getUpdateEvent () {
              const $table = this.$refs.xTable
              const updateRecords = $table.getUpdateRecords()
              this.$XModal.alert(JSON.stringify(updateRecords))
              console.log(this.tableData[0].name);
            },
            revertEvent () {
                this.$refs.xTable.revertData()
            }
          }
        }
</script>

<style scoped>

</style>