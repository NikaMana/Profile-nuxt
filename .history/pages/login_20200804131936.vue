<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
      Need login first
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>
      <div class="form-group">
        <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
      </div>

      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>

      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
</style>
