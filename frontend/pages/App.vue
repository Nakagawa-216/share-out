<template>
  <div id="app">
    <component :is="currentComponent" @navigate="switchComponent" />
  </div>
</template>

<script>
import TopPage from "../components/Toppage.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

export default {
  name: "App",
  components: {
    TopPage,
    Login,
    Signup
  },
  data() {
    return {
      currentComponent: "TopPage"
    };
  },
  methods: {
    switchComponent(component) {
      this.currentComponent = component;
    }
  }
};
</script>
