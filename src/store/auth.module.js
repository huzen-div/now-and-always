import axios from 'axios'
import globalConst from "../utils/global-const"
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user, mobileNumber:"" }
  : { status: { loggedIn: false }, user: null, mobileNumber:"" };
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    logout({ commit }) {
      // localStorage.removeItem('user');
      localStorage.clear();
      commit('logout');
    },
    async loginSuccess({ commit }, user) {
      localStorage.setItem('user', JSON.stringify(user));
      axios.defaults.headers.common['Authorization'] = globalConst.authHeader();
      await commit('loginSuccess', user);
      // return Promise.resolve().then(function () {
      //   localStorage.setItem('user', JSON.stringify(user));
      // });
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    }
  }
};