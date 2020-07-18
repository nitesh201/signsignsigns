export const state = () => ({
  signsPosts: [],
});

export const mutations = {
  setSignsPosts(state, list) {
    state.signsPosts = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context('~/assets/content/signs/', false, /\.json$/);
    let signsPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setSignsPosts', signsPosts);
  },
};