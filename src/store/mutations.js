const mutations = {
  add(state) {
    state.count += 1;
  },
  reduce(state) {
    state.count -= 1;
  }
}
exports.default = mutations