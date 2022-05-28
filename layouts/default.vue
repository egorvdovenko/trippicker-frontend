<template>
  <v-app>
    <v-app-bar
      app
      dense
      elevation="4"
    >
      <v-toolbar-title>Trippicker</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer
      app
      dense
      elevation="4"
    >
      <small>
        {{ new Date().getFullYear() }} Petrozavodsk State University
      </small>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss" scoped>
.root {
  // height: 100vh;
}

header {
  z-index: 1;
}
</style>
