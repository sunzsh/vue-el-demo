<template>
    <div>
      <h1 class="dis" @click="edit">{{ myVal }}</h1>
    </div>
</template>

<script>
import Vue from 'vue'

import msgboxSlider from '@/components/msgboxSlider.js';
export default {
    data() {
        return {
            myVal: 20,
        }
    },
    methods: {
        edit() {
          msgboxSlider(this, {
            slider: { value: this.myVal },
            onInput: (val) => {
              this.myVal = val;
            }
            // beforeClose: (value, done) => {
            //   this.$loading();
            //   setTimeout(() => {
            //     this.$loading().close();
            //     done();
            //   }, 1000);
            // }
          }).then(value => {
            this.myVal = value;
          }).catch(() => {})

          // const h = this.$createElement;
          // const content = h('el-slider',
          //   { 
          //     props: { value: this.myVal },
          //     on: {
          //       input: (value) => {
          //         const bakSilent = Vue.config.silent
          //         Vue.config.silent = true;
          //         content.componentInstance.value = value;
          //         this.myVal = value;
          //         Vue.config.silent = bakSilent;
          //       }
          //     }
          //   }
          // );

          // this.$msgbox({
          //     title: '选择数值',
          //     message: content,
          //     beforeClose: (action, instance, done) => {
          //       done();
          //     },
          // }).then(() => { }).catch(() => { });
        }
    }
}
</script>

<style>
.dis {
    font-size: 36px;
    cursor: pointer;
    text-align: center;
}

</style>