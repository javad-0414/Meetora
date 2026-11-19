import { defineStore } from 'pinia'
import api from '../services/api'

// بازیابی توکن ذخیره‌شده
const savedToken = localStorage.getItem('token')

if (savedToken) {
  api.defaults.headers.common.Authorization = `Bearer ${savedToken}`
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: savedToken || null,
    loading: false
  }),

  getters: {
    isLoggedIn: (state) => !!state.token
  },

  actions: {
    async login(data) {
      this.loading = true

      try {
        const response = await api.post('/auth/login', data)

        this.token = response.data.token
        this.user = response.data.user

        localStorage.setItem('token', this.token)

        api.defaults.headers.common.Authorization =
          `Bearer ${this.token}`

        return true
      } finally {
        this.loading = false
      }
    },

    async register(data) {
      this.loading = true

      try {
        const response = await api.post('/auth/register', data)

        this.token = response.data.token
        this.user = response.data.user

        localStorage.setItem('token', this.token)

        api.defaults.headers.common.Authorization =
          `Bearer ${this.token}`

        return true
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      this.token = null

      localStorage.removeItem('token')

      delete api.defaults.headers.common.Authorization
    }
  }
})