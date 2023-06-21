<template>
  <div>
    <h1>EditUser</h1>
    <b-form @submit.prevent="updata">
      <div>
        <label for="name">Name</label>
        <input type="name" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <b-button block type="submit" variant="primary">Updata</b-button>
  </b-form>
  </div>
</template>

<script>
export default{
  name: "EditUser",
  data: function() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    async updata() {
      try{
        await this.$axios.$put('/api/v1/users/', {
          name: this.name,
          email: this.email
        })
      }catch(e){
        console.log(e);
      }
    }
  }
}
</script>