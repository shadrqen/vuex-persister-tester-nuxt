import { UserState, RootState } from '@/types'
import { Module } from 'vuex'
import { mutations } from './mutations'

const state = {
  name: ''
}

export const user: Module<UserState, RootState> = {
  state,
  mutations,
  namespaced: true
}
