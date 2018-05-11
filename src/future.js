//所有的API请求都在这
import Vue from '../node_modules/vue/dist/vue.js';
import axios from 'axios';
axios.defaults.baseURL = 'https://demo.proudsmart.com/api/rest/post';
import {
	Toast
} from 'mint-ui';

window.appFutureImpl = {}


var LOGIN_API = "/userLoginUIService/login";

appFutureImpl.goLogin = (name, password, successFunc) => {
	axios.post('/userLoginUIService/login', [name, password])
		.then(function(response) {
			if (response.status == 200 && response.data.code == 0) {
				successFunc(response.data)
			}
		})
		.catch(function(error) {
			Toast(error)
		});

}


export {
	appFutureImpl
}