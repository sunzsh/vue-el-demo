<script>
    import { Table } from 'element-ui';
    import { parseHeight } from 'element-ui/packages/table/src/util.js';
    export default {
        extends: Table,
        computed: {
            fixedBodyHeight() {
                if (this.height) {
                    return {
                        height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
                    };
                } else if (this.maxHeight) {
                    let maxHeight = parseHeight(this.maxHeight);
                    if (typeof maxHeight === 'number') {
                        maxHeight = this.layout.scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;
                        if (this.showHeader) {
                            maxHeight -= this.layout.headerHeight;
                        }
                        maxHeight -= this.layout.footerHeight;
                        return {
                            'max-height': maxHeight + 'px'
                        };
                    } else if (maxHeight.match(/\d+(vh|%)/g)) {
                        let resHeight = this.layout.scrollX ? `100% - ${this.layout.gutterWidth}px` : "100%";
                        if (this.showHeader) {
                            resHeight = `${resHeight} - ${this.layout.headerHeight}px` ;
                        }
                        resHeight = `${resHeight} - ${this.layout.footerHeight}px`;

                        return {
                            'max-height': `calc(${resHeight})`
                        };
                    }
                }
                return {};
            },
        }
    }
</script>
<style scoped>
  .el-table {
    display: flex;
    flex-direction: column;
  }
  .el-table >>> .el-table__header-wrapper {
    flex-shrink: 0;
  }

  .el-table >>> .el-table__body-wrapper {
    flex-grow: 1;
  }
</style>