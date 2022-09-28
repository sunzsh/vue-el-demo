import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  getters: {
    getDataList: state => () => {
      let arr = [];
      const res = arr.concat(state.dataList);
      return res;
    }

  },
  mutations: {
    addDataList: (state, data) => {
      state.dataList.push(data);
    },
    clearDataList: (state) => {
      // state.dataList.length = 0;
      state.dataList.length = 0;
      console.log(state.dataList.length);
    }
  },
  actions: {

  }
})
