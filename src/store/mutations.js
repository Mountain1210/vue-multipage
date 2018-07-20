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
    diffData: [],
    page_path: 'about.html',
    //页面容器,用于存放需要跳转页面的路径
    page_list: {
      //index
      'index': 'index.html',
      //about
      'about': 'about.html',
      //commodity
      'commodity@commodity_info': 'commodity/commodity_info.html',
      'commodity@commodity_time': 'commodity/commodity_time.html',
      'commodity@commodity_type': 'commodity/commodity_type.html',
      //sale
      'sale@sale_info': 'sale/sale_info.html',
      'sale@sale_time': 'sale/sale_time.html',
      'sale@sale_type': 'sale/sale_type.html',
      //environment
      'environment@area_info': 'environment/area_info.html',
      'environment@area_sale_time': 'environment/area_sale_time.html',
      'environment@area_trends': 'environment/area_trends.html',
      //user
      'user@user_info': 'user/user_info.html',
      'user@user_spending': 'user/user_spending.html',
      'user@user_stay': 'user/user_stay.html',
      'user@user_trends': 'user/user_trends.html',
      'user@user_usetime': 'user/user_usetime.html',
      //management
      'management@management_area': 'management/management_area.html',
      'management@management_commodity': 'management/management_commodity.html',
      'management@management_staff': 'management/management_staff.html',
      //baidu
      'baidu': 'http://www.baidu.com'
    },
    getPagePath (){
      console.log(this.page_list);
      if (this.page_list[this.$route.params.page_path]) {
        this.page_path = this.page_list[this.$route.params.page_path]
      }
      else if(this.$route.params.page_path == '!') {
        return this.page_path
      }
      else {
        this.page_path = this.page_list['about']
      }
      return this.page_path
    }
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
