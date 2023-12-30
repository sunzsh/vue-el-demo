export default {
  install(Vue) {

    const delegates = {
      'el-select': (component, element) => {
        return [component.$refs.reference.$el]
      },
      'el-pagination': (component, element) => {
        const sizesComponent = component.$children.find((child) => child.$options._componentTag === 'sizes');
        const eles_ElSelectInSizes = delegates['el-select'](sizesComponent.$children[0], element);
        return eles_ElSelectInSizes;
      }
    }

    const getRefEles = (component, element) => {
      const tagName = component.$options._componentTag;
      const delegate = delegates[tagName];
      console.log(`TagName for fix-zoom : ${ tagName }`);
      return delegate ? delegate(component, element) : [element]; // 默认返回当前元素
    }

    Vue.directive('fixZoom', {
      inserted: function(element, binding, vnode) {
        const refEles = getRefEles(vnode.componentInstance, element);
        if (!refEles) {
          return;
        }
        refEles.forEach((refEle) => {
          refEle.getBoundingClientRectBak = refEle.getBoundingClientRect;
          refEle.getBoundingClientRect = function () {
            const rect = refEle.getBoundingClientRectBak()

            var zoom = window.getComputedStyle(document.body).zoom
            var scrollTop = document.documentElement.scrollTop;
            var scrollLeft = document.documentElement.scrollLeft;
            var offsetScrollTop = scrollTop - (scrollTop / zoom);
            var offsetScrollLeft = scrollLeft - (scrollLeft / zoom);
            
            return new DOMRect(rect.x - offsetScrollLeft, rect.y - offsetScrollTop, rect.width, rect.height);
          }
        })
      }
    })
  }
};
