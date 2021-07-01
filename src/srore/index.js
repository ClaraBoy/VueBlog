import Vuex from "vuex"
import Vue from "vue"
import fa from "element-ui/src/locale/lang/fa";
Vue.use(Vuex)
const store=new Vuex.Store({
  state: {
    ID:"",
    Token:"",
    nickname:"",
    LoginShow:false,
  },
  mutations:{
      LoginToken(state,userinfo){
        state.Token=userinfo.token;
        state.ID=userinfo.uid;
        localStorage.setItem("token",userinfo.token);
        sessionStorage.setItem("ID",userinfo.uid);
        sessionStorage.setItem("Nickname",userinfo.nickname);
        state.ID=userinfo.uid;
        state.Nickname=userinfo.nickname;
      },
    puLoginShowTo(state,whether){
      state.LoginShow=whether;
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
    },
    LoginShows(state){
        return state.LoginShow;
    }
  }
})
export default store
