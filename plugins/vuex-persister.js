import VuexPersistor from 'vuex-persister'

export default ({ store }) => {
  new VuexPersistor({
    storage: sessionStorage
  }).persist(store)
}
