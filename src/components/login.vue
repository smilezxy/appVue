<template>
    <div class="mui-fullscreen">
        <div class="login-top-area" align="center">
            <img src="../../statics/image/logo.png">
        </div>
        <div class="login-login-area">
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button v-on:click="login">登录</button>
        </div>
    </div>
</template>

<style scoped>
    .login-top-area {
      text-align: center;
      width: 15rem;
      margin: 5rem auto 3rem auto;
      border-radius: 10px;
    }
    
    .login-top-area img {
      width: 85%;
      height: 85%;
      vertical-align: middle;
    }
    .login-login-area {
        margin-top: 70px;
        margin-right: 50px;
        margin-left: 50px;
    }
    input {
        display:block; 
        width:250px; 
        height:40px; 
        line-height:40px; 
        margin:20px auto; 
        margin-bottom: 10px; 
        outline:none; 
        border:1px solid #888; 
        padding:10px; 
        box-sizing:border-box;
    }
    button {
        display:block; 
        width:250px; 
        height:40px; 
        line-height: 30px; 
        margin:0 auto;
        border:none; 
        background-color:#41b883; 
        color:#fff; 
        font-size:16px; 
        margin-top:90px;
    }

</style>

<script>
    import { Toast } from 'mint-ui';
    import {appFutureImpl} from '../future.js'

    export default{
        data(){
            return{
                username: 'ps_kongtiao',
                password: 'abc123',
            }
        },
    mounted(){
        //自动登录
        // if(this.username && this.password) {
        //   this.login()
        // }
      },
    methods:{
        login(){
            if(this.username == "" || this.password == ""){
                Toast("请输入用户名或密码")
            }else{
                appFutureImpl.goLogin(this.username,this.password, (data) => {
                    this.$router.push('/main')
                })
      }
    }
  }
}
</script>