import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store=new Vuex.Store({
  state: {
    Token:"",
  },
  mutations:{
      LoginToken(state,token){
        state.Token=token;
        localStorage.token=token;
      }
  },
  getters:{
    RetToken(store){
      if(!store.Token)
      {
        store.Token=localStorage.getItem("token")
      }
      return store.Token;
    }
  }
})
export default store
