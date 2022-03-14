import Vuex, { StoreOptions } from 'vuex'
import { user } from '@/store/user'
import { RootState } from '@/types'

const store: StoreOptions<RootState> = {
  state: {
    count: 0
  },
  actions: {},
  mutations: {
    SET_COUNT: (state: RootState) => {
      state.count++
    }
  },
  getters: {},
  modules: {
    user
  }
}

const initStore = () => {
  return (new Vuex.Store<RootState>(store))
}

export default initStore
