<template>
  <div id="app">
      <nav class="nav">
        <!-- <router-link to="payment">Dashboard</router-link> -->
        <!-- <button @click="goToPage('notfound')">Go To NotFound</button> -->
        <!-- <router-link to="notfound">Not Found</router-link> -->
      </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    page: 'payment',
  }),
  methods: {
    // goToPage(pageName) {
    //   this.$router.push(pageName);
    // },
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

.nav {
  margin-bottom: 20px;
  a {
    margin-left: 20px;
    color: rgb(126, 123, 123);
    text-decoration: none;
    font-size: 18px;
    &:hover {
      color: #000;
    }
  }
}
</style>
