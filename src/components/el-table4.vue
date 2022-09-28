<script>
    import { Table } from 'element-ui';
    import { debounce, throttle } from 'throttle-debounce';
    import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
    export default {
        extends: Table,
        methods: {
            syncPostion() {
        const { scrollLeft, scrollTop, offsetWidth, scrollWidth } = this.bodyWrapper;
        const { headerWrapper, footerWrapper, fixedBodyWrapper, rightFixedBodyWrapper } = this.$refs;
        if (headerWrapper) headerWrapper.scrollLeft = scrollLeft;
        if (footerWrapper) footerWrapper.scrollLeft = scrollLeft;
        if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = scrollTop;
        if (rightFixedBodyWrapper) rightFixedBodyWrapper.scrollTop = scrollTop;
        const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
        if (scrollLeft >= maxScrollLeftPosition) {
          this.scrollPosition = 'right';
        } else if (scrollLeft === 0) {
          this.scrollPosition = 'left';
        } else {
          this.scrollPosition = 'middle';
        }
      },

      throttleSyncPostion: throttle(16, function() {
        this.syncPostion();
      }),

      onScroll(evt) {
        let raf = window.requestAnimationFrame;
        if (!raf) {
          this.throttleSyncPostion();
        } else {
          raf(this.syncPostion);
        }
      },

      bindEvents() {
        this.bodyWrapper.addEventListener('scroll', this.onScroll, { passive: true });
        if (this.fit) {
          addResizeListener(this.$el, this.resizeListener);
        }
      },

      unbindEvents() {
        this.bodyWrapper.removeEventListener('scroll', this.onScroll, { passive: true });
        if (this.fit) {
          removeResizeListener(this.$el, this.resizeListener);
        }
      },
        }
    }
</script>