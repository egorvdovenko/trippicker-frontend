<template>
  <v-app>
    <v-app-bar
      app
      dense
      elevation="4"
    >
      <v-toolbar-title>
        <v-icon>mdi-airplane-marker</v-icon> Trippicker
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="$eventBus.$emit(GLOBAL_EVENTS.RELOAD)"
      >
        <v-icon>mdi-reload</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="$eventBus.$emit(GLOBAL_EVENTS.TAGS_SEARCH, { isVisible: true })"
      >
        <v-icon>mdi-tag-search</v-icon>
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
import { GLOBAL_EVENTS } from '@/core/constants.js'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      GLOBAL_EVENTS
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  z-index: 1;
}
</style>

<style lang="scss">
html {
  overflow-y: hidden;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #FFFFFF #272727;
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #272727;
}

*::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  border-radius: 20px;
  border: 3px solid #272727;
}
</style>
