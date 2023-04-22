<script>
import { Autocomplete } from 'element-ui'
export default {
  name: 'ElAutocomplete2',
  extends: Autocomplete,
  props: {
    popperWidth: {
      type: Number,
      default: null
    }
  },
  watch: {
    suggestionVisible(val) {
      const $input = this.getInput()
      if ($input) {
        const width = this.popperWidth || $input.offsetWidth
        this.broadcast('ElAutocompleteSuggestions', 'visible', [val, width])
      }
    }
  }
}
</script>
