<template>
  <div>
    <h1>ログイン</h1>
    <form @submit.prevent="$emit('navigate','top')">
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button @click="loginWithAuthModule">ログイン</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        email: 'tester@example.com',
        password: 'password',
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
      }
    }
  }
</script>