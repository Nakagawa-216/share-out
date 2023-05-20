<template>
  <div id="app">
    <component :is="currentComponent" @navigate="switchComponent" />
  </div>
</template>

<script>
import  HomePage from "../components/HomePage.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

export default {
  name: "App",
  components: {
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