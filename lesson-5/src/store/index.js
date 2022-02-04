import Vue from 'vue';
import Vuex from 'vuex';
import PaymentCategory from './category/PaymentCategory';
import Payment from './category/Payment';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PaymentCategory,
    Payment,
  },
});
