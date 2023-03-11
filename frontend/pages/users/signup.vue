<template>
  <div>
    <h1>新規登録</h1>
    <v-form ref="form" lazy-validation>
      <label for="email">メールアドレス</label>
      <input
        v-model="user.email"
      />
      <label for="password">パスワード</label>
      <input
        v-model="user.password"
      />
      <button @click="registerUser">新規登録</button>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'App',
    auth: false,
    data() {
      return {
        user: {
          email: '',
          password: '',
        },
      }
    },
    methods: {
      registerUser() {
        this.$axios.post('api/v1/auth', this.user).then((response) => {
          window.location.href = '/users/confirmation'
        })
      }
    },
  }
</script>