<template>
  <div ref="wrapper" :style="{width: width, height: height}" :id="id"></div>
</template>

<script>
export default {
  props: {
    baseUrl: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    documentId: {
      type: String,
      default: ''
    },
    requestToken: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'viewer' // "manager", "file-selector", 'room-selector", "editor", "viewer", "system"
    }
  },
  data() {
    return {
      id: '',
      docSpace: null
    }
  },
  computed: {
    ds_config() {
      return {
        "mode": this.mode,
        "width": this.width,
        "height": this.height,
        "frameId": this.id,
        "init": true,
        "id": this.documentId,
        "requestToken": this.requestToken
      }
    }
  },
  mounted() {
    // id=ds-frame-randomstr
    this.id = 'ds-frame_' + Math.random().toString(36).substring(2, 9)
    this.reload()
  },
  watch: {
    baseUrl: {
      handler(oldVal, newVal) {
        this.loadScript()
      }
    }
  },
  methods: {
    reload() {
      this.loadScript().then(() => {
        if (!this.ds_config.id) {
          return;
        }
        if (!this.docSpace) {
          this.docSpace = window.DocSpace.SDK.initFrame(this.ds_config)
        } else {
          this.docSpace.setConfig(this.ds_config)
        }
        
      })
    },
    loadScript() {
      if (window.DocSpaceLoadPromise) {
        if (window.currentOoBaseUrl === this.baseUrl) {
          return window.DocSpaceLoadPromise
        } else {
          window.DocSpace.SDK = null;
          window.DocSpace = null;
          document.querySelector(`script[src^="${window.currentOoBaseUrl}/static/scripts/sdk/1.0.0/api.js"]`).remove();
        }
      }
      window.currentOoBaseUrl = this.baseUrl
      window.DocSpaceLoadPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.setAttribute("src", `${this.baseUrl}/static/scripts/sdk/1.0.0/api.js`);
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      })

      return window.DocSpaceLoadPromise
    }
  }
}
</script>

<style>

</style>