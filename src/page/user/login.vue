<template>
  <div class="login">
    <div class="uf_login">
      <div class="uf_login_cont">
          <div class="uf_right">
              <div class="login_tit">
                  <p>
                    <b>欢迎登录</b>
                  </p>
              </div>
              <div class="login_from">
                  <div class="login-user">
                      <input id="email" type="text" v-model="userName" @keyup.13="_login" placeholder="用户名/邮箱/手机号" value="">
                  </div>
                  <div class="login-pass">
                      <input id="password" v-model="userPwd" @keyup.13="_login" onpaste="return false;" type="password" placeholder="密码">
                  </div>
                  <div class="uf_error">
                      <span id="errorMessage" style="display: none;"></span>
                  </div>
                  <div class="log-reg">
                      <input type="hidden" id="errCount" value="">
                      <label><input id="autoLogin" type="checkbox">记住帐号</label>
                      <a href="forgetpassword.do" class="remenber">忘记密码？</a>
                  </div>
                  <div class="sub-login">
                      <a id="btn_login" href="javascript:void(0)" @click="_login">登 录</a>
                  </div>
                  <div class="sub-zhuce">还没注册？ <router-link to="/register">立即注册</router-link></div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import { login } from '@/api/api.js';
import { setStore } from '@/libs/mUtils.js';
import { encryptByDES } from '@/libs/des_encryption.js'

export default {
  data() {
    return {
      userName:'',//用户名
      userPwd:'',//用户密码
    };
  },
  mounted(){

  },
  methods:{
    _login(){
      if(!this.userName){
        alert('请输入用户名');
        return;
      }
      if(!this.userPwd){
        alert('请输入用户密码');
        return;
      }
      login({
        userName:encryptByDES(this.userName), 
        password:encryptByDES(this.userPwd), 
        platForm:3
      }).then(res => {
        if(res.data.code==1){
          setStore('token',res.data.data.token);
          setStore('userId',res.data.data.userId);
          this.$router.push({path:'/memberCentre'});
        }
      }).catch(err => {
        console.log(err);  
      })
    }
  }
};
</script>

<style lang='less' scope>

.login {
  .uf_login {
    width: 100%;
    margin: 0px auto;
    height: 734px;
    background: #010100 url('./images/login_ZheJiang_bank.jpg') center top no-repeat;
  }
  .uf_login .uf_login_cont {
    width: 1080px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
  }
  .uf_login .uf_login_cont .uf_right {
    float: right;
    width: 386px;
    padding-bottom: 10px;
    border: 1px solid #ccc;
    background: #fff;
    margin-top: 169px;
    margin-right: 45px;
  }
  .uf_login .uf_login_cont .uf_right .login_tit {
    height: 22px;
    line-height: 22px;
    padding: 26px 28px 24px 28px;
    overflow: hidden;
  }
  .uf_login .uf_login_cont .uf_right .login_tit p b {
    font-size: 22px;
    color: #222;
    font-weight: normal;
    float: left;
  }
  .uf_login .uf_login_cont .uf_right .login_from {
    padding: 24px 28px 0;
  }
  .uf_login .uf_login_cont .uf_right .login_from .login-user {
    height: 48px;
    border: solid 1px #bebebe;
    border-radius: 3px;
    background: url('./images/login_user.png') no-repeat;
    background-position: 23px 14px;
  }
  .uf_login .uf_login_cont .uf_right .login_from input {
    border: none;
    color: #767373;
    font-size: 13px;
    font-family: Microsoft YaHei,Helvetica,Tahoma;
    height: 48px;
    width: 268px;
    vertical-align: middle;
    float: right;
    resize: none;
    line-height: 34px;
    outline: none;
    background: transparent;
  }
  .uf_login .uf_login_cont .uf_right .login_from .login-pass {
    margin-top: 25px;
    height: 48px;
    border: solid 1px #bebebe;
    background: url('./images/login_password.png') no-repeat;
    background-position: 23px 12px;
    border-radius: 3px;
  }
  .uf_login .uf_login_cont .uf_right .login_from input {
    border: none;
    color: #767373;
    font-size: 13px;
    font-family: Microsoft YaHei,Helvetica,Tahoma;
    height: 48px;
    width: 268px;
    vertical-align: middle;
    float: right;
    resize: none;
    line-height: 34px;
    outline: none;
    background: transparent;
  }
  .uf_login .uf_login_cont .uf_right .login_from .uf_error {
    height: auto;
    min-height: 26px;
    margin-top: 7px;
  }
  .uf_login .uf_login_cont .uf_right #errorMessage {
    background: #ffeded url(/images/new/login/login_error_icon.png) 10px 6px no-repeat;
    border: 1px solid #ff5256;
    padding: 2px 5px 2px 30px;
    border-radius: 5px;
    display: block;
    line-height: 20px;
    font-size: 13px;
  }
  .uf_login .uf_login_cont .uf_right .login_from .uf_error span {
    color: red;
  }
  .uf_login .uf_login_cont .uf_right .login_from .log-reg {
    margin-top: 1px;
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    color: #222;
  }
  .uf_login .uf_login_cont .uf_right .login_from input {
    border: none;
    color: #767373;
    font-size: 13px;
    font-family: Microsoft YaHei,Helvetica,Tahoma;
    height: 48px;
    width: 268px;
    vertical-align: middle;
    float: right;
    resize: none;
    line-height: 34px;
    outline: none;
    background: transparent;
  }
  .uf_login .uf_login_cont .uf_right .login_from .log-reg label {
    float: left;
    cursor: pointer;
  }
  .uf_login .uf_login_cont .uf_right .login_from .log-reg label input {
    width: auto;
    float: none;
    height: auto;
    margin-right: 5px;
    vertical-align: middle;
  }
  .uf_login .uf_login_cont .uf_right .login_from .log-reg .remenber {
    float: right;
  }
  .uf_login .uf_login_cont .uf_right .login_from .sub-login {
    margin: 16px auto 10px;
    text-align: center;
  }
  .uf_login .uf_login_cont .uf_right .login_from .sub-login #btn_login {
    font-size: 18px;
    color: #fff;
    background: #fc5a55;
    display: block;
    padding: 10px;
    border-radius: 4px;
  }
  .uf_login .uf_login_cont .uf_right .login_from .sub-zhuce {
    text-align: right;
    font-size: 12px;
    color: #222;
  }
  .uf_login .uf_login_cont .uf_right .login_from .sub-zhuce a {
    color: #ff5256;
  }
}

</style>
