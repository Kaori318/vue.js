<template>
  <div>
    <div class="display">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }}
      <div class="error" v-if="error">
        {{ error }}
      </div>
    </div>
    <div class="operators">
      <button
        v-for="operator of operators"
        @click="calculate(operator)"
        :key="operator">
        {{ operator }}</button>
    </div>
    <div class="keyboard_checkbox">
      <input type="checkbox" @click="show = !show" id="check" checked>
      <label for="check">Отобразить экранную клавиатуру</label>
      <template v-if="show">
        <div class="keyboard">
          <button class="keyboard_number"
          v-for="item in collection"
          :key="item" @click="addNumber(item, picked)">
          {{ item }}
          </button>
          <button @click="removeNumber(picked)" class="keyboard_number">&#8592;</button>
        </div>
      </template>
    </div>
    <div class="radio">
      <input type="radio" id="one" value="op1" v-model="picked">
      <label for="one">Операнд 1</label>
      <input type="radio" id="two" value="op2" v-model="picked">
      <label for="two">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    picked: '',
    show: true,
    op1: '',
    op2: '',
    result: 0,
    error: '',
    operators: ['+', '-', '/', '*', '**'],
    collection: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  }),
  methods: {
    sum() {
      const { op1, op2 } = this;
      this.result = Number(op1) + Number(op2);
    },
    sub() {
      const { op1, op2 } = this;
      this.result = op1 - op2;
    },
    division() {
      const { op1, op2 } = this;
      if (op2 === '0' || op2 === 0) {
        this.error = 'На ноль делить нельзя.';
      } else {
        this.result = Math.round(op1 / op2);
      }
    },
    multiplication() {
      this.result = this.op1 * this.op2;
    },
    exponentiation() {
      const { op1, op2 } = this;
      this.result = Math.round(op1 ** op2);
    },
    calculate(operation) {
      this.error = '';
      // eslint-disable-next-line default-case
      switch (operation) {
        case '+': this.sum(); break;
        case '-': this.sub(); break;
        case '*': this.multiplication(); break;
        case '/': this.division(); break;
        case '**': this.exponentiation(); break;
      }
    },

    addNumber(item, picked) {
      console.log(picked);
      if (picked === 'op1') {
        this.op1 = `${this.op1}${item}`;
        // this.op1 = Number(this.op1);
      } else if (picked === 'op2') {
        this.op2 = `${this.op2}${item}`;
        // this.op2 = Number(this.op2);
      }
    },
    removeNumber(picked) {
      if (picked === 'op1') {
        console.log(typeof this.op1);
        this.op1 = this.op1.slice(0, -1);
      } else {
        this.op2 = this.op2.slice(0, -1);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.keyboard_number {
  margin: 1px;
}

.error {
  color: red;
}

.operators {
margin-top: 20px;
button {
  margin-left: 2px;
}
}

.keyboard_checkbox {
  margin-top: 50px;
  .keyboard {
    margin-top: 10px;
  }
}

.radio {
  margin-top: 10px;
}
</style>
