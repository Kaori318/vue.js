<template>
  <div class="pagination">
    <button
      class="btn__pagination"
     @click="pagePrevious()">
      &#10094;
    </button>
    <button
      v-for="page in pages"
      :key="page"
      :class="{'btn__pagination':true,'page__selected':page === pageNumber}"
      @click="pageClick(page)">{{ page }}</button>
    <button
      class="btn__pagination"
      @click="pageNext()">
      &#10095;
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    itemsCount: {
      type: Array,
      required: true,
    },
    pageNumber: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.itemsCount.length / this.perPage);
    },
  },
  methods: {
    pageClick(page) {
      this.$emit('activePage', page);
    },
    pagePrevious() {
      if (this.pageNumber !== 1) {
        this.$emit('activePage', this.pageNumber - 1);
      }
    },
    pageNext() {
      if (this.pageNumber < this.pages) {
        this.$emit('activePage', this.pageNumber + 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  margin: 20px auto;
  border: 1px solid rgb(221, 215, 215);
  padding: 5px;
  width: 800px;
}
.btn__pagination {
    margin: 0 1px;
    font-size: 14px;
    padding: 5px 10px;
    border: none;
    background-color: #fff;
}

.page__selected {
  color: blue;
}
</style>
