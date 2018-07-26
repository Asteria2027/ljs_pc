<template>
  <div class="ljs_footer">
    <div class="newFooter" >
      <div class="newFooter_con">
        <div class="newFooter_con_top clearfix">
          <div class="item left">
              <div class="item_title left_title">
                  <span>关于我们</span>
                  <span>帮助中心</span>
              </div>
              <div class="left_detail">
                  <ul>
                      <li><a href="/getInfoDisclosure.do">公司介绍</a></li>
                      <li><a href="/yybg_list.do?id=runData">运营数据</a></li>
                      <li><a href="/riskManagement.do">风险保障</a></li>
                      <li><a href="/getInfoDisclosure.do?id=aboutWe_contactUs">联系我们</a></li>
                  </ul>
                  <ul>
                      <li><a href="/guideForNewbie.do">新手指引</a></li>
                      <li><a href="/gl/">理财攻略</a></li>
                      <li><a href="/showMap.do">网站地图</a></li>
                      <li><a href="/banner5Company.do">风险提示</a></li>
                  </ul>
              </div>
          </div>
          <div class="item center">
              <div class="item_title center_title">
                  <span>关注我们</span>
              </div>
              <div class="center_detail">
                  <ul>
                      <li>
                          <img src="./wechat_donwewm.jpg" alt="">
                          <p>微信订阅号<br>联金所</p>
                      </li>
                      <li>
                          <img src="./wechat_donwewm_fwh.jpg?2018.6.27" alt="">
                          <p>微信服务号<br>联金助手</p>
                      </li>
                      <li>
                          <img src="./donw_app_ewm.jpg?2018.7.8" alt="">
                          <p>手机APP下载<br>联金所</p>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="item right">
            <div class="item_title right_title">
                <span>客服热线</span>
            </div>
            <div class="right_detail">
                <div class="right_detail_phone">
                  <p>400-867-9888</p>
                  <p>0755-88607525</p>
                </div>
                <div class="right_detail_time">
                  <p>服务时间：</p>
                  <p>周一~周五 09:00-20:00</p>
                  <p>周六~周日 09:00-12:00 13:30-18:00</p>
                </div>
                <div class="right_detail_contact">
                  <ul style="overflow:hidden;">
                    <li style="position: relative; cursor: pointer;">
                      <a id="onlineService">
                        <img class="disable" src="./kefu_01.png" alt="">
                        <!-- <img class="cur" src="./kefu_02.png" alt=""> -->
                        在线客服
                      </a>
                    </li>
                    <li style="position: relative; cursor: pointer;">
                      <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=53df0d98cfb9f6d868c1c31f0ebac6a64691b82746e26df4c628426557f62662">
                        <img class="disable" src="./qun_01.png" alt="">
                        <!-- <img class="cur" src="./qun_02.png" alt=""> -->
                        加入QQ群
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          </div>
          <div class="newFooter_con_bottom">
            <p>
              深圳前海联金所金融信息服务有限公司  <span>粤ICP备14046625号</span>
            </p>
            <p>
              网贷有风险，出借需谨慎；期待回报不等于实际收益
            </p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      
    };
  },
  methods:{
    test(){
      alert(1)
    }
  }
};
</script>

<style lang='less' scope>
.ljs_footer {
  width: 100%;
  .newFooter {
    background-color: #dddddd;
    color: #666;
  }
  .newFooter .newFooter_con {
    width: 1080px;
    margin: 0 auto;
  }
  .newFooter .newFooter_con .newFooter_con_top {
    padding-bottom: 18px;
  }
  .newFooter .newFooter_con .newFooter_con_top .left {
    width: 313px;
  }
  .newFooter .newFooter_con .newFooter_con_top .item {
    float: left;
  }
  .newFooter * {
    margin: 0px;
    padding: 0px;
  }
  .newFooter .newFooter_con .newFooter_con_top .item .item_title {
    color: #222;
    font-size: 16px;
    line-height: 24px;
    padding: 50px 0 14px 0;
    border-bottom: 1px solid #cfcfcf;
  }
  .newFooter .newFooter_con .newFooter_con_top .left .left_title span:first-child {
    padding-right: 80px;
  }
  .newFooter .newFooter_con .newFooter_con_top .left .left_detail ul:first-child {
    padding-right: 100px;
  }
  .newFooter .newFooter_con .newFooter_con_top .left .left_detail ul {
    padding: 9px 0 9px;
    float: left;
    font-size: 12px;
    line-height: 30px;
  }
  .newFooter .newFooter_con .newFooter_con_top .left .left_detail ul li a {
    color: #666;
  }
  .newFooter .newFooter_con .newFooter_con_top .center {
    width: 314px;
    margin: 0 126px;
  }
  .newFooter .newFooter_con .newFooter_con_top .item .item_title {
    color: #222;
    font-size: 16px;
    line-height: 24px;
    padding: 50px 0 14px 0;
    border-bottom: 1px solid #cfcfcf;
  }
  .newFooter .newFooter_con .newFooter_con_top .center .center_detail ul {
    padding-top: 18px;
  }
  .newFooter .newFooter_con .newFooter_con_top .center .center_detail ul li {
    float: left;
    text-align: center;
  }
  .newFooter .newFooter_con .newFooter_con_top .center .center_detail ul li img {
    display: block;
    width: 90px;
    height: 90px;
  }
  .newFooter .newFooter_con .newFooter_con_top .center .center_detail li:nth-child(2) {
    margin: 0 21px;
  }
  .newFooter .newFooter_con .newFooter_con_top .center .center_detail ul li p {
    padding-top: 7px;
    line-height: 20px;
  }
  .newFooter .newFooter_con .newFooter_con_top .item {
    float: left;
  }
  .newFooter .newFooter_con .newFooter_con_top .item .item_title {
    color: #222;
    font-size: 16px;
    line-height: 24px;
    padding: 50px 0 14px 0;
    border-bottom: 1px solid #cfcfcf;
  }
  .newFooter .newFooter_con .newFooter_con_top .right .right_detail .right_detail_phone {
    padding-top: 13px;
    color: #222;
  }
  .newFooter .newFooter_con .newFooter_con_top .right .right_detail .right_detail_phone p:first-child {
    font-size: 25px;
    line-height: 28px;
  }
  .newFooter .newFooter_con .newFooter_con_top .right .right_detail .right_detail_phone p:last-child {
    font-size: 15px;
    line-height: 22px;
  }
  .newFooter .newFooter_con .newFooter_con_top .right .right_detail .right_detail_time {
    padding: 13px 0;
  }
  .newFooter .newFooter_con .newFooter_con_top .right .right_detail .right_detail_contact ul li {
    float: left;
  }
  .newFooter .newFooter_con .newFooter_con_top .right .right_detail .right_detail_contact ul li a {
    display: block;
    cursor: pointer;
    width: 84px;
    height: 28px;
    margin-right: 14px;
    line-height: 28px;
    border-radius: 6px;
    border: 1px solid #cdcdcd;
  }
  .newFooter .newFooter_con .newFooter_con_top .right .right_detail .right_detail_contact ul li a img {
    width: 16px;
    vertical-align: middle;
    padding-left: 6px;
  }
  .newFooter .newFooter_con .newFooter_con_top {
    padding-bottom: 18px;
  }
  .newFooter .newFooter_con .newFooter_con_bottom {
    height: 50px;
    padding-top: 17px;
    border-top: 1px solid #cfcfcf;
    font-size: 12px;
  }
  .newFooter .newFooter_con .newFooter_con_bottom p:first-child {
    float: left;
  }
  .newFooter .newFooter_con .newFooter_con_bottom p:last-child {
    float: right;
  }
}
</style>
