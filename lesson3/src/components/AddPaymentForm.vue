<template>
  <div class="add-new-costs">
    <button @click='show = !show' class="btn__new-costs">ADD NEW COSTS +</button>
    <div class="add-new-costs__form" v-if="show">
      <div class="add-new-costs__form__input">
        <input type="text" placeholder="Payment date" v-model="date">
        <div class="add_categore">
          <input type="text"
            placeholder="Payment description"
            v-model="category">
          <div class="a" @click='hidden = !hidden'>
            <template v-if="hidden">&#9650;</template>
            <template v-else>&#9660;</template>
            <div v-if="hidden" class="b">
              <p v-for="category of categoryList"
              :value="category"
              :key="category"
              @click="categorySelection(category)"
              >{{ category }}
              </p>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Payment value"    v-model="value">
      </div>
      <div class="add-costs">
        <button @click="addPayment">ADD +</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPayment',
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      value: '',
      category: '',
      date: '',
      show: false,
      hidden: false,
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
    categorySelection(categoryItem) {
      console.log(categoryItem);
      this.category = categoryItem;
    },
    addPayment() {
      const { value, category, date } = this;
      const data = {
        value: +value,
        category,
        date: +date || this.paymentDate,
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  box-shadow: 3px 3px 2px 1px rgba(0,0,0,0.06);
  padding: 25px;
  &__input {
    width: 300px;
  input {
     box-sizing: border-box;
    padding: 10px 20px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid rgb(245, 241, 241);
    border-radius: 5px;
    box-shadow: 0 2px 1px 1px rgba(0,0,0,0.06);
    outline:none;
  }
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

.add_categore {
  display: flex;
  input {
    border-radius: 5px 0 0 5px;
    border-right: 0px;
  }
  .a {
    padding-top: 10px;
    box-sizing: border-box;
    position: relative;
    width: 45px;
    background-color: #fff;
    display: inline-block;
    height: 37px;
    text-align: center;
    border-radius: 0 5px 5px 0;
    border-top: 1px solid rgb(245, 241, 241);
    &::after {
    content: '';
    display: block;
    height: 36px;
    width: 35px;
    position: absolute;
    top: -1px;
    left: 2px;
    z-index: -1;
     border-radius: 0 5px 5px 0;
    box-shadow: 0 2px 1px 1px rgba(0,0,0,0.06);
    border: 1px solid rgb(245, 241, 241);
   }
   .b {
      width: 300px;
      position: absolute;
      left: -263px;
      top: 40px;
      text-align: left;
      border-radius: 5px;
      box-shadow: 0 2px 1px 1px rgba(0,0,0,0.06);
      border: 1px solid rgb(245, 241, 241);
      z-index: 3;
      background-color: #fff;
      p{
        padding: 0 10px;
        border-bottom: 1px solid rgb(245, 241, 241);
        margin: 7px 0;
        &:last-child {
        border-bottom: none;
        }
      }
    }
  }
}
.add-costs {
    display: flex;
    justify-content: end;
  }
</style>
