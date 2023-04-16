import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters"
const store=new Vuex.Store({
   state:{
       productList:[]
   },
    mutations,
    actions,
    getters

})
export default store