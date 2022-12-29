import ResizeObserver from 'resize-observer-polyfill';


const syncVar = (node, binding, vnode) => {
  if (binding.arg) {
    binding.value[binding.arg] = node.offsetWidth < node.scrollWidth
  } else {
    vnode.context[binding.expression] = node.offsetWidth < node.scrollWidth
  }
}

export default {
  install(Vue) {
    Vue.directive('trunced', {
      inserted: function(el, binding, vnode) {
        const node = binding.modifiers.parent ? el.parentNode : el
        syncVar(node, binding, vnode);

        const ro = new ResizeObserver((entries, observer) => {
          entries[0].target && syncVar(node, binding, vnode)
        });
        ro.observe(node);
      },
      componentUpdated: function(el, binding, vnode) {
        const node = binding.modifiers.parent ? el.parentNode : el
        syncVar(node, binding, vnode);
      }
    })
  }
};
