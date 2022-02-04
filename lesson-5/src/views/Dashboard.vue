<template>
  <div>
    <header>
      <h1>My Personal Costs</h1>
    </header>
    <AddPayment
    @add-payment="addNewPayment"
    :categoryList="categoryList"/>
    <div>
      <router-link :to="{name: 'addToCosts',
      params: {category: 'Food'}, query: {value: 200}}">Food 200</router-link> |
      <router-link :to="{name: 'addToCosts',
      params: {category: 'Transport'}, query: {value: 50}}">Transport 50
      </router-link> |
      <router-link :to="{name: 'addToCosts',
      params: {category: 'Entertainment'}, query: {value: 2000}}">Entertainment 2000</router-link>
    </div>
    <PaymentDisplay :items="paymentsList"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PaymentDisplay from '@/components/PaymentDisplay.vue';
import AddPayment from '@/components/AddPaymentForm.vue';

export default {
  name: 'DashboardPage',
  data: () => ({
    categoryUrl: '',
    valueUrl: 0,
  }),
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
  async mounted() {
    await this.fetchData();
    await this.fetchCategoryListData();
    if (this.$route.name === 'addToCosts') {
      console.log(1);
    }
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
