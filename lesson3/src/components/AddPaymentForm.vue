<template>
  <div class="add-new-costs">
    <button @click='show = !show' class="btn__new-costs">ADD NEW COSTS +</button>
    <div class="add-new-costs__form" v-if="show">
      <input type="text" placeholder="Payment date" v-model="date">
      <input type="text" placeholder="Payment description" v-model="category">
      <input type="text" placeholder="Payment value" v-model="value">
      <button @click="addPayment">ADD +</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPayment',
  data() {
    return {
      value: '',
      category: '',
      date: '',
      show: false,
    };
  },
  computed: {
    paymentDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    addPayment() {
      const { value, category, date } = this;
      const data = {
        value: +value,
        category,
        date: date || this.paymentDate,
      };

      this.$emit('add-payment', data);
    },
  },
};
</script>

<style scoped lang="scss">
.add-new-costs {
  text-align: left;
  margin-left: 100px;
  margin-bottom: 20px;
}
.btn__new-costs {
  padding: 10px 25px;
  background-color: rgb(55, 114, 97);
  color: #fff;
  border: 0;
  border-radius: 5px;
  margin-bottom: 10px;
      &:hover {
     background-color: rgb(63, 136, 114);
    }
    &:active {
      background-color: rgb(67, 146, 124);
      box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
    }
}

.add-new-costs__form {
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  max-width: 300px;
  box-shadow: 3px 3px 2px 1px rgba(0,0,0,0.06);
  padding: 15px;
  input {
    padding: 10px 20px;
    margin-bottom: 10px;
    width: 260px;
    border: 1px solid rgb(245, 241, 241);
    border-radius: 5px;
    box-shadow: 0 3px 2px 2px rgba(0,0,0,0.06);
    }
  button {
  padding: 10px 25px;
   background-color: rgb(55, 114, 97);
  color: #fff;
  border: 0;
  border-radius: 5px;
  width: 150px;
    &:hover {
     background-color: rgb(63, 136, 114);
    }
    &:active {
      background-color: rgb(67, 146, 124);
      box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
    }
  }
}
</style>
