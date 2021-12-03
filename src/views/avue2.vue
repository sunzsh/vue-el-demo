
<script>
import TestCrud from '@/views/avue.vue'

export default {
    extends: TestCrud,
    watch: {
        'form.name': function (val) {
            console.log(val);
            this.form.sex = val;
        }
    }
}
</script>