<template>
  <div>
    <div>
      <Navbar @navigate="navigate" />
    </div>
    <h1>新規登録</h1>
    <b-form @submit.prevent="signup">
      <div>
        <label for="name">名前</label>
        <input type="name" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="password_confrimation">確認用パスワード</label>
        <input type="password_confirmation" id="password_confirmation" v-model="password_confirmation" required />
      </div>
      <b-button block type="submit" variant="primary">新規登録</b-button>
    </b-form>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue';
  export default {
    components: {
      Navbar
    },
    data: function() {
      return {
          name: 'Kou',
          email: 'tester@example.com',
          password: 'password',
          password_confirmation: 'password',
          error: null
      }
    },
    methods: {
      async signup() {
        try{
          await this.$axios.$post('http://localhost:8000/api/v1/auth',{
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
          if (e.response && e.response.data && e.response.data.error && e.response.data.error.full_messages) {
            this.error = e.response.data.error.full_messages
          } else {
            console.log(e);
          }
        }
      },
      navigate(page) {
        this.$emit('navigate', page);
      }
    }
  }
</script>