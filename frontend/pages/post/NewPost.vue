<template>
  <div>
    <h1>NewPost</h1>
    <b-form @submit.prevent="createNewPost">
      <div>
        <label for="title">タイトル</label>
        <input type="title" id="title" v-model="title" />
      </div>
      <div>
        <label for="body">本文</label>
        <input type="body" id="body" v-model="body" />
      </div>
      <b-button type="submit" block>新規投稿</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "NewPost",
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    async createNewPost() {
      try {
        await this.$axios.$post('/api/v1/posts', {
          title: this.title,
          body: this.body
        })
      } catch (e){
        console.log(e.message);
        console.log(e.stack);
      }
    }
  }
}
</script>