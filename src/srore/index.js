import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store=new Vuex.Store({
  state: {
    ID:"",
    Token:"",
    nickname:""
  },
  mutations:{
      LoginToken(state,userinfo){
        state.Token=userinfo.token;
        state.ID=userinfo.uid;
        localStorage.token=userinfo.token;
        sessionStorage.setItem("ID",userinfo.uid);
        sessionStorage.setItem("Nickname",userinfo.nickname);
        state.ID=userinfo.uid;
        state.Nickname=userinfo.nickname;
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
     },
    Retnickname(state){
      if(!state.nickname)
      {
        state.nickname=sessionStorage.getItem("Nickname");
      }
      return state.nickname;
    }
  }
})
export default store
