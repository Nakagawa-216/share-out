<template>
  <div>
    <div>
      <Navbar @navigate="navigate" />
    </div>
    <div>
      <h1>ShareOut</h1>
      <p>Share your workout,</p>
      <p>and make better</p>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default{
  name: "Toppage",
  components: {
    Navbar
  },
  methods: {
    navigate(page) {
      this.$emit('navigate', page);
    }
  }
};
</script>
