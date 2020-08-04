<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
      Need login first
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>

      <UserAuthForm buttonText="Login" :submitForm="loginUser" />
    </form>
  </section>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  components: {
    UserAuthForm
  },
  /*layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  }*/
}
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
</style>
