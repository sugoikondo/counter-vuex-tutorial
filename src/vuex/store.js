import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  counterValue: 0,
};

const actions = {
  increment({
    commit
  }) {
    commit('increment');
  },
};

const getters = {
  countNum: state => state.counterValue

};

const mutations = {
  increment(state) {
    state.counterValue++;
  },
  decrement(state) {
    state.counterValue--;
  },
  clear(state) {
    state.counterValue = 0;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
