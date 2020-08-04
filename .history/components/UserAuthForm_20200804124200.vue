<template>
  <v-form v-model="valid">
    <v-text-field v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
      v-if="hasName" />
    <v-text-field v-model="userInfo.email"
      label="Email"
      :rules="[required('email'), emailFormat()]"/>
    <v-text-field v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      :rules="[required('password'), minLength('password', 8)]"
      />
    <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{buttonText}}</v-btn>
  </v-form>
</template>

<script>
export default {

}
</script>

<style>

</style>
