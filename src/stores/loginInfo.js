import { defineStore } from 'pinia'

export const useLoginInfoStore = defineStore({
  id: 'loginInfo',
  state: () => ({
    userId: '',
    username: '',
    userToken: '',
    imgUrl: ''

  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    login() {

    }
  }
})
