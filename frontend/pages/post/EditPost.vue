<template>
  <h1>Edit Post</h1>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  async mounted() {
    const url = 'http://localhost:8000/api/v1/posts' +  
    const postData = await this.$axios.$get('http://localhost:8000/api/v1/posts/' + id)
  }
}
</script>