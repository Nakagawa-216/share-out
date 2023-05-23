<template>
  <div>
    <button @click="$emit('navigate', 'HomePage')">トップ画面へ</button>
    <button @click="$emit('navigate', 'Login')">ログイン画面へ</button>
    <button @click="$emit('navigate', 'Signup')">新規ユーザー登録画面へ</button>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
