<template>
  <div>
    <div class="table">
      <div class="table__header">
        <p>#</p>
        <p>Date</p>
        <p>Category</p>
        <p>Value</p>
      </div>
      <div class="table__body" v-for="(item, index) in paginaitedItems" :key="index">
        <p>{{ index + 1 + (perPage * (pageNumber - 1)) }}</p>
        <p>{{ item.date }}</p>
        <p>{{ item.category }}</p>
        <p>{{ item.value }}</p>
      </div>
    </div>
    <Pagination
      :pageNumber="pageNumber"
      :perPage="perPage"
      :itemsCount="items"
      @activePage="pageChange"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'PaymentDisplay',
  components: {
    Pagination,
  },
  data() {
    return {
      pageNumber: 1,
      // this.$route.params.page ||
      perPage: 5,
    };
  },
  props: {
    items: {
      type: Array,
      // required: true,
      default: () => [],
    },
  },
  computed: {
    paginaitedItems() {
      const from = (this.pageNumber - 1) * this.perPage;
      const to = from + this.perPage;
      return this.items.slice(from, to);
    },
  },
  methods: {
    pageChange(page) {
      this.pageNumber = page;
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
