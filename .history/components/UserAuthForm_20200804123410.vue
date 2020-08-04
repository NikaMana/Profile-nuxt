<template>
  <v-form v-model="valid">
    <v-text-field v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
      v-if="hasName" />
    <v-text-field v-model="userInfo.email"
    label="Email"
    :rules="[required('email'), emailFormat()]"/>

  </v-form>
</template>

<script>
export default {

}
</script>

<style>

</style>
