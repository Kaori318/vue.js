<template>
    <div>
      <div class="home">
        <router-link class="home__link" to="">Home</router-link>
        <router-link class="home__link" to="payment">Payment</router-link>
      </div>
      <div>
        <img src="@/assets/hello.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
  .home {
    margin-bottom: 20px;
  }

  .home__link {
    margin-left: 30px;
    text-decoration: none;
    color:rgb(107, 96, 136);
    font-size: 30px;
  }

  .home__link:hover {
    color: rgb(74, 67, 94);
  }
</style>
