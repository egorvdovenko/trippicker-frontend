<template>
  <div class="root">
    <h1 class="app-title">
      Trippicker
    </h1>
    <div class="half-part" />
    <v-btn
      to="/map"
      elevation="2"
      tile
      x-large
    >
      Pick the trip
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'empty'
}
</script>

<style lang="scss" scoped>
.root {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("~/assets/images/landing-background.webp");
}

.half-part {
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 0%, 0 100%, 0% 100%);
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
}

.app-title {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 28px;
  font-size: 28px;
  font-weight: 100;
  padding: 8px;
  letter-spacing: 4px;
  z-index: 1;
}
</style>
