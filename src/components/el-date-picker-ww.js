import { DatePicker } from 'element-ui'

export default {
  extends: DatePicker,
  name: 'ElDatePicker',
  computed: {
    parsedValue() {
      const yearStartIndex = this.valueFormat ? this.valueFormat.indexOf('yyyy') : -1;
      const weekStartIndex = this.valueFormat ? this.valueFormat.indexOf('WW') : -1;
      const weekStartIndex2 = this.valueFormat ? this.valueFormat.indexOf('W') : -1;
      if (this.value && this.type === 'week' && yearStartIndex > -1 && (weekStartIndex > -1 || weekStartIndex2 > -1)) {
        const year = parseInt(this.value.substring(yearStartIndex, yearStartIndex + 4))
        const week = parseInt(this.value.substring((weekStartIndex > -1 ? weekStartIndex : weekStartIndex2)).replace(/(\d{1,2}).*/g, '$1'))
        const firstWeekDayOfYear = new Date(year, 0, 1).getDay()
        let firstThursday = null
        if (firstWeekDayOfYear <= 4) {
          firstThursday = new Date(year, 0, 1 + (4 - firstWeekDayOfYear))
        } else {
          firstThursday = new Date(year, 0, 1 + (11 - firstWeekDayOfYear))
        }
        const weekOfThursday = new Date(firstThursday.getTime() + (1000 * 60 * 60 * 24 * 7 * (week - 1)))
        return weekOfThursday
      } else {
        return DatePicker.mixins[0].computed.parsedValue.call(this)
      }
    }
  }
}