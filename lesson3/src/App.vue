<template>
  <div id="app">
    <AddPayment
    @add-payment="addNewPayment" :categoryList="categoryList"/>
    <PaymentDisplay :items="paymentsList"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PaymentDisplay from './components/PaymentDisplay.vue';
import AddPayment from './components/AddPaymentForm.vue';

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPayment,
  },
  methods: {
    ...mapActions([
      'fetchData',
      'fetchCategoryListData',
    ]),
    ...mapMutations([
      'ADD_PAYMENT_DATA',
      'UPDATE_PAYMENT_DATA',
    ]),
    addNewPayment(payment) {
      this.ADD_PAYMENT_DATA(payment);
    },
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList',
    ]),
  },
  created() {
    this.fetchData();
    this.fetchCategoryListData();
  },
};
</script>

<style lang="scss">
#app {
  box-sizing: border-box;
  width: 1000px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
