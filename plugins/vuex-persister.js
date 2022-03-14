import VuexPersistor from 'vuex-persister'

export default ({ store }) => {
  new VuexPersistor({}).persist(store)
}
