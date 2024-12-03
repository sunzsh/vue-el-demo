<template>
  <span @click="selectFile">
    <input type="file" @change="onFileChange" ref="excelInput" />
    <slot></slot>
  </span>
</template>

<script>
import Excel from "exceljs";

export default {
  data() {
    return {
      excelData: [],
    };
  },
  methods: {
    selectFile() {
      this.$refs.excelInput.click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = new Excel.Workbook();
        await workbook.xlsx.load(data);

        const sheet = workbook.worksheets[0];

        const header = sheet._rows[0].values;
        this.excelData = sheet._rows.slice(1).map((row) => {
          if (row.values.length === 0 || row.values.some((cell) => cell.value === null)) return null;
          
          return row.values.reduce((obj, cell, index) => {
            obj[header[index]] = cell;
            return obj;
          }, {});
        }).filter(row => row !== null);

        this.$emit("input", this.excelData);
      };

      reader.readAsArrayBuffer(file);
    },
  },
};
</script>
<style scoped>
input[type="file"] {
  display: none;
}
</style>