import homeService from "../services/homeService";

// home模块 store
const store = {
  namespaced: true,
  state: {
    lineChartOptions: {},
  },
  mutations: {
    lineChart(state, data) {
      state.lineChartOptions = data;
    },
  },
  actions: {
    async lineChart({ commit }, payload) {
      const res = await homeService.getHomeData(payload);
      commit("lineChart", res);
    },
  },
};

export default store;
