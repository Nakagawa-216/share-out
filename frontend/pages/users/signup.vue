<template>
  <div>
    <h1>新規登録</h1>
    <b-form @submit.prevent="signup">
      <label for="name">名前</label>
      <input
        v-model="name"
      />
      <label for="email">メールアドレス</label>
      <input
        v-model="email"
      />
      <label for="password">パスワード</label>
      <input
        v-model="password"
      />
      <b-button block type="submit" variant="primary">新規登録</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
          name: 'User',
          email: 'test@example.com',
          password: 'password',
          password_confirmation: 'password',
          error: null
      }
    },
    methods: {
      async signup() {
        try{
          await this.$axios.$post('http://localhost:5000/api/v1/auth',{
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation
          })
          await this.$auth.loginwith('local', {
            data: {
              password: this.password,
              email: this.email
            },
          })
        }catch(e){
          this.error = e.response.data.error.full_messages
        }
      }
    }
  }
</script>