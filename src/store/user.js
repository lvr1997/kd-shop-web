import { defineStore } from 'pinia'


export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    isLogin: false,
    userInfo: {}
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
  }
})
