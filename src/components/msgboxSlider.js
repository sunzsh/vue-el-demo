import Vue from 'vue'

function msgboxSlider(vue, options = { }) {
    let sliderPropsFin = Object.assign({ value: 0, min: 0, max: 100, step: 1, showInput: true }, options.slider);
    let currentValue = sliderPropsFin.value;
    const content = vue.$createElement('el-slider',
      {
        style: { width: '380px' },
        props: sliderPropsFin,
        on: {
            input: (value) => {
                currentValue = value
                const bakSilent = Vue.config.silent
                Vue.config.silent = true;
                content.componentInstance.value = value;
                Vue.config.silent = bakSilent;
                if (options.onInput && typeof options.onInput === 'function') {
                    options.onInput(value)
                }
            }
        },
      }
    );

    const msgBoxPropsFin = Object.assign({
        title: '选择数值',
        showClose: false,
        confirmButtonText: '确定',
    }, options.msgBox,
    { 
        message: content,
        beforeClose: (action, instance, done) => {
            if (action === 'confirm' && options.beforeClose && typeof options.beforeClose === 'function') {
                options.beforeClose(currentValue, done);
            } else {
                done();
            }
        },
    });
    
    return new Promise((resolve, reject) => {
        vue.$msgbox(msgBoxPropsFin).then(() => {
            resolve(currentValue);
        }).catch(() => {
            reject(sliderPropsFin.value);
        });
    });
    
    

}

export default msgboxSlider;