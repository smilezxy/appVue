// 负责操作localStorage的帮助文件
window.storageUtil = {};
  //用户信息
  var KEY_USER_INFO = "_key_user_info";
  //所有客户信息的保存
  var KEY_ALL_CUSTOMER_INFO = "_key_all_customer_info";
   //全局变量
   var KEY_ALL_INFO = "_key_all_info";

  function setItem (key,value) {
		value = JSON.stringify({
			data: value
		});
		key = key.toString();
        window.localStorage.setItem(key, value);		
  }
  function getItem(k) {
    var jsonStr = window.localStorage.getItem(k.toString());
    return jsonStr ? JSON.parse(jsonStr).data : null;
};



  storageUtil.setUserInfo = function (userInfo) {
    setItem(KEY_USER_INFO,userInfo)
  }

  storageUtil.setAllCustomersInfoList = function (customerInfos) {
   setItem(KEY_ALL_CUSTOMER_INFO, customerInfos);
  }

  
  storageUtil.setAllInfo = function (info) {
    setItem(KEY_ALL_INFO, info);
  }
  storageUtil.getAllInfo = function () {
    return getItem(KEY_ALL_INFO);
  }


export {
	storageUtil
}
