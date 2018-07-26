<template>
  <div class="home_swiper">
    <div id="bana">
      <div class="feat-area">
        <div class="slider-wrap">
          <div class="swiper-container">
            <ul class="swiper-wrapper">
              <li class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
                <img :src="'https://www.uf-club.com/'+item.imgUrl" alt="">
              </li>
            </ul>
          </div>
          <div class="swiper-pagination">
          </div>
        </div>
      </div>
      <div class="user_login" >
        <div class="user_login_box" v-if="!userInfo">
          <div class="user_loginalert">
            <p class="userlogin_lhsy">历史年化高达</p>
            <p class="userlogin_linu"><span class="fw">12.8</span>%</p>
            <p class="LX_text"><a href="javascript:void(0);">网贷有风险，出借需谨慎</a></p>
            <p class="user_lgon_btnrg"><router-link to="register">注册领取668红包</router-link></p>
            <p id="user_ljdl">已有账号？<router-link to="/login"><span style="color:#666">立即登录</span></router-link></p>
          </div>
        </div>
        <div class="user_login_box" v-else>
          <div class="user_loginalert">
            <img class="peoplePic" src="./head-banner_manpic.png" alt="">
            <p class="userlogin_lhsy userlogin_wnf" id="welcome_userlogin">你好，{{userInfo.userName}}，欢迎来到联金所</p>
            <p class="login_logbtn">
              <router-link to="/memberCentre" class="lgonbtn_hyzx lgonbtn_hyzx1">我的账户</router-link>
            </p>
            <div class="box_bottom">
              <p class="noUse_welfare"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { getIndexBanner } from '@/api/api.js';
import { mapState } from 'vuex';

export default {
  components: {},
  data() {
    return {
      titles:[],//轮播图标题
      swiperList:[],
      homeSwiper:null,
    };
  },
  mounted(){
    this._getIndexBanner();
    this.homeSwiper = new Swiper('.swiper-container', {
        autoplay: 4000,
        autoplayDisableOnInteraction : false,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: (swiper, index, className) => {
          return '<span class="' + className + '">' + this.titles[index] + '</span>';
        }
    });
  },
  computed: {
    ...mapState([
      'userInfo'
    ]),
  },
  methods:{
    _getIndexBanner(){
      getIndexBanner().then(res => {
        if(res.data.code==1){
          this.swiperList = res.data.data;
          this.swiperList.forEach((val, index)=>{
            this.titles.push(val.title)
          });
          setTimeout(()=>{
            this.homeSwiper.update();
          },200)
        }
      })
    }
  }
};
</script>

<style lang='less' scope>

.home_swiper {
  #bana {
    width: 100%;
    height: 380px;
    background: #bee1f5;
    overflow: hidden;
    position: relative;
    .feat-area {
      width: 100%;
      height: 382px;
      position: relative;
      overflow: hidden;
      min-width: 1080px;
      margin: 0 auto;
      li {
        height: 380px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .swiper-pagination {
        position: absolute;
        bottom: 44px;
        min-width: 1080px;
        width: 1080px;
        height: 50px;
        margin: 0 auto;
        position: relative;
        span {
          width: 130px;
          height: 37px;
          line-height: 35px;
          font-size: 13px;
          text-align: center;
          cursor: pointer;
          border-radius: 4px;
          color: #fff;
          border: 1px solid rgba(243,243,243,.5);
          // padding: 5px 10px;
          margin-top: 7px;
          background: url('./head-banner_pinpu.png');
          transition: all .2s;
        }
        .swiper-pagination-bullet {
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
           opacity: 1;
           transform: scaleY(1.2);
        }
      }
    }
    .user_login {
      width: 1080px;
      height: 380px;
      position: relative;
      margin: 0 auto;
    }
    .user_login_box {
      width: 258px;
      height: 258px;
      position: absolute;
      top: -326px;
      right: 0;
      z-index: 10;
    }
    .user_loginalert {
      width: 272px;
      height: 262px;
      background-color: #FFF;
      position: absolute;
      left: 4px;
      top: -15px;
      border-radius: 4px;
    }
    .user_loginalert .peoplePic {
      margin: 20px 100px 18px;
    }
    #welcome_userlogin {
      margin-top: 0px;
    }
    .user_loginalert p {
      text-align: center;
    }
    .login_logbtn {
      width: 100%;
      text-align: center;
    }
    .login_logbtn {
      width: 180px;
      margin: 0 auto;
    }
    .login_logbtn a {
      display: inline-block;
      width: 208px;
      float: none;
      border-radius: 4px;
      margin-top: 20px;
    }
    .lgonbtn_hyzx {
      background-color: #ff5256;
      height: 33px;
      line-height: 33px;
      border: 1px solid #ff5256;
      width: 190px;
      font-size: 16px;
      color: #FFF;
    }
    .user_loginalert .box_bottom {
      position: relative;
      height: 80px;
      font-size: 13px;
    }
    .user_loginalert .box_bottom .noUse_welfare {
      padding: 18px 0 8px;
      color: #535353;
    }
    .user_loginalert p {
      text-align: center;
    }
    .user_loginalert p {
      text-align: center;
    }
    .userlogin_lhsy {
      font-size: 18px;
      color: #666;
      margin-top: 30px;
    }
    .userlogin_linu {
      line-height: 66px;
      color: #fd5354;
      font-size: 50px;
    }
    .userlogin_linu .fw, .userlogin_linu strong {
      font-weight: 400;
      font-family: arial;
    }
    .LX_text {
      margin-bottom: 18px;
    }
    .LX_text a {
      font-size: 14px;
      color: #999;
    }
    .user_lgon_btnrg {
      text-align: center;
      color: #fff;
      font-size: 18px;
      border-radius: 2px;
      margin-bottom: 15px;
    }
    .user_lgon_btnrg a {
      display: block;
      color: #fff;
      background-color: #ff5256;
      border-radius: 4px;
      font-size: 16px;
      width: 192px;
      height: 36px;
      line-height: 36px;
      margin: 0 auto;
    }
    #user_ljdl {
      text-align: center;
      width: 182px;
      margin: 0 auto;
      font-size: 15px;
      color: #999;
    }
    #user_ljdl span {
      cursor: pointer;
      font-size: 15px;
    }
  }
}

</style>
