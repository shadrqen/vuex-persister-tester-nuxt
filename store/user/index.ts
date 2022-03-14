import { Module } from 'vuex'
import { mutations } from './mutations'
import { UserState, RootState } from '@/types'

const state = {
  name: ''
}

export const user: Module<UserState, RootState> = {
  state,
  mutations,
  namespaced: true
}
