<template>
  <v-app>
    <v-app-bar app color="green">
      <v-spacer />

      <div v-if="$auth.loggedIn">
        {{$auth.user/email}}
        <v-btn text>Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {}
</script>

<style>

</style>
