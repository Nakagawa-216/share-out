<template>
  <div>
    <h1>ログイン</h1>
    <v-form ref="form" lazy-validation>
      <label for="email">メールアドレス</label>
      <input
        v-model="email"
      />
      <label for="password">パスワード</label>
      <input
        v-model="password"
      />
      <button @click="loginWithAuthModule">ログイン</button>
    </v-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      //loginメソッドの呼び出し
      async loginWithAuthModule() {
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then(
            (response) => {
              localStorage.setItem('access-token', response.headers['access-token'])
              localStorage.setItem('client', response.headers.client)
              localStorage.setItem('uid', response.headers.uid)
              localStorage.setItem('token-type', response.heades['token-type'])
            },
            (error) => {
              return error
            }
          )
      },
    },
  }
</script>