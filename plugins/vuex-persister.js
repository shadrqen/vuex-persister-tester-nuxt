import VuexPersistor from 'vuex-persister'
import SecureLS from 'secure-ls'

const SecureLocalStorage = new SecureLS({ encodingType: 'aes' }) // AES encryption and data compression

export default ({ store }) => {
  new VuexPersistor({
    storage: {
      getItem: key => SecureLocalStorage.get(key),
      setItem: (key, value) => SecureLocalStorage.set(key, value),
      removeItem: key => SecureLocalStorage.remove(key),
      length: SecureLocalStorage.getAllKeys().length,
      clear: () => SecureLocalStorage.clear(),
      key: () => null
    }
  }).persist(store)
}
