/* eslint-disable space-before-function-paren */
import { PostService } from '@/common/api.service'
import {
  FETCH_POSTS,
  FETCH_POST_ORDER,
  FETCH_POST_REORDER
} from './actions.types'
import {
  SET_POSTS,
  SORT_POSTS,
  REORDER_POSTS
} from './mutations.types'

const state = {
  posts: [],
  actions: []
}

const getters = {
  actions(state) {
    return state.actions
  },
  posts(state) {
    return state.posts
  }
}

const actions = {
  [FETCH_POSTS]({ commit }) {
    return PostService.get()
      .then(({ data }) => {
        commit(SET_POSTS, data)
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  [FETCH_POST_ORDER]({ commit }, payload) {
    commit(SORT_POSTS, { current: payload.current, next: payload.next })
  },
  [FETCH_POST_REORDER]({ commit }, index) {
    commit(REORDER_POSTS, index)
  }
}

const mutations = {
  [SET_POSTS](state, posts) {
    state.posts = posts
  },
  [SORT_POSTS](state, payload) {
    let current = state.posts[payload.current]
    let next = state.posts[payload.next]
    let sortedArray = [...state.posts]
    let oldArray = [...state.posts]
    let sortAction = {
      current: payload.current,
      next: payload.next,
      title: state.posts[payload.current].title,
      prevArray: oldArray
    }
    state.actions.unshift(sortAction)
    sortedArray.splice(payload.current, 1, next)
    sortedArray.splice(payload.next, 1, current)
    state.posts = sortedArray
  },
  [REORDER_POSTS](state, index) {
    state.posts = state.actions[index].prevArray
    state.actions.splice(0, index + 1)
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
