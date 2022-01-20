import Vue from 'vue';
import Vuex from 'vuex';
import cat from './category/cat';
import pay from './category/pay';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cat,
    pay,
  },
});
