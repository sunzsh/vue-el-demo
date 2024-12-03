function findParentElTableBody(component) {
  if (!component) {
    return null;
  }
  let parent = component;
  while (parent) {
    const tagName = parent.$options._componentTag;
    
    if (tagName === 'table-body') {
      return parent;
    }

    if (tagName === 'el-table') {
      return null;
    }
    parent = parent.$parent;
  }
  return null;
}

export default {
  install(Vue) {
    Vue.directive('fixed-column-ref', {
        inserted(element, binding, vnode) {
          const refName = vnode.data.ref;
          if (!refName) {
            return;
          }
          const parentTableBody = findParentElTableBody(vnode.componentInstance)
          if (!parentTableBody) {
            return;
          }
          const tableBodyWrapperEl = parentTableBody.$el.parentElement;
          if (!tableBodyWrapperEl) {
            return;
          }

          let inFixedColumn = tableBodyWrapperEl.classList.contains('el-table__fixed-body-wrapper');
          if (inFixedColumn) {
            if(!vnode.context._fixedColumnRef) {
              vnode.context._fixedColumnRef = {}
            }
            vnode.context._fixedColumnRef[refName] = vnode.componentInstance;
          } else {
            if (vnode.context._fixedColumnRef && vnode.context._fixedColumnRef[refName]) {
              vnode.context.$refs[refName] = vnode.context._fixedColumnRef[refName];
              delete vnode.context._fixedColumnRef[refName]
            }
          }
        }
      }
    )
  }
};
