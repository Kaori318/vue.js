<template>
<div>
  <div class="display">
      <input type="number" placeholder="x" v-model.number="op1">
      <input type="number" placeholder="y" v-model.number="op2">
      = {{ result }}
    </div>
    <div class="keyboard">
      <button @click="sum">+</button>
      <button @click="sub">-</button>
      <button @click="mult">*</button>
      <button @click="div">/</button>
      <button @click="integerDivision">x/y</button> <!-- целочисленное деление -->
      <button @click="exp">x<sup>y</sup></button> <!-- возведение в степень -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    op1: '',
    op2: '',
    result: 0,
  }),
  methods: {
    sum() {
      this.result = this.op1 + this.op2;
    },
    sub() {
      this.result = this.op1 - this.op2;
    },
    div() {
      this.result = this.op1 / this.op2;
    },
    integerDivision() {
      this.result = Math.floor(this.op1 / this.op2);
    },
    mult() {
      this.result = this.op1 * this.op2;
    },
    exp() {
      this.result = this.op1 ** this.op2;
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  margin-left: 5px;
}

.keyboard {
  padding-top: 10px;
}

sup {
  font-size: 7px;
}

.keyboard button{
height: 30px;
width: 30px;
margin-left: 10px;
}
</style>
