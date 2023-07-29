export const main = {
  namespaced: true,
  state: {
    isldsLoading:false
  },
  actions: {
    changeLoading({ commit }, loading) {
      commit('changeLoading', loading);
    },
  },
  mutations: {
    changeLoading(state, loading) {
      state.isldsLoading = loading;
    }
  }
};