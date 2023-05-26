<template>
  <div>
    <div v-if="$auth.loggedIn">
      <p>Logged in as: {{ $auth.user.data.email }}</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>Not logged in</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserStatus",
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>
