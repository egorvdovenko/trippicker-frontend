export const state = () => ({
  items: []
})

export const mutations = {
  add (state, items) {
    state.items = items
  },
  clear (state) {
    state.items = []
  }
}
