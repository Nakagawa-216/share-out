<template>
  <div id="app">
    <UserStatus />
    <Navbar @navigate="switchComponent" />
    <component :is="currentComponent" @navigate="switchComponent" />
  </div>
</template>

<script>
import UserStatus from "../components/UserStatus.vue";
import Navbar from "../components/Navbar.vue";
import HomePage from "../components/HomePage.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

export default {
  name: "App",
  components: {
    UserStatus,
    Navbar,
    HomePage,
    Login,
    Signup
  },
  data() {
    return {
      currentComponent: "HomePage"
    };
  },
  methods: {
    switchComponent(component) {
      this.currentComponent = component;
    }
  }
};
</script>