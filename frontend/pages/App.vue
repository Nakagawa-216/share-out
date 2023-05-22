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
import HomePage from "./HomePage.vue";
import Login from "./Login.vue";
import Signup from "./Signup.vue";

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