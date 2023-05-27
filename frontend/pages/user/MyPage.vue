<template>
  <div>
    <h1>マイページ</h1>
    <p>Email: {{ user.email }}</p>
    <p>Name: {{ user.name }}</p>
  </div>
</template>

<script>
  export default{
    name: 'MyPage',
    data(){
      return {
        user: {}
      };
    },
    async mounted() {
      const response = await this.$axios.get('/api/v1/users');
      this.user = response.data;
    }
  }
</script>
