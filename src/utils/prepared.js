export default function prepared(count = 1) {
  let _preparedCount
  let _preparedResolve
  let _prepared
  const reset = () => {
    _preparedCount = count
    _prepared = new Promise((resolve, reject) => {
      _preparedResolve = resolve
    })
  }
  reset()
  return {
    data() {
      return {
        prepared: false
      }
    },
    methods: {
      preparedThen(callback) {
        _prepared.then(callback)
      },
      prepareSubmit() {
        _preparedCount--
        if (_preparedCount === 0) {
          _preparedResolve()
          this.prepared = true
        }
      }
    },
    created() {
      reset()
    }
  }
}
