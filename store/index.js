export const state = () => ({
  signsPosts: []
})

export const mutations = {
  setSignsPosts (state, list) {
    state.signsPosts = list
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const files = await require.context('~/assets/content/signs/', false, /\.json$/)
    const signsPosts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setSignsPosts', signsPosts)
  }
}
