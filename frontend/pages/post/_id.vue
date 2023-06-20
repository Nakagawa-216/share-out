<template>
  <div>
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
      post: []
    }
  },
  async mounted(){
    const id = this.$route.params.id
    const response = await this.$axios.$get('http://localhost:8000/api/v1/posts/' + id)
    this.post = response
  }
}
</script>