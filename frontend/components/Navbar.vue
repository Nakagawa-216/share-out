<template>
  <div>
    <button @click="$router.push('App')">TOP</button>
    <button @click="$router.push('Login')">Login</button>
    <button @click="$router.push('Signup')">SignUp</button>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
