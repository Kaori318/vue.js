<template>
  <div>
    <div class="table">
      <div class="table__header">
        <p>#</p>
        <p>Date</p>
        <p>Category</p>
        <p>Value</p>
      </div>
      <div class="table__body" v-for="(item, index) in items" :key="index">
        <p>{{ index + 1 }}</p>
        <p>{{ item.date }}</p>
        <p>{{ item.category }}</p>
        <p>{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      // required: true,
      default: () => [],
    },
    show: {
      type: Boolean,
      default: true,
      // required: true,
    },
  },
};
</script>

<style scoped>
.table {
  max-width: 800px;
  margin: 0 auto;
}

.table__header {
  font-weight: bold;
}

.table__header ,
.table__body {
  display: grid;
  grid-template-columns: 50px 300px 300px 50px;
  text-align: left;
  border-bottom: 2px solid rgb(221, 215, 215);
  padding-left: 20px;
}
</style>
