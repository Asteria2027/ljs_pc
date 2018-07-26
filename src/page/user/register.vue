<template>
  <div class="register">
    <div id="main">
      <div id="main_wytz">
        <form class="niceform" method="POST" action="#">
          <div class="register_contaner">
            <div class="register_inner">
              <div class="regis_top">
              <p class="regis_top_p">注册即<span>送668元投资红包</span></p>
              </div>
              <div id="regis_notice">
                <p class="exinput_tip" id="s_cellPhone"></p>
                <p class="exinput_tip1" id="s_password"></p>
                <p class="exinput_tip" id="textcode"></p>
                <p class="exinput_tip" id="s_code"></p>
              </div>
              <div class="re_inpubox">
              <div class="inputlist" style="display: none">
                <p class="ex_inputleft"><span class="ex_star">*</span><span>性 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span></p>
                <p class="ex_dxuan">
                <label class="radio_right">
                  <input type="radio" name="RadioGroup1" value="男" id="man" checked="checked">
                  男</label>
                <label>
                    <input type="radio" name="RadioGroup1" value="女" id="woman">
                  女</label>
                  </p>
                <div class="clear"></div>
              </div>
              <div class="inputlist">
                <p class="ex_telinput" style="position: relative">
                  <span class="zhangyangfa_img1"></span>
                  <input type="text" class="input_p" id="cellPhone" placeholder="手机号">
                <!-- <input id="hid_cellPhone" type="hidden"> -->
                </p>
                <div class="clear"></div>
              </div>
              <div class="inputlist">
                <p class="ex_telinput">
                  <span class="zhangyangfa_img2"></span>
                  <input type="password" style="display: none">
                <input type="password" class="input_p" id="password" onpaste="return false;" placeholder="密码">
                </p>
                <div class="clear"></div>
              </div>
              <div class="inputlist">
                <p class="ex_telinput">
                <input type="text" class="input_yz" id="validCode" style="width: 275px;" value="" placeholder="验证码">
                <input id="hid_cellPhone" type="hidden">
                <span class="reg_code" onclick="switchImgCode()"><img src="admin/imageCode.do?pageId=userReg" id="codeNum"></span>
                </p>
                <div class="clear"></div>
              </div>
              <div class="inputlist">
                <p class="ex_yzinput">
                <input type="text" class="input_yz" name="Input" id="code" placeholder="短信验证码">
                </p>
                <p class="ex_seninput">
                <input type="button" class="ex_send" id="sendPhone" value="获取验证码">
                </p>
                <div class="clear"></div>
              </div>
              <div class="inputlist" style="display: none;">
                <p class="ex_inputleft"><span class="ex_star">*</span><span>确认密码</span></p>
                <p class="ex_telinput" style="width:180px;">
                <input id="confirmPassword" type="password" onpaste="return false;" class="input_p">
                </p>
                <p class="exinput_tip1" id="s_confirmPassword"></p>
                <div class="clear"></div>
              </div>
              <div class="inputlist" id="ref">
                  <p class="ex_telinput" style="width:180px;">
                  <input id="refferee" type="text" class="input_p" placeholder="推荐人手机号或者服务号（选填）">
                  </p>
                  <p class="exinput_tip2" id="s_serviceNo" style="line-height:18px;padding-left:80px;"></p>
                  <div class="clear"></div>
              </div>
              <div class="inputlist yedu_div">
                <p class="ex_yuedu">
                <input type="checkbox" class="incheck" id="agre">我已经阅读并同意<a href="javascript:void(0);" id="jpbottom1">《联金所平台注册协议》</a><a href="javascript:void(0);" id="jpbottom2">《居间服务协议》</a>和<a href="javascript:void(0);" class="show_xss_box">《网络借贷风险及禁止性行为揭示书》</a>
                  <span class="exinput_tip" id="s_xieyi"></span>
                  <!-- 您的注册信息通过256位SGC加密保护，数据传输安全 -->
                </p>
                <div class="clear"></div>
              </div>
                <p class="error_msg" id="s_error" style="display: none; color: red; padding-left: 50px;"></p>
              <div class="inputlist">
                <p class="ex_telinput">
                <input id="btn_register" type="button" class="ex_send" value="立即注册">
                </p>
                <div class="clear"></div>
              </div>
                <div class="login_now">已有帐号？ <router-link to='/login'>立即登录</router-link></div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div id="div">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang='less' scope>
.register {
  #main {
    padding: 0;
    background: url('./images/login_ZheJiang_bank.jpg') center no-repeat;
    height: 734px;
  }
  #main_wytz {
    width: 1080px;
    margin: 0 auto;
    overflow: hidden;
    background: none;
  }
  .register_contaner {
    float: right;
    width: 386px;
    background: #fff;
    margin: 75px 46px;
    border-radius: 5px;
  }
  .register_inner {
    position: relative;
    padding: 0px 28px;
  }
  .register_inner #code {
    background: url(./images/zhuce_phoneMessage.png) no-repeat 23px center;
    width: 161px;
    padding-left: 53px;
  }
  .ex_yzinput input {
    height: 48px;
  }
  .ex_yzinput input {
    text-indent: 10px;
    border-radius: 4px;
    height: 42px;
    line-height: 42px;
  }
  .input_yz {
    width: 117px;
    border: 1px solid #bebebe;
    height: 30px;
    border-radius: 2px;
    margin: 0;
    padding: 0;
    line-height: 30px;
  }
  .inputlist .ex_seninput {
    float: left;
    margin-left: 22px;
    input {
      padding: 0 10px;
      height: 42px;
      line-height: 42px;
    }
  }
  .inputlist p {
    float: left;
    height: 50px;
  }
  .ex_seninput {
    width: 97px;
    height: 32px;
  }
  .ex_send {
    height: 50px;
    line-height: 50px;
    border-radius: 4px;
    font-size: 15px;
    color: #fff;
    background: #ff5256;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid #e1e1e1;
    margin: 0;
    padding: 0;
  }
  .regis_top {
    padding-top: 26px;
    font-size: 22px;
    height: 22px;
  }
  .regis_top_p {
    display: block;
    float: left;
    color: #222222;
    height: 22px;
    line-height: 7px;
  }
  .regis_top_p span {
    color: #ff5256;
  }
  #regis_notice {
    height: 26px;
    margin: 2px 0;
  }
  .exinput_tip {
    color: #ff3431;
    font-size: 12px;
    line-height: 32px;
    margin-left: 10px;
    line-height: 32px;
  }
  .exinput_tip1 {
    width: 145px;
    font-size: 12px;
    line-height: 18px;
    margin-left: 10px;
    color: grey;
  }
  .inputlist {
    margin-bottom: 16px;
    height: 50px;
  }
  .inputlist p {
    float: left;
    height: 50px;
  }
  .ex_inputleft {
    width: 100px;
    color: #767676;
    font-size: 14px;
    line-height: 42px;
    text-align: right;
    margin-right: 10px;
  }
  .ex_inputleft {
    width: 100px;
    color: #767676;
    font-size: 14px;
    line-height: 42px;
    text-align: right;
    margin-right: 10px;
  }
  .ex_dxuan, .ex_telinput {
    color: #313131;
    font-size: 14px;
    width: 245px;
    height: 32px;
    line-height: 32px;
  }
  .radio_right {
    margin-right: 40px;
    padding-left: 20px;
  }
  .inputlist {
    margin-bottom: 16px;
    height: 50px;
  }
  .ex_telinput .zhangyangfa_img1 {
    background: #ffffff url(./images/zhuce_phone.png) no-repeat 23px center;
  }
  #cellPhone {
    background: url(./images/zhuce_phone.png) no-repeat 23px center;
  }
  .ex_telinput input {
    float: left;
    height: 48px;
    width: 275px;
    padding-left: 53px;
    border: 1px solid #bebebe;
  }
  .inputlist p {
    float: left;
    height: 50px;
  }
  .ex_telinput {
    position: relative;
  }
  .ex_telinput {
    color: #313131;
    font-size: 14px;
    width: 245px;
    height: 32px;
    line-height: 32px;
  }
  #validCode {
    background: url(./images/zhuce_picMessage.png) no-repeat 23px center;
  }
  .ex_telinput input {
    float: left;
    height: 48px;
    width: 275px;
    padding-left: 53px;
    border: 1px solid #bebebe;
  }
  .ex_telinput input, .ex_yzinput input {
    text-indent: 10px;
    border-radius: 4px;
    height: 42px;
    line-height: 42px;
  }
  .ex_telinput input {
    float: left;
    height: 48px;
    width: 275px;
    padding-left: 53px;
    border: 1px solid #bebebe;
  }
  .ex_telinput input, .ex_yzinput input {
    text-indent: 10px;
    border-radius: 4px;
    height: 42px;
    line-height: 42px;
  }
  .reg_code {
    cursor: pointer;
    width: 150px;
    height: 22px;
    line-height: 22px;
    position: absolute;
    right: -80px;
    top: 6px;
  }
  .reg_code img {
    width: 100%;
  }
  .inputlist p {
    float: left;
    height: 50px;
  }
  .ex_yzinput {
    position: relative;
  }
  .ex_yzinput {
    height: 32px;
    line-height: 32px;
  }
  .ex_seninput {
    width: 97px;
    height: 32px;
  }
  .ex_star {
    color: #ff3431;
    margin-right: 5px;
  }
  .exinput_tip1 {
    width: 145px;
    font-size: 12px;
    line-height: 18px;
    margin-left: 10px;
    color: grey;
  }
  #refferee {
    background: url(./images/zhuce_tjr.png) no-repeat 23px center;
  }
  .ex_telinput .zhangyangfa_img2 {
    display: inline-block;
    position: absolute;
    margin: 1px;
    height: 44px;
    width: 52px;
    z-index: 10;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .ex_telinput .zhangyangfa_img2 {
    background: #ffffff url(./images/zhuce_password.png) no-repeat 23px center;
  }
  .ex_telinput input {
    float: left;
    height: 48px;
    width: 275px;
    padding-left: 53px;
    border: 1px solid #bebebe;
  }
  .yedu_div {
    height: 40px;
    margin-bottom: 11px;
    margin-top: 28px;
  }
  .ex_yuedu {
    height: 20px;
    line-height: 20px;
    width: 330px;
    color: #222222;
    font-size: 12px;
  }
  .incheck {
    margin: 0;
    padding: 0;
    vertical-align: middle;
    margin-right: 10px;
    color: #313131;
  }
  .ex_yuedu a {
    color: #39b1fa;
  }
  .exinput_tip {
    color: #ff3431;
    font-size: 12px;
    line-height: 32px;
    margin-left: 10px;
    line-height: 32px;
  }
  #btn_register {
    padding-left: 0;
    width: 330px;
  }
  #btn_register {
    background: #ff5256;
    color: #fff;
  }
  .ex_telinput input {
    float: left;
    height: 48px;
    width: 275px;
    padding-left: 53px;
    border: 1px solid #bebebe;
  }
  .login_now {
    float: right;
    color: #222;
  }
}

</style>
