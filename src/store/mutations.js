import {
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL,
    HIDE_LOADING,
    SHOW_LOADING,
    FOOTER_HIDE,
    FOOTER_SHOW,
    SUBLIBTN,
    GETSECONDMENU,
    LST,
    GETTABLEDATA,
    GETGJJS,
    ISOPEN,
    CLOSEDIOAG,
    SUBLEFTW,
    DIFFLIST,
    DIFFARRAYDATADETIAL,
    PREVIEW
}
from './type'
import Vue from 'vue'

/**
 * state不适合存储dom上的数据,应该存储状态上的数据
 */

const state = {
    rightShow:true,
    dialogVisible: false,
    subsnump: 0,
    tabheight: 500,
    loading: false,
    footerShow: true,
    count: 3,
    submenu: null,
    diffData: []
}

const mutations = {
    [GETSECONDMENU](state, datas) {
        state.submenu = datas;
        localStorage.currentUrl = JSON.stringify(datas);
    }, [LST](state) {
        state.submenu = JSON.parse(localStorage.currentUrl);
    }, [GETGJJS](state, datas) {
        state.searchJSON = datas;
    }, [ISOPEN](state, flag) {
        state.dialogVisible = flag
    },

    [SUBLEFTW](state) {
        state.subleftw = document.body.offsetWidth - 628 + "px";
        console.log(state.subleftw);
    }, [DIFFLIST](state, diffDataArray) {
            //这里面需要对diffDataArray进行分析,然后取得必要的数据进行发送ajax拉取后台的数据
        state.diffData = diffDataArray
    },[DIFFARRAYDATADETIAL](state,diffArraydata) {
        state.ArrayDataDetial = diffArraydata
    }








    /*分割线*/
    /*头部*/
    , [SUBLIBTN](state, index) {
        state.subsnump = index;
    }, [HEAD_SHOW_SUCCESS](state) {
        state.headShow = true;
    }, [HEAD_SHOW_FAIL](state) {
        state.headShow = false;
    },
    /*loading*/
    [HIDE_LOADING](state) {
        state.loading = false;
    }, [SHOW_LOADING](state) {
        state.loading = true;
    }
    /*footer*/

};

const getters = {
    count: (state) => {
        return state.count;
    },
    getOdd(state) {
        return state.count % 2 == 0 ? "这货2偶数" : "这是奇数"
    },
    subsnump: (state) => {
        return state.subsnump
    },
    submenu: (state) => {
        return state.submenu
    },
    searchJSON: (state) => {

        return state.searchJSON
    },
    rightNavArray:(state)=>{
        return state.rightNavArray
    },
    dialogVisible: (state) => {
        return state.dialogVisible;
    },
    tabheight: (state) => {
        return state.tabheight;
    },
    SUBLEFTW: (state) => {
        return state.subleftw;
    },
    DIFFDATA: (state) => {
            return state.diffData;
        },
    arrayDatadetial: (state) => {
            return state.ArrayDataDetial;
        },
    rightShow:(state)=>{
        return state.rightShow;
    }
};

export default {
    state,
    mutations,
    getters
}
