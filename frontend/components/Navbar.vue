<template>
  <div>
    <div v-if="$auth.loggedIn">
      <button @click="$router.push('/App')">TOP</button>
      <button @click="$router.push('user/MyPage')">MyPage</button>
    </div>
    <div v-else>
      <button @click="$router.push('App')">TOP</button>
      <button @click="$router.push('Login')">Login</button>
      <button @click="$router.push('Signup')">SignUp</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
