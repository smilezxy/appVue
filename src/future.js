//所有的API请求都在这
import Vue from '../node_modules/vue/dist/vue.js';
import axios from 'axios';

axios.defaults.baseURL = 'https://demo.proudsmart.com/api/rest/post';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import {
	Toast/*  */
} from 'mint-ui';

import {storageUtil} from './storage.js'

window.appFutureImpl = {}

//登录接口
var LOGIN_API = "/userLoginUIService/login";
//获取客户信息接口
var GET_CUSTOMER_INFO_API = "/customerUIService/findCustomersByCondition";
//获取设备信息接口
var GET_DEVICES_BY_CONDITION_WITHPAGE = "/resourceUIService/getDevicesByConditionWithPage";

//登录
appFutureImpl.goLogin = (name, password, successFunc) => {
	axios.post(LOGIN_API, [name, password])
		.then(function(response) {
			if (response.status == 200 && response.data.code == 0) {
				storageUtil.setUserInfo(response.data.data)
				/* 登陆后清空模版相关的缓存 */
				var allInfo = storageUtil.getAllInfo();
				if(allInfo) {
					allInfo.modelDic = {};
					storageUtil.setAllInfo(allInfo);
				}
				successFunc(response.data.data)
			}
		})
		.catch(function(error) {
			Toast(error)
		})

}



//获取客户信息接口
appFutureImpl.getAllCustomerInfoList = (successFunc) => {
	axios.post(GET_CUSTOMER_INFO_API,{
		"orCondition": "",
		"customerName": "",
		"customerAddress": "",
		"domainPath": "",
		"customerPhone": ""
	}).then(function(response) {
		if (response.status == 200 && response.data.code == 0) {
			storageUtil.setAllCustomersInfoList(response.data.data);
			successFunc(response.data.data)
		}
	})
	.catch(function(error) {
		Toast(error)
	});
}
//获取设备信息接口
appFutureImpl.getDevicesByConditionWithPage = (params,successFunc) => {
	axios.post(GET_DEVICES_BY_CONDITION_WITHPAGE,params)
	.then(function (response) {
		if (response.status == 200 && response.data.code == 0) {
			successFunc(response.data.data.data,response.data.data.total,response.message)
		}
	})
	.catch(function(error) {
		Toast(error)
	});
}


export {
	appFutureImpl
}