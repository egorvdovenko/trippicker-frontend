<template>
  <div class="root">
    <h2 class="title">
      <slot name="title" />
    </h2>
    <v-progress-circular
      :size="30"
      :width="3"
      color="#282828"
      indeterminate
    />
  </div>
</template>

<script>
export default {
  name: 'AppLoader'
}
</script>

<style lang="scss" scoped>
.root {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #282828;
}

.title {
  margin-bottom: 16px;
}
</style>
