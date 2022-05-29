<template>
  <v-bottom-sheet
    v-model="isVisible"
    persistent
  >
    <v-sheet>
      <v-row
        class="pa-3 ma-0"
        dense
      >
        <v-col cols="12">
          {{ name }}
        </v-col>
        <v-col cols="12">
          {{ description }}
        </v-col>
        <v-col
          v-for="n in 9"
          :key="n"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col cols="12">
          <v-btn
            elevation="2"
            tile
            x-large
            block
            @click="close"
          >
            Close
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import { GLOBAL_EVENTS } from '@/core/constants.js'

export default {
  name: 'TagsBottomSheet',
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      GLOBAL_EVENTS,
      isVisible: false
    }
  },
  mounted () {
    this.$eventBus.$on(GLOBAL_EVENTS.PLACE_PREVIEW, ({ isVisible }) => {
      this.isVisible = isVisible
    })
  },
  destroyed () {
    this.$eventBus.$off(GLOBAL_EVENTS.PLACE_PREVIEW)
  },
  methods: {
    close () {
      this.isVisible = false
    }
  }
}
</script>
