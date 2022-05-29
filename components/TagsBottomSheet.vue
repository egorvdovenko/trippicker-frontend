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
          <v-select
            v-model="selectedTags"
            :items="tags"
            :disabled="$fetchState.pending"
            item-value="id"
            hide-details
            filled
            multiple
            label="Select tags"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-btn
            elevation="2"
            tile
            x-large
            block
            @click="() => {
              $eventBus.$emit(GLOBAL_EVENTS.RELOAD, { tags: selectedTags })
              close()
            }"
          >
            Pick the trip
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
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
  data () {
    return {
      GLOBAL_EVENTS,
      tags: [],
      selectedTags: [],
      isVisible: false
    }
  },
  async fetch () {
    await this.getTagsListItems()
  },
  mounted () {
    this.$eventBus.$on(GLOBAL_EVENTS.TAGS_SEARCH, ({ isVisible }) => {
      this.isVisible = isVisible
    })
  },
  methods: {
    close () {
      this.isVisible = false
    },
    async getTagsListItems () {
      const { data: tags } =
        await this.$api.tagsController.getTagsListItems()

      this.tags = tags
    }
  }
}
</script>
