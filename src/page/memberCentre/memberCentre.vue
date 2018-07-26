<template>
  <div class="memberCentre">
    <div id="main">
		  <div class="riskAssessWord">
			  <img width="14" src="./images/riskAssess_gantanhao2.png" alt=""> &nbsp;为了能给你提供更好的资产服务，请完成《投标风险偏好评估》 <a href="/riskAssess.do">点击开始评估</a>
		  </div>
		  <div id="admin">
			  <div class="admin_a">
				  <input type="hidden" id="discuzSynlogin" value="1">
          <div class="admin_a_t1" align="center">
            <img class="zs_logo" src="./images/zs_logo.png" alt="">
            <img src="./images/user_head.png" alt="">
            <p class="user_name">Hi,{{userName}}</p>
          </div>
				  <div class="admin_a_t4">
					  安全等级：
						<span class="admin_tx_a2">
							<span style="color: #ff5256">低 &nbsp;</span>
            </span>
					  <a href="javascript:window.location.href='security.do'" style="color: #fff;background-color: #bbc8ef;border-radius: 4px;padding: 0 5px;">提升</a>
					</div>
				  <div id="user_menu">
					  <dl class="user_menu_dl">
              <dd v-for="(item, index) in memberCentreMenu" :key="index">
                <router-link :to="item.path" :class="{'autoInvest':item.title=='自动投标','recommend':item.title=='好友推荐'}">
                  <span>{{item.title}}</span>
                </router-link>
              </dd>
					  </dl>
				  </div>
			  </div>
			  <div class="admin_outDiv">
          <router-view />
			  </div>
		  </div>
    </div>
  </div>
</template>

<script>

const memberCentreMenus = [
    {title:'账户总览',path:'/memberCentre/account'},
    {title:'我的投标',path:'/memberCentre/tender'},
    {title:'交易明细',path:'/memberCentre/transactionDetails'},
    {title:'充值提现',path:'/memberCentre/recharge'},
    {title:'好友推荐',path:'/memberCentre/inviteFriends'},
    {title:'我的返利',path:'/memberCentre/myRebates'},
    {title:'我的福利',path:'/memberCentre/myWelfare'},
    {title:'我的消息',path:'/memberCentre/message'},
    {title:'自动投标',path:'/memberCentre/automaticBid'},
    {title:'安全中心',path:'/memberCentre/securityCenter'},
    {title:'我要转让',path:'/memberCentre/myTransfer'},
];

import { mapState,mapMutations } from "vuex";
import { getStore } from '@/libs/mUtils.js';
import { myHomeDate } from '@/api/api.js';

export default {
  components: {},
  data() {
    return {
      userName:'',
      memberCentreMenu:memberCentreMenus,//会员中心菜单目录
    };
  },
  mounted() {
    this._getUserInfo();
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapMutations(['OUT_LOGIN']),
    exit(){
      this.OUT_LOGIN();
      this.$router.push({'path':'/login'});
    },
    _getUserInfo() {
      //获取用户信息
      myHomeDate({
			userId:getStore('userId'), 
      },{
        headers:{token:getStore('token')}
      })
      .then(res => {
        if (res.data.code == 1) {
          this.$store.state.userInfo = { ...res.data.data };
          this.userName = res.data.data.userName;
        } else {
          this.exit();
        }
      })
      .catch(error => {
        this.exit();
      });
    }
  }
};
</script>

<style lang='less' scope>
.memberCentre {
  #main {
    width: 100%;
    // display: inline;
    margin: 0 auto;
    min-width: 1180px;
    background: #f7f7f7;
    overflow: hidden;
  }
  .riskAssessWord {
    position: relative;
    top: 14px;
    width: 1078px;
    height: 25px;
    margin: 0 auto;
    line-height: 25px;
    background-color: #fffdf1;
    border: 1px solid #fb9d6f;
    color: #222222;
    font-size: 12px;
    text-align: center;
  }
  .riskAssessWord img {
    margin-bottom: 2px;
  }
  .riskAssessWord a {
    color: #2a39ce;
  }
  #admin {
    z-index: auto !important;
    width: 1080px;
    z-index: 1;
    border-radius: 4px;
    margin: 30px auto 60px;
    position: relative;
    background-color: #f7f9ff;
    overflow: hidden;
  }
  .admin_a {
    float: left;
    width: 190px;
    margin: 0 auto;
  }
  .admin_a_t1 {
    position: relative;
    width: 190px;
    line-height: 70px;
    padding-top: 20px;
    color: #222;
    font-size: 18px;
    font-weight: bold;
  }
  .admin_a_t1 img.zs_logo {
    position: absolute;
    top: 0;
    left: 0;
  }
  .admin_a_t1 p.user_name {
    line-height: 20px;
    padding-top: 20px;
  }
  .admin_a_t4 {
    width: 190px;
    height: 45px;
    line-height: 34px;
    text-align: center;
    color: #222;
    font-weight: bold;
  }
  .admin_tx_a2 {
    font-family: Microsoft YaHei, Helvetica, Tahoma;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 1px;
    color: #eb6101;
  }
  #user_menu {
    width: 100%;
    overflow: hidden;
  }
  #user_menu .user_menu_dl dd a.router-link-active {
    background-color: #ffdaca;
    border-left: 3px solid #ff6b2d;
    padding: 0 10px 0 7px;
    border-bottom-color: transparent;
    // order-top-color: transparent;
  }
  #user_menu .user_menu_dl dd a span {
    font-size: 16px;
    color: #222;
  }
  #user_menu .user_menu_dl dd a {
    display: block;
    padding: 0px 10px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: relative;
    border-bottom: 1px dashed #dce0f0;
  }
  #user_menu .user_menu_dl dd a.recommend {
    background: url("./images/earn_income.png") no-repeat 129px center;
  }
  #user_menu .user_menu_dl dd a.autoInvest {
    position: relative;
  }
  #user_menu .user_menu_dl dd a.autoInvest:after {
    content: "奖励0.2%";
    display: block;
    position: absolute;
    width: 59px;
    height: 22px;
    line-height: 21px;
    font-size: 12px;
    color: #fff;
    right: 0px;
    top: 20px;
    background: url("./images/table_tip.png") no-repeat;
  }
  #user_menu .user_menu_dl dd:last-child a {
    border-bottom: 0px;
  }
  .admin_outDiv {
    float: left;
    background-color: #fff;
    width: 890px;
  }
  
}
</style>
