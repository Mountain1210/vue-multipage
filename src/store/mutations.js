import {
ADDHISTORY,
DELHISTORY
}
from './type'
import Vue from 'vue'

/**
 * state不适合存储dom上的数据,应该存储状态上的数据
 */

const state = {
    historymenu: []
    ,getPagePath (){
      console.log(this.page_list);
      if (this.page_list[this.$route.params.page_path]) {
        this.page_path = this.page_list[this.$route.params.page_path]
      }
      else if(this.$route.params.page_path == '!') {
        return this.page_path
      }
      else {
        this.page_path = this.page_list['about@index']
      }
      return this.page_path
    }
}

const mutations = {

    [ADDHISTORY](state, index) {
        state.historymenu.push(index);
    }
    ,[DELHISTORY](state, index) {
        if(isNaN(index)||index>state.historymenu.length){return false;}
          state.historymenu.splice(index,1);
    }
};

const getters = {
    historymenu: (state) => {
            return state.historymenu;
        }
};

export default {
    state,
    mutations,
    getters
}
