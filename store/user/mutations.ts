
import { MutationTree } from 'vuex'
import { UserState } from '@/types'

export const mutations: MutationTree<UserState> = {
  SET_NAME: (state: UserState, payload: string) => {
    state.name = payload
  }
}
