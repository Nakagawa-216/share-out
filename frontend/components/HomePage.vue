<template>
  <div>
    <div>
      <h1>ShareOut</h1>
    </div>
    <div>
      <p>投稿一覧</p>
    </div>
  </div>
</template>

<script>
  import Navbar from "./Navbar.vue";

  export default {
    name: "HomePage",
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