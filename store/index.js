export const state = () => ({
  currentPage: 'Overview',
  sidebarOpen: false
})

export const mutations = {
  setCurrentPage(state, page) {
    state.currentPage = page
  },
  setSidebar(state, status) {
    state.sidebarOpen = status
  }
}

export const actions = {
  ToggleSidebar({ commit, state }) {
    commit('setSidebar', !state.sidebarOpen)
  }
}
