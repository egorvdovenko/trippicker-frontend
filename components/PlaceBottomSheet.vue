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
        <v-col
          cols="12"
          tag="h2"
        >
          {{ name }}
        </v-col>
        <v-col
          cols="12"
          class="pb-4"
        >
          {{ description }}
        </v-col>
        <v-col cols="12">
          <v-row
            class="images-container"
            dense
          >
            <v-col
              v-for="(image, index) in images"
              :key="image.id"
              class="d-flex child-flex"
              cols="4"
              @click="previewIndex = index"
            >
              <v-img
                :src="image.url"
                :lazy-src="image.url"
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
          </v-row>
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
    <CoolLightBox
      :items="images.map(image => image.url)"
      :index="previewIndex"
      @close="previewIndex = null"
    />
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
    },
    images: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      GLOBAL_EVENTS,
      isVisible: false,
      previewIndex: null
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

<style lang="scss" scoped>
.images-container {
  max-height: 50vh;
  overflow-y: auto;
}
</style>
