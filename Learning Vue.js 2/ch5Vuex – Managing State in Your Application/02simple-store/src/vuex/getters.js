export default {
  getMessage(state) {
    return (state.msg).trim()
  },
  getCounter(state) {
    return (state.counter)
  }
}