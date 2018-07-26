<template>
  <div class="tender">
    <div class=" newPeople w clearfix">
      <div class="newPeople_con clearfix">
        <div class="newPeople_con_title">
          <p><a href="/newHandIndex.do">新手专享</a> 40000元额度专享福利，期限短</p>
        </div>
        <ul class="newPeople_con_obj">
          <li class="newPeople_con_obj_li" data-href="newFinanceDetail.do?id=33471">
            <ul>
              <li class="li_01">
                <p class="p_top J_newRateTip">9.5+3.5%
                <span class="newRateTipWin">
                  9.5%为借款利率，<br>3.5%为平台奖励
                </span>
                </p>
                <p class="P_bottom">历史年化</p>
              </li>
              <li class="li_02">
                <p class="p_top"><span>3</span>个月</p>
                <p class="P_bottom">投标期限</p>
              </li>
              <li class="li_03">
                <p class="p_top"><span>35480</span>元</p>
                <p class="P_bottom">可投金额</p>
              </li>
              <li class="li_04">
                <div class="progressBar">
                  <div class="out_line"><div class="inner_line" style="width: 75.81%"></div></div>
                  <span>75.81%</span>
                </div>
                <div class="invest_btn">
                  <a href="newFinanceDetail.do?id=33471" title="投标">立即抢购</a>
                </div>
              </li>
            </ul>
            <div class="line"></div>
          </li>
          <li class="newPeople_con_obj_li" data-href="newFinanceDetail.do?id=33430">
            <ul>
              <li class="li_01">
                <p class="p_top J_newRateTip">10.5+3.5%
                <span class="newRateTipWin" style="display: none;">
                  10.5%为借款利率，<br>3.5%为平台奖励
                </span>
                </p>
                <p class="P_bottom">历史年化</p>
              </li>
              <li class="li_02">
                <p class="p_top"><span>6</span>个月</p>
                <p class="P_bottom">投标期限</p>
              </li>
              <li class="li_03">
                <p class="p_top"><span>0</span>元</p>
                <p class="P_bottom">可投金额</p>
              </li>
              <li class="li_04">
                <div class="progressBar">
                  <div class="out_line"><div class="inner_line" style="width: 100%"></div></div>
                  <span>100%</span>
                </div>
                <div class="invest_btn">
                  <a href="newFinanceDetail.do?id=33430" class="over" title="还款中">还款中</a>
                </div>
              </li>
            </ul>
            <div class="line"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="list-border">
		  <div class="yys_list_tabnav">
			  <ul>
				  <router-link tag="li" to="/tender/person" class="li_5" :class="{'curli':$route.path=='/tender/person'}">
					  <label>个人专区</label>(<span id="avaibleCd1">6</span>)
				  </router-link>
				  <router-link tag="li" to="/tender/scattered" class="li_2" :class="{'curli':$route.path=='/tender/scattered'}">
					  <label>散标专区</label>(<span id="avaibleLjtc1">0</span>)
				  </router-link>
				  <router-link tag="li" to="/tender/enterprise" class="li_4" :class="{'curli':$route.path=='/tender/enterprise'}">
					  <label>企业专区</label>(<span id="avaibleLjtc1">0</span>)
				  </router-link>
				  <router-link tag="li" to="/tender/transfer" class="li_3" :class="{'curli':$route.path=='/tender/transfer'}">
				  	<label>转让专区</label>
				  </router-link>
				  <router-link tag="li" to="/tender/newbie" class="li_6" :class="{'curli':$route.path=='/tender/newbie'}">
					  <label>新手专享</label>
				  </router-link>
				  <div class="clear"></div>
			  </ul>
		  </div>
		  <div class="blist_2" id="sanbiaozhuanqu">
				<div class="top_img" style="height: 100px;">
					<img src="./images/invest_top_notice_sbjq.jpg" alt="">
				</div>
			</div>
		</div>
    <router-view />
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
.tender {
  background: #f3f3f3;
  .newPeople {
    padding-top: 25px;
  }
  .newPeople .newPeople_con {
    font-family: "microsoft yahei";
    font-size: 15px;
    color: #999999;
    background-color: #fff;
    padding-bottom: 17px;
  }
  .newPeople .newPeople_con .newPeople_con_title {
    text-align: left;
    height: 58px;
    line-height: 58px;
  }
  .newPeople .newPeople_con .newPeople_con_title p {
    padding-left: 30px;
  }
  .newPeople .newPeople_con .newPeople_con_title p a {
    color: #333333;
    font-size: 18px;
    font-weight: bold;
    padding-right: 25px;
    cursor: pointer;
  }
  .newPeople .newPeople_con .newPeople_con_obj .newPeople_con_obj_li {
    position: relative;
    float: left;
    width: 50%;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_01 {
    width: 20%;
    padding-left: 2%;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li {
    float: left;
    width: 22%;
    height: 100px;
    text-align: center;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_01 .p_top {
    color: #ff6b2d;
    font-size: 26px;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li p.J_newRateTip {
    position: relative;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li p.p_top {
    height: 63px;
    line-height: 63px;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li p.J_newRateTip .newRateTipWin {
    display: none;
    position: absolute;
    width: 100px;
    bottom: -55px;
    left: 0;
    border: 1px solid #f9c539;
    border-radius: 4px;
    background-color: #fefaee;
    color: #666666;
    z-index: 1;
    padding: 10px;
    font-size: 12px;
    line-height: 18px;
    text-align: left;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_02 .p_top {
    color: #333;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_03 .p_top {
    color: #333;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_03 .p_top span {
    color: #333;
    font-size: 22px;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_04 {
    width: 34%;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_04 .progressBar {
    height: 58px;
    padding-left: 12px;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_04 .progressBar .out_line {
    float: left;
    height: 5px;
    width: 76px;
    margin-top: 30px;
    background-color: #ddd;
    border-radius: 1px;
    overflow: hidden;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_04 .progressBar .inner_line {
    background-color: #ff8467;
    height: 5px;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_04 .progressBar span {
    float: left;
    display: block;
    padding-top: 24px;
    padding-left: 10px;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_04 .invest_btn {
    padding-left: 12px;
  }
  .newPeople .newPeople_con .newPeople_con_obj_li ul li.li_04 .invest_btn a {
    float: left;
    font-family: 'microsoft yahei';
    border: none;
    background-color: #ff5256;
    height: 32px;
    line-height: 32px;
    width: 140px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
  .newPeople .newPeople_con .newPeople_con_obj .newPeople_con_obj_li div.line {
    position: absolute;
    right: -1px;
    top: 15px;
    width: 1px;
    height: 80px;
    background-color: #f3f3f3;
  }
  .newPeople .newPeople_con .newPeople_con_obj .newPeople_con_obj_li {
    position: relative;
    float: left;
    width: 50%;
  }
  .list-border {
    border: 0 none;
    width: 1080px;
    margin: 0 auto;
    border-radius: 4px;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid #eee;
    border-top: 0 none;
    border-left: 0 none;
    border-bottom: 0 none;
  }
  .yys_list_tabnav {
    width: 1080px;
    margin: 0 auto;
    position: relative;
    background-color: #fff;
    height: 74px;
  }
  .yys_list_tabnav ul {
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: #f3f3f3;
    width: 1080px;
    border-bottom: 1px solid #f3f3f3;
  }
  .yys_list_tabnav ul li {
    height: 50px;
    line-height: 39px;
    position: relative;
    float: left;
    padding: 16px 0px 0px 5px;
    margin: 0 35px 15px 0;
    cursor: pointer;
    color: #ff5256;
    font-size: 16px;
  }
  .yys_list_tabnav ul li label {
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    color: #484848;
    margin-right: 3px;
  }
  .yys_list_tabnav ul li span {
    font-size: 14px;
    color: #ff5256;
    text-indent: 4px;
  }
  .curli {
    color: #ff5256;
    border-bottom: 3px solid #ff5256;
  }
  .curli label {
    color: #ff5256;
  }
  .yys_list_tabnav ul li.li_3 {
    width: 75px;
  }
  
}
</style>
