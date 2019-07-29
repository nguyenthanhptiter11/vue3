<template>
  <v-app :dark="false">
    <v-fade-transition origin="center" mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-app>
</template>

<script>
  export default { }
</script>
