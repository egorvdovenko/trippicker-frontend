<template>
  <div class="root">
    <AppLoader v-if="$fetchState.pending">
      <template #title>
        Picking the trip
      </template>
    </AppLoader>
    <yandex-map
      v-else
      :coords="coords"
      zoom="10"
    >
      <ymap-marker
        :coords="coords"
        marker-id="place"
        marker-type="placemark"
        @click="$eventBus.$emit(GLOBAL_EVENTS.PLACE_PREVIEW, { isVisible: true })"
      />
    </yandex-map>
    <TagsBottomSheet />
    <PlaceBottomSheet
      v-if="place"
      v-bind="place"
    />
  </div>
</template>

<script>
import { GLOBAL_EVENTS } from '@/core/constants.js'

export default {
  name: 'MapPage',
  data () {
    return {
      GLOBAL_EVENTS,
      places: []
    }
  },
  async fetch () {
    await this.getPlaces()
  },
  computed: {
    tags () {
      return this.$store.state.tags.items
    },
    place () {
      return this.places[Math.floor(Math.random() * this.places.length)]
    },
    coords () {
      return this.place
        ? [this.place.latitude, this.place.longitude]
        : []
    }
  },
  mounted () {
    this.$eventBus.$on(GLOBAL_EVENTS.RELOAD, this.getPlaces)
  },
  destroyed () {
    this.$eventBus.$off(GLOBAL_EVENTS.RELOAD)
    this.$store.commit('tags/clear')
  },
  methods: {
    async getPlaces () {
      const { data: places } =
        await this.$api.placesController.getPlaces(this.tags)

      this.places = places
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  height: 100%;
  background-color: #ffffff;

  &::v-deep .ymap-container {
    height: 100%;
  }
}
</style>
