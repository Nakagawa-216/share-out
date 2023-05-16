<template>
  <div>
    <button @click="$emit('navigate', 'Toppage')">トップ画面へ</button>
    <button @click="$emit('navigate', 'login')">ログイン画面へ</button>
    <button @click="$emit('navigate', 'signup')">新規ユーザー登録画面へ</button>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
