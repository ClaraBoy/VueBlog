import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store=new Vuex.Store({
  state: {
    ID:"",
    Token:"",
  },
  mutations:{
      LoginToken(state,userinfo){
        state.Token=userinfo.token;
        state.ID=userinfo.uid;
        localStorage.token=userinfo.token;
      }
  },
  getters:{
    RetToken(store){
      if(!store.Token)
      {
        store.Token=localStorage.getItem("token");
      }
      return store.Token;
    },
    // RetUid(store){
    //     return store.Uid=localStorage.getItem("ID");
    // }
  }
})
export default store
