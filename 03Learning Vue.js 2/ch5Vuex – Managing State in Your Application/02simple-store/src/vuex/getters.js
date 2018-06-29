export default {
  getMessage(state) {
    return (state.msg).toLowerCase()
  },
  getCounter(state) {
    return (state.counter)
  }
}