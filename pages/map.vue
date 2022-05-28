<template>
  <div class="root">
    <div
      v-if="$fetchState.pending"
      class="loader"
    >
      <h2 class="mb-4">
        Picking the trip
      </h2>
      <v-progress-circular
        :size="45"
        :width="3"
        color="#272727"
        indeterminate
      />
    </div>
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
      coords: null
    }
  },
  async fetch () {
    const { data: places } = await this.$api.placesController.getPlaces()
    const place = places[Math.floor(Math.random() * places.length)]

    this.coords = [place.latitude, place.longitude]
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

.loader {
  height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #282828;
}
</style>
