<template>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="name">名前</label>
          <input type="text" id="name" v-model="name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input type="email" id="email" v-model="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="password">パスワード</label>
          <input type="password" id="password" v-model="password" class="form-control" />
        </div>
        <div class="form-group">
          <label for="password_confirmation">確認用パスワード</label>
          <input type="password" id="password_confirmation" v-model="password_confirmation" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">新規作成</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    },
    methods: {
      onSubmit() {
        // deviseを用いたユーザー新規作成の処理を記述
      }
    }
  }
  </script>