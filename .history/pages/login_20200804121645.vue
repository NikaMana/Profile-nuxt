<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
      Need login first
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>
       <ValidationProvider v-slot="{ errors }" name="name" rules="required|max:10">
                    <v-text-field
                      v-model="name"
                      :counter="10"
                      :error-messages="errors"
                      label="Name"
                      required
                    />
                  </ValidationProvider>
                  <ValidationProvider v-slot="{ errors }" name="password" rules="required">
                    <v-text-field
                      v-model="password"
                      :error-messages="errors"
                      label="Password"
                      :type="show4 ? 'text' : 'password'"
                      required
                    />
                  </ValidationProvider>
                  <v-btn class="mr-4" @click="submit">
                    submit
                  </v-btn>
                  <v-btn @click="clear">
                    clear
                  </v-btn>

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
