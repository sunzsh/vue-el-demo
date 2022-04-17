<template>
  <div>
    <transition v-bind:name="transitionName" appear>
      <slot></slot>
    </transition>
  </div>
</template>

<script>

const TRANSITION_NAME = 'test'

export default {
  data() {
    return {
      transitionName: TRANSITION_NAME
    };
  },
  
  mounted() {
      const node = this.$mount().$el
      document.body.appendChild(node)
      this.transitionName = '_DISABLED'
  },
  beforeDestroy() {
    this.transitionName = TRANSITION_NAME
  },
  destroyed() {
    // 1. 过渡动画
    const node = this.$mount().$el
    node.children[0].classList.add(`${this.transitionName}-leave-active`)
    node.children[0].classList.add(`${this.transitionName}-leave-to`)

    // 2. 延迟移除元素
    const transitionDuration = window.getComputedStyle(node.children[0], null).transitionDuration
    let duration = 0;
    if (/^.*ms$/g.test(transitionDuration)) {
      duration = parseFloat(transitionDuration);
    } else if (/^.*s$/g.test(transitionDuration)) {
      duration = parseFloat(transitionDuration) * 1000;
    }
    setTimeout(() => {
      node.remove();
    }, duration);
   
    
    
  }
}
</script>
