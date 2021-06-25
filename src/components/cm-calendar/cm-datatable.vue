<script>

import DateTable from 'element-ui/packages/calendar/src/dataTable.vue';
import { range as rangeArr } from 'element-ui/src/utils/date-util';

export default {
  extends: DateTable,
  methods: {
    toNestedArr(days) {
      let nextDays = days.filter(d => d.type=='next').length;
      if (nextDays >= 7) {
        days = days.slice(0, days.length - 7);
      }

      return rangeArr(days.length / 7).map((_, index) => {
        const start = index * 7;
        return days.slice(start, start + 7);
      });
    },
    cellRenderProxy({ text, type }) {
      if (type != 'current') {
          return <span></span>
      }
      let render = this.elCalendar.$scopedSlots.dateCell;
      if (!render) return <span>{ text }</span>;

      const day = this.getFormateDate(text, type);
      const date = new Date(day);
      const data = {
        isSelected: this.selectedDay === day,
        type: `${type}-month`,
        day
      };
      return render({ date, data });
    },

    pickDay({ text, type }) {
      const date = this.getFormateDate(text, type);
      if (type && type==='current') {
        this.$emit('pick', date);
      }
    },

  }
};
</script>
<style scoped>
.next .el-calendar-day:hover, .prev .el-calendar-day:hover {
    background-color:transparent;
    cursor: auto;
}
</style>
