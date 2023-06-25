<template>
  <div>
    <div>
      <div v-if="ownPost">
        <button @click="$router.push('/post/EditPost')">EditPost</button>
      </div>
    </div>
    <div>
      <h2>Title</h2>
      {{ post.title }}
    </div>
    <div>
      <h2>Body</h2>
      {{ post.body }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: [],
      ownPost: false
    }
  },
  async mounted(){
    const id = this.$route.params.id
    const response = await this.$axios.$get('http://localhost:8000/api/v1/posts/' + id)
    this.post = response

    if (this.post.user_id === this.$auth.user.data.id) {
      this.ownPost = true;
    }
  }
}
</script>