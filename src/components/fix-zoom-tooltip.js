export default {
  install(Vue) {
    Vue.directive('fixZoom', {
      inserted: function(element, binding, vnode) {
        element.getBoundingClientRectBak = element.getBoundingClientRect;
        element.getBoundingClientRect = function () {
          const rect = element.getBoundingClientRectBak()

          var zoom = window.getComputedStyle(document.body).zoom
          var scrollTop = document.documentElement.scrollTop;
          var scrollLeft = document.documentElement.scrollLeft;
          var offsetScrollTop = scrollTop - (scrollTop / zoom);
          var offsetScrollLeft = scrollLeft - (scrollLeft / zoom);
          
          return new DOMRect(rect.x - offsetScrollLeft, rect.y - offsetScrollTop, rect.width, rect.height);
        }
      }
    })
  }
};
