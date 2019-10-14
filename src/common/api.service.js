/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '@/common/config'

const ApiService = {
  init() {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },
  get(resource, limit = 5) {
    return Vue.axios.get(`${resource}?_limit=${limit}`).catch(error => {
      throw new Error(`[Temper] ApiService ${error}`)
    })
  },
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params)
  }
}
export default ApiService

export const PostService = {
  get(limit) {
    return ApiService.get('posts', limit)
  }
}
