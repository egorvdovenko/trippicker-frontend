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
        marker-id="123123"
        marker-type="placemark"
      />
    </yandex-map>
  </div>
</template>

<script>

export default {
  name: 'MapPage',
  data () {
    return {
      places: []
    }
  },
  async fetch () {
    await this.getPlaces()
  },
  computed: {
    coords () {
      const place =
        this.places[Math.floor(Math.random() * this.places.length)]

      return place
        ? [place.latitude, place.longitude]
        : []
    }
  },
  mounted () {
    this.$eventBus.$on('reload', this.$fetch)
  },
  methods: {
    async getPlaces () {
      const { data: places } =
        await this.$api.placesController.getPlaces()

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
