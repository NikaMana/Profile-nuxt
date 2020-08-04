<template>
  <div class="empty-layout">
    <v-spacer />
    <div v-if="$auth.loggedIn">
      {{$auth.user.email}}
      <v-btn text>Logout</v-btn>
    </div>
    <div v-else>
      <v-btn text to="/login">Login</v-btn>
      <v-btn text to="/register">Register</v-btn>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .empty-layout {
    display: flex;
    justify-content: center;
    padding-top: 5rem;
  }
</style>
