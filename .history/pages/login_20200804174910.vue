<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
      Need login first
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>
      <div class="form-group">
        <input type="text" placeholder="Username" name="uname" required>
        <input type="password" placeholder="Password" name="psw" required>
      </div>

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
html {
 background:url(../hotpng.com.png) center center no-repeat;
}
form {
  width: 500px;
  margin: 0 auto;
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>
