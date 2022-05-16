<template>
  <div>
      
    <transition v-bind:name="transName" appear>
      <slot></slot>
    </transition>

  </div>
</template>

<script>

export default {
  data() {
    return {
      transName: 'test',
    }
  },
  mounted() {
    const node = this.$mount().$el
    document.body.appendChild(node)
  },
  
  destroyed() {
    const node = this.$mount().$el
    const animationNode = node.children[0];
    animationNode.classList.add(`${this.transName}-leave-to`)
    animationNode.classList.add(`${this.transName}-leave-active`)

    const computedStyle = window.getComputedStyle(animationNode).transitionDuration;
    const durationStr = computedStyle.transitionDuration;

    let duration;
    if (/ms$/g.test(durationStr)) {
      duration = parseFloat(durationStr)
    } else if (/s$/g.test(durationStr)) {
      duration = parseFloat(durationStr) * 1000
    }
    
    setTimeout(() => {
      node.remove();
    }, duration);
  }
}
</script>
