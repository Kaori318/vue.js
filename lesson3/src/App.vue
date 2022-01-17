<template>
  <div id="app">
    <AddPayment @add-payment="addNewPayment"/>
    <PaymentDisplay :items="paymentsList"/>
  </div>
</template>

<script>
import PaymentDisplay from './components/PaymentDisplay.vue';
import AddPayment from './components/AddPaymentForm.vue';

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPayment,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
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
    },
    addNewPayment(payment) {
      console.log('addNewPayment', payment);
      this.paymentsList.push(payment);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
