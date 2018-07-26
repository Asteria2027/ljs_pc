<template>
  <div class="shortcut">
    <div class="heard">
      <div class="heard_top">
        <div class="heard_bop_inner">
          <Row>
              <Col span="12" align="left" class="heard_top_height">
                <Row>
                    <Col span="13" align="left" class="heard_top_height">客服热线：400-867-9888（工作时间：09:00-18:00）</Col>
                    <Col span="4" align="left" class="heard_top_height" style="cursor: pointer;">
                      <img src="./qq_group3.png" alt="加入QQ群">
                      <a href="javascript:;">加入QQ群</a>
                    </Col>
                    <Col span="4" align="left"  class="heard_top_height" style="position:relative;cursor:pointer;" @mouseover.native="showAppdown=true" @mouseout.native="showAppdown=false">
                      <img src="./new_donw_app.png" alt="手机APP">
                      手机APP
                      <div class="app_downewm" v-if="showAppdown">
                        <img src="./donw_app_ewm.jpg">
                        <p class="first">下载手机APP</p>
                        <p class="second">[联金所]</p>
                      </div>
                    </Col>
                </Row>
              </Col>
              <Col span="12" align="right"  class="heard_top_height">
                <Row>
                    <Col span="7" align="right" class="heard_top_height">
                      <router-link to="/login" v-if="!userInfo">登录</router-link>
                      <a href="javascript:;" v-else>{{'欢迎您，'+userInfo.userName+' !'}} <span @click="exit">[ 退出 ]</span></a>
                    </Col>
                    <Col span="3" align="middle" class="heard_top_height" >
                      <router-link v-if="!userInfo" to="/register">注册</router-link>
                    </Col>
                    <Col span="3" align="middle" class="heard_top_height">最新活动</Col>
                    <Col span="3" align="middle" class="heard_top_height">帮助中心</Col>
                    <Col span="4" align="middle" class="heard_top_height">资费说明</Col>
                    <Col span="4" align="middle" class="heard_top_height" style="background:#ff5256;color:#fff;">进入普通版</Col>
                </Row>
              </Col>
            </Row>
        </div>
      </div>
      <div class="heard_bottom">
        <div class="heard_bottom_inner">
            <router-link tag="div" to="/home" class="heard_logo">
              <img class="logo" src="./logo_a_02.png">
              <img class="logoTip" src="./logoTip_cg.jpg" alt="联金所,网贷借贷信息中介平台,p2p平台,p2p投资理财">
            </router-link>
            <div class="heard_nav">
              <Row>
                <Col span="4" align="right">
                  <router-link to="/home">首页</router-link>
                </Col>
                <Col span="4" align="right">
                  <router-link to="/tender" class="link_tender" @mouseover.native="tenderTitleShow=true" @mouseout.native="tenderTitleShow=false">
                    <div style="position:relative; z-index:100">我要投标</div>
                    <transition name="tenderTitle-fade" mode="out-in">
                      <div class="tender_title_list" v-if="tenderTitleShow">
                        <p></p>
                        <router-link :to="item.path" tag="p" v-for="(item,index) in tenderTitleList" :key="index">{{item.title}}</router-link>
                      </div>
                    </transition>
                  </router-link>
                </Col>
                <Col span="4" align="right">
                  <router-link to="/guide">新手指引</router-link>
                </Col>
                <Col span="4" align="right">
                  <router-link to="/infoDisplay" class="link_infoDisplay" @mouseover.native="infoDisplayTitleShow=true" @mouseout.native="infoDisplayTitleShow=false">
                    <div style="position:relative; z-index:100">信息披露</div>
                    <transition name="infoDisplayTitle-fade" mode="out-in">
                      <div class="infoDisplay_title_list" v-if="infoDisplayTitleShow">
                        <p></p>
                        <router-link :to="item.path" tag="p" v-for="(item,index) in infoDisplayTitleList" :key="index">{{item.title}}</router-link>
                      </div>
                    </transition>
                  </router-link>
                </Col>
                <Col span="4" align="right">
                  <a href="http://bbs.uf-club.com/portal.php?n=jh">联金论坛</a>
                </Col>
                <Col span="4" align="right">
                  <router-link to="/memberCentre">会员中心</router-link>
                </Col>
              </Row>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

const titleList = {
  tender :[
    {title:'个人专区',path:'/tender/person'},
    {title:'散标专区',path:'/tender/scattered'},
    {title:'企业专区',path:'/tender/enterprise'},
    {title:'转让专区',path:'/tender/transfer'},
    {title:'新手专享',path:'/tender/newbie'},
  ],
  infoDisplay :[
    {title:'组织信息',path:'/infoDisplay/organization'},
    {title:'备案信息',path:'/infoDisplay/record'},
    {title:'审核信息',path:'/infoDisplay/review'},
    {title:'运营信息',path:'/infoDisplay/operation'},
    {title:'风险管理信息',path:'/infoDisplay/riskManagement'},
    {title:'新闻公告',path:'/infoDisplay/newsAnnouncement'},
    {title:'信批确认函',path:'/infoDisplay/letterOfApproval'},
    {title:'风险提示',path:'/infoDisplay/riskWarn'},
    {title:'合作机构',path:'/infoDisplay/collaborator'},   
  ]
}

export default {
  data() {
    return {
      showAppdown:false,//app下载二维码悬浮展示
      tenderTitleShow:false,//投标列表悬浮展示
      infoDisplayTitleShow:false,//投标列表悬浮展示
      tenderTitleList:titleList.tender,//标题列表
      infoDisplayTitleList:titleList.infoDisplay,//标题列表
    };
  },
  computed: {
    ...mapState([
      'userInfo'
    ]),
  },
  methods:{
    ...mapMutations(['OUT_LOGIN']),
    exit(){
      this.OUT_LOGIN();
      this.$router.push({'path':'/login'});
    }
  }
};
</script>

<style lang='less' scope>

.tenderTitle-fade-enter-active,
.tenderTitle-fade-leave-active 
.infoDisplayTitle-fade-enter-active,
.infoDisplayTitle-fade-leave-active {
  transition: opacity 0.3s;
}
.tenderTitle-fade-enter,
.tenderTitle-fade-leave-active 
.infoDisplayTitle-fade-enter,
.infoDisplayTitle-fade-leave-active {
  opacity: 0;
}

.shortcut {
  .heard {
    position: relative;
    z-index: 1000;
  }
  .heard_top {
    width: 100%;
    margin: 0 auto;
    height: 36px;
    font-size: 12px;
    background-color: #f6f6f6;
    min-width: 1080px;
    .heard_bop_inner {
      width: 1080px;
      height: 36px;
      margin: 0 auto;
      color: #666666;
      img {
        vertical-align: -1px;
      }
      .app_downewm {
        position: absolute;
        left: -14px;
        top: 36px;
        width: 111px;
        padding: 5px;
        text-align: center;
        color: #999999;
        background-color: #ffffff;
        border-left: 1px solid #eeeeee;
        border-right: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
        border-radius: 8px;
        z-index: 9999 ;
        box-shadow:0px 4px 4px #e0e0e0;
        img {
          width: 100%;
        }
        p {
          line-height: 20px;
        }
        p.second {
          color: #ff5358;
        }
      }
      .app_downewm:after {
        display: block;
        content: '';
        position: absolute;
        top: -19px;
        left: 42%;
        width: 0px;
        height: 0px;
        border-top: 9px solid transparent;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 10px solid #FFF;
      }
    }
  }
  .heard_top_height {
    height: 36px;
    line-height:36px;
  }
  .heard_bottom {
    width: 100%;
    margin: 0 auto;
    height: 89px;
    background-color: #fff;
    min-width: 1080px;
    border-bottom: 1px solid #e5e5e5;
    .heard_bottom_inner {
      width: 1080px;
      margin: 0 auto;
      height: 90px;
      .heard_logo {
        float: left;
        width: 380px;
        padding-top: 9px;
        height: 81px;
        position: relative;
        .logo {
          height: 100%;
          width: 100%;
          cursor: pointer;
        }
        .logoTip {
          position: absolute;
          right: 0;
          top: 10px;
        }
      }
      .heard_nav {
        position: relative;
        float: right;
        width: 700px;
        color: #484848;
        height: 90px;
        line-height: 90px;
        font-size: 16px;
        z-index: 1001;
        .link_tender,
        .link_infoDisplay {
          position: relative;
          .tender_title_list,
          .infoDisplay_title_list {
            position: absolute;
            top: -65px;
            left: 50%;
            width: 119px;
            min-height: 240px;
            transform: translateX(-75%);
            overflow: hidden;
            z-index: 99;
            p:nth-child(1){
              border-color: #f9f9f9;
              box-shadow: 0 -1px 5px #eaeaea;
              border-color: #eee;
            }
            p {
              z-index: 1000;
              height: 40px;
              line-height: 42px;
              background: #ffffff;
              text-align: center;
              border: 1px solid #eee;
            }
          }
        }
      }
    }
  }
  
}
</style>
