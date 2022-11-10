import { defineStore } from 'pinia'
import { api } from '../api'

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
    loginAction(loginData) {
      api.login(loginData).then(res=>{
        console.log(res)
        this.userId=res[1].loginUser.userId
        this.username=res[1].loginUser.username
        this.imgUrl=res[1].loginUser.imgUrl
        this.userToken=res[1].token
      })
    }
  }
})
