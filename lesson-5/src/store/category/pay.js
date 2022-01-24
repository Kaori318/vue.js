import Vue from 'vue';

export default {
  state: {
    paymentsList: [],
  },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList;
    },
    ADD_PAYMENT_DATA(state, payment) {
      state.paymentsList.push(payment);
    },
    UPDATE_PAYMENT_DATA(state, editedPayment) {
      Vue.set(state.paymentsList, 0, editedPayment);
    },
  },
  getters: {
    paymentsList: ({ paymentsList }) => paymentsList,
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const initialPaymentList = [
          {
            date: '28.03.2020',
            category: 'Food',
            value: 169,
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            value: 360,
          },
          {
            date: '24.03.2020',
            category: 'Food',
            value: 532,
          },
        ];
        commit('SET_PAYMENTS_LIST', initialPaymentList);
      });
    },
  },
};
