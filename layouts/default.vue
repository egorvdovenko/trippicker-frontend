<template>
  <v-app>
    <v-app-bar
      app
      dense
      elevation="4"
    >
      <v-toolbar-title>
        <v-icon>mdi-airplane-marker</v-icon>
        Trippicker
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="$eventBus.$emit('reload')"
      >
        <v-icon>mdi-reload</v-icon>
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
header {
  z-index: 1;
}
</style>
