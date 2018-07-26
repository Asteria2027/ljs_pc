<template>
  <div class="centre_account">
    <div class="admin_b">
      <div class="admin_b_conmonTitle">
        账户总览
      </div>
	    <div class="admin_b_x1a"></div>
	    <!--资金存管-->
	    <input type="hidden" id="depositStatus" value="2"><!--是否开通存管-->
      <div class="uc_zjcg" style="display: block;">
        <div class="img">
          <img src="../images/bank_jxyh.jpg">
        </div>
        <div class="text">
          <h3>存管账户</h3>
          <p>保证资金安全与正常投资</p>
        </div>
        <div class="link">
          <a class="zj_btn" id="zj_btn1" href="/openDepositAccoInit.do">立即开通</a>
        </div>
      </div>
      <!--资金存管弹窗-->
      <div class="user_zhzl">
        <div class="zl_l">
          <p class="p_availableMoney">可用余额（元）</p>
          <p class="c_org">
            0.00
          </p>
          <p>
            <a class="btn" onclick="rechargeClick();" href="javascript:void(0);">充值</a>
          </p>
        </div>
        <div class="zl_r">
          <ul>
            <li>
              <p>已赚佣金（元）<span>0.0</span><a href="javascript:void(0);" class="icons2 yhelp ToolTips ToolTipCol" data-text="邀好友注册投资可返红包和佣金">帮助</a></p>
              <a class="a_look" href="friendManagerInit.do?flag=1">查看我的佣金&gt;&gt;</a>
            </li>
            <li>
              <p>已赚返利（元）<span>0.0</span><a href="javascript:void(0);" class="icons2 yhelp ToolTips ToolTipCol" data-text="投资者投资符合条件后可得高端会员返利">帮助</a></p>
              <a class="a_look" href="queryMemberBonusRecord.do">查看我的返利&gt;&gt;</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="user_wdfl">
        <span class="ofont">您还有<label>5</label>个红包未使用，请尽快使用哦。</span> <a href="/redEnvelopeInit.do">我的福利 <span>&gt;</span></a>
      </div>
      <div class="user_account">
        <div class="all_income">累计收益 <span>0.00元</span></div>
        <div id="accountEchart"><div></div></div>
      </div>
      <div class="admin_b_x4">
		    <div>
		    </div>
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
.centre_account {
  .admin_b {
    width: 792px;
    margin: 0 auto;
  }
  .admin_b_conmonTitle {
    width: 787px;
    height: 70px;
    margin: 0 auto 50px;
    line-height: 70px;
    padding-left: 5px;
    color: #222;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid #f77b55;
  }
  .admin_b_x1a {
    float: left;
    width: 792px;
    height: 10px;
  }
  .uc_zjcg {
    display: none;
    width: 100%;
    padding: 15px 0;
    border-top: 1px solid #d0d5d9;
    border-bottom: 1px solid #d0d5d9;
    overflow: hidden;
    margin-bottom: 36px;
  }
  .uc_zjcg .img {
    float: left;
    padding-left: 26px;
  }
  .uc_zjcg .text {
    padding-left: 10px;
    float: left;
    padding-top: 10px;
  }
  .uc_zjcg .text h3 {
    font-size: 16px;
    font-weight: 400;
    color: #2d2d2d;
  }
  .uc_zjcg .text p {
    font-size: 14px;
    color: #999;
  }
  .uc_zjcg .link {
    float: right;
    padding-right: 60px;
    padding-top: 10px;
  }
  .zj_btn {
    display: block;
    width: 140px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    background: #ff5256;
    border-radius: 3px;
  }
  .user_zhzl {
    overflow: hidden;
    margin: 0;
    padding: 35px 0px 20px 100px;
    border: 1px solid #d0d5d9;
    border-radius: 4px;
  }
  .user_zhzl .zl_l {
    height: 65px;
  }
  .user_zhzl .zl_l >p {
    float: left;
    line-height: 38px;
  }
  .user_zhzl p.p_availableMoney {
    font-size: 16px;
    padding-bottom: 11px;
    color: #222222;
  }
  .user_zhzl .zl_l .c_org {
    width: 300px;
    text-align: left;
    font-size: 30px;
    padding-left: 26px;
    color: #fe5b58 !important;
    font-weight: bold;
    font-size: 18px;
  }
  .user_zhzl .zl_l >p {
    float: left;
    line-height: 38px;
  }
  .user_zhzl p {
    color: #333;
    font-size: 15px;
    padding-bottom: 10px;
    text-align: center;
  }
  .user_zhzl .btn {
    display: block;
    width: 146px;
    height: 38px;
    margin: 0 auto;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    background: #fe5b58;
    border-radius: 3px;
  }
  .user_zhzl .zl_r {
    overflow: hidden;
  }
  .user_zhzl .zl_r ul li:first-child {
    width: 418px;
  }
  .user_zhzl .zl_r ul li {
    float: left;
    padding-bottom: 16px;
  }
  .user_zhzl .zl_r ul li p {
    text-align: left;
    color: #666666;
  }
  .user_zhzl .zl_r ul li p span {
    color: #fd7602;
    font-weight: bold;
  }
  .user_zhzl .yhelp {
    margin-left: 5px;
  }
  .yhelp.ToolTips {
    height: 12px;
  }
  .yhelp {
    background-position: -103px -98px;
    height: 12px;
    width: 12px;
  }
  .icons2 {
    background: url('../images/sprites.png') no-repeat scroll 0% 0% transparent;
    display: inline-block;
    font-size: 0;
    height: 16px;
    line-height: 0;
    overflow: hidden;
    text-indent: -9999px;
    width: 16px;
  }
  .user_zhzl .zl_r ul li a.a_look {
    color: #ff953a;
    font-size: 15px;
  }
  .user_zhzl .zl_r ul li {
    float: left;
    padding-bottom: 16px;
  }
  .user_zhzl .zl_r ul li p {
    text-align: left;
    color: #666666;
  }
  .user_wdfl {
    width: 790px;
    height: 80px;
    line-height: 80px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    margin-top: 30px;
    background: url(../images/myfl.png) no-repeat 30px center;
  }
  .user_wdfl .ofont {
    margin-left: 115px;
  }
  .user_wdfl span label {
    color: #ff7621;
    font-size: 16px;
    font-weight: bold;
  }
  .user_wdfl a {
    float: right;
    color: #4a97d2;
    font-size: 14px;
    margin-right: 20px;
  }
  .user_wdfl a span {
    color: #8a949c;
    font-weight: bold;
    padding-left: 2px;
  }
  .user_account {
    position: relative;
  }
  .user_account .all_income {
    position: absolute;
    color: #333131;
    top: 20px;
    font-size: 18px;
    left: 20px;
  }
  .user_account .all_income span {
    color: #ff9b00;
  }
  #accountEchart {
    width: 791px;
    height: 390px; 
    border: 1px solid rgb(221, 221, 221); 
    margin: 20px 0px; border-radius: 4px; 
    -webkit-tap-highlight-color: transparent;
    user-select: none; 
    position: relative; 
    background: transparent;
  }
  .admin_b_x4 {
    float: left;
    width: 792px;
    padding-bottom: 30px;
  }
}

</style>
