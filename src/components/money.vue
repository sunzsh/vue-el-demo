<template>
  <span class="xs-money" :style="dynamicStyleRoot" @dblclick="toggleSeparatorDisplay">
    <span v-if="showSymbol && valueNotNull" class="xs-money-symbol" :class="{'xs-money-symbol-noselect': !symbolCanSelect}">￥</span><span :style="{ '--smb-select': symbolCanSelect ? 'inherit' : 'all' }" :class="{ 'xs-empty-string': !valueNotNull }" class="xs-money-value" v-html="formated || emptyString"></span>
  </span>
</template>
<script>

// https://currency.js.org/
// npm install --save currency.js
import currency from 'currency.js'

export default {
  props: {
    value: {
      default: null
    },
    color: {
      type: String,
      default: 'inherit'
    },
    moneySymbol: {
      type: String,
      default: '￥'
    },
    precision: {
      type: Number,
      default: 2
    },
    emptyString: {
      type: String,
      default: ''
    },
    showSymbol: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    symbolCanSelect: {
      type: Boolean,
      default: false
    },
    disableToggleSeparator: {
      type: Boolean,
      default: false
    },
    emptyStringColor: {
      type: String,
      default: 'inherit'
    }
  },
  data() {
    return {
      separatorDisplay: 'initial'
    }
  },
  computed: {
    formated() {
      if (!this.value) {
        return null
      }
      return currency(this.value, {
        symbol: '',
        separator: `<span class="xs-money-separator">${this.separator}</span>`,
        precision: this.precision
      }).format()
    },
    valueNotNull() {
      return this.value !== null && this.value !== undefined && this.value !== ''
    },
    dynamicStyleRoot() {
      return {
        '--separator-display': this.separatorDisplay,
        '--color':  this.valueNotNull ? this.color : this.emptyStringColor,
        '--smb-select': this.symbolCanSelect ? 'all' : 'initial'
      }
    },
    dynamicStyle() {
    }
  },
  methods: {
    toggleSeparatorDisplay() {
      if (this.disableToggleSeparator) {
        return;
      }
      this.separatorDisplay = this.separatorDisplay === 'none' ? 'initial' : 'none';
    }
  }
}
</script>
<style scoped>
.xs-money-symbol {
  font-size: 0.7em;
}
.xs-money-symbol-noselect {
  user-select: none;
}
.xs-money {
  user-select: var(--smb-select);
  cursor: default;
  color: var(--color);
}
::v-deep .xs-money-separator {
  display: var(--separator-display);
}
::v-deep .xs-money-value {
  user-select: var(--smb-select);
}
</style>