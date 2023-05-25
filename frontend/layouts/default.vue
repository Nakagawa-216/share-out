<template>
  <div id="app">
    <h1> Share-Out</h1>
    <UserStatus />
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import UserStatus from '../components/UserStatus.vue';

  export default {
    components: {
      UserStatus,
      Navbar
    } 
  }
</script>
