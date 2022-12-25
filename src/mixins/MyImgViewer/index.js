
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import './index.css'

export default {
  name: 'MyImgViewer',
  provide() {
    return {
      openImgViewer: this.openImgViewer
    }
  },
  data() {
    return {
      _myImgViewer: null,
      // 显示图片查看器
      showImgViewer: false,
      // 查看大图列表
      imgPreviewList: []
    }
  },
  watch: {
    showImgViewer(val) {
      if (val) {
        this._myImgViewer = new (Vue.extend(ElImageViewer));
        this._myImgViewer.zIndex = 29999;
        this._myImgViewer.onClose = this.closeImgViewer;
        this._myImgViewer.urlList = this.imgPreviewList
        this._myImgViewer.$mount()
      } else {
        this._myImgViewer.$destroy();
      }
    }
  },
  created() {
  },
  methods: {
    // 关闭图片查看器
    closeImgViewer() {
      this.showImgViewer = false
      window.document.body.classList.remove('my-img-viewer-body')
    },
    // 打开图片查看器
    openImgViewer(urlArr) {
      // 获取要查看的图片临时地址
      this.imgPreviewList = urlArr
      // 显示图片查看器
      this.showImgViewer = true
      window.document.body.classList.add('my-img-viewer-body')
    }
  }
}
