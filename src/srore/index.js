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
        sessionStorage.setItem("ID",userinfo.uid);
        state.ID=userinfo.uid;
      }
  },
  getters:{
    RetToken(state){
      if(!state.Token)
      {
        state.Token=localStorage.getItem("token");
      }
      return state.Token;
    },
     RetUid(state){
       if(!state.ID)
       {
         state.ID=sessionStorage.getItem("ID");
       }
        return state.ID;
     }
  }
})
export default store
