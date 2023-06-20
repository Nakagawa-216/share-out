<template>
  <div id="app">
    <h1>POSTS</h1>
    <ul v-for="post in posts" :key="post.id" v-on:click="showPost(post.id)">
      <li style="text-align: left;">{{ post.title }}</li>
      <li style="text-align: left;">{{ post.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      posts: []
    }
  },
  async mounted(){
    const response = await this.$axios.$get('http://localhost:8000/api/v1/posts')
    this.posts = response
  },
  methods: {
    showPost: function(postId) {
      const route = 'post/' + postId
      this.$router.push(route)
    }
  }
};
</script>