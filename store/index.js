import Cookie from 'js-cookie'

import { STORAGE_TOKEN, isEmpty } from '../assets/js/util'

export const state = () => ({
  currentPage: 'Overview',
  sidebarOpen: false,
  user: null,
  token: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setToken(state, token) {
    state.token = token
  },
  setCurrentPage(state, page) {
    state.currentPage = page
  },
  setSidebar(state, status) {
    state.sidebarOpen = status
  }
}

export const getters = {
  isAuthenticated(state) {
    return !isEmpty(state.user) && !isEmpty(state.token)
  },
  userRole(state) {
    return state.user && state.user.role
  }
}

export const actions = {
  nuxtClientInit({ commit }, { app }) {
    const parsed = Cookie.getJSON(STORAGE_TOKEN)
    const auth = parsed || {
      user: null,
      token: null
    }
    commit('setUser', auth.user)
    commit('setToken', auth.token)
    app.$axios.setToken(auth.token, 'Bearer')
  },
  ToggleSidebar({ commit, state }) {
    commit('setSidebar', !state.sidebarOpen)
  },
  async login({ commit, dispatch }, credentials) {
    try {
      const response = await this.$api.auth.login(credentials)
      const { user, token } = response

      this.$axios.setToken(token, 'Bearer')

      // Cookie expires in an hour
      const expires = new Date(new Date().getTime() + 59 * 60 * 1000)
      Cookie.set(STORAGE_TOKEN, response, { expires })

      commit('setUser', user)
      commit('setToken', token)
      // Perform other actions
      return true
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async register({ commit }, credentials) {
    try {
      const response = await this.$api.auth.register(credentials)
      const { user, token } = response
      this.$axios.setToken(token, 'Bearer')

      // Cookie expires in an hour
      const expires = new Date(new Date().getTime() + 59 * 60 * 1000)
      // Set Token
      Cookie.set(STORAGE_TOKEN, response, { expires })

      commit('setUser', user)
      commit('setToken', token)
      // Any other actions
      return true
    } catch (err) {
      return Promise.reject(err)
    }
  },
  logout({ commit }) {
    commit('setUser', null)
    commit('setToken', null)
    Cookie.remove(STORAGE_TOKEN)
  }
}
