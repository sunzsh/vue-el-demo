import { FormItem, Form } from 'element-ui'

delete FormItem.mounted
const FormItemPatched = {
  extends: FormItem,
  mounted() {
    if (this.prop) {
      this.dispatch('ElForm', 'el.form.addField', [this]);

      let initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue,
        configurable: true
      });

      this.addValidateEvents();
    }
  },
  methods: {
    reInitialValue() {
      let initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue,
        configurable: true
      });
    }
  },
}

const FormPatched = {
  extends: Form,
  methods: {
    reInitialResetValue() {
      for (const field of this.fields) {
        field.reInitialValue()
      }
    }
  }
}

export default {
  install(Vue) {
    Vue.component(FormItem.name, FormItemPatched);
    Vue.component(Form.name, FormPatched);
  }
};
