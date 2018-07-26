import {
	GET_USERINFO,
	OUT_LOGIN
} from './mutation-types'

import {getStore, removeStore} from '@/libs/mUtils.js'


export default {
	//获取用户信息存入vuex
	[GET_USERINFO](state, info) {
		if (info.data.code==1 ){
			state.userInfo = { ...info.data.data };
			console.log('user',state.userInfo.userName)
		}else {
			if(getStore('token')){
				removeStore('token');
			}
			if(getStore('userId')){
				removeStore('userId');
			}
			state.userInfo = null;
		}
	},
	//退出登录
	[OUT_LOGIN](state){
		if(getStore('token')){
			removeStore('token');
		}
		if(getStore('userId')){
			removeStore('userId');
		}
		alert('退出成功！')
		state.userInfo = null;
	}
}
