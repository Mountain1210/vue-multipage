//import 数据 from '' 这里面可以获取数据
import * as types from './type'
import Vue from 'Vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default {
        addhistory: ({
            commit,
            state
        },index)=>{
          console.log(index)
          commit(types.ADDHISTORY,index);
            // if (state.mutations.count % 2 == 0) {
            //     commit(types.INCREMENT);
            // } else {
            //     console.log(state)
            //     alert("这是奇数")
            // }
        }
        ,delhistory: ({
            commit,
            state
        },index)=>{
          commit(types.DELHISTORY,index);
            // if (state.mutations.count % 2 == 0) {
            //     commit(types.INCREMENT);
            // } else {
            //     console.log(state)
            //     alert("这是奇数")
            // }
        }
}
