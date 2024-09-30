import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const fakeData = {
  name: 'Silicon',
  email: 'test@test.com',
  password: 'password'
}

export const useFakeAuthStore = defineStore('fakeAuth', {
  state: () => ({
    fakeUser: useStorage('Silicon_Fake_User', { name: '', email: '' })
  }),
  getters: {
    user: (state) => state.fakeUser,
    isAuthenticated: (state) => {
      return state.fakeUser.email.length > 0 && state.fakeUser.name.length > 0
    }
  },
  actions: {
    signUp(name: string, email: string, password: string) {
      if (password == '' || email == '' || name == '') {
        return false
      } else {
        this.fakeUser.name = name
        this.fakeUser.email = email
        return true
      }
    },
    signIn(email: string, password: string) {
      if (fakeData.email == email && fakeData.password == password) {
        this.fakeUser.name = fakeData.name
        this.fakeUser.email = fakeData.email
        return true
      }
      return false
    },
    signOut() {
      this.fakeUser = { name: '', email: '' }
    }
  }
})
