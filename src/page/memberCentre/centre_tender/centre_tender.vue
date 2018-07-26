<template>
  <div class="centre_tender">
    <div id="user_tzjl">
	    <div class="admin_b_conmonTitle">
		    我的投标
	    </div>
	    <div class="tzjl_cont">
        <div class="t_tap">
          <ul class="userCenter_common_ul">
            <li onclick="goUrl('queryInvestInList.do')">投标中<i class="c_org">(0)</i></li>
            <li onclick="goUrl('queryInvestPositionList.do')" class="curr">持有中 <i class="c_org">(0)</i></li>
            <li onclick="goUrl('queryInvestCompleteList.do')">已结清 <i class="c_org">(0)</i></li>
          </ul>
        </div>
        <div class="t_link">
          <a class="curr">全部</a> 
          <a>企业专区</a>
          <a>新手标</a> 
          <a>个人标</a>
          <a>散标</a> 
          <a>转让标</a> 
          <span class="filter_term">
            <label>更多筛选条件</label>
            <i></i>
          </span>
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
.centre_tender {
  #user_tzjl {
    width: 792px;
    overflow: hidden;
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
  #user_tzjl .tzjl_cont .t_tap {
    width: 100%;
    position: relative;
  }
  .userCenter_common_ul {
    height: 40px;
    width: 100%;
    background-color: #f2f2f2;
  }
  #user_tzjl .tzjl_cont .t_tap ul li {
    float: left;
  }
  .userCenter_common_ul li {
    float: left;
    height: 40px;
    line-height: 40px;
    width: 150px;
    text-align: center;
    cursor: pointer;
  }
  .c_org {
    color: #ff6b2d;
  }
  .userCenter_common_ul li.curr {
    background-color: #ff5256;
    color: #fff;
  }
  .userCenter_common_ul li.curr i {
    color: #fff;
  }
  #user_tzjl .tzjl_cont .t_link {
    padding: 20px;
    padding-right: 0;
  }
  #user_tzjl .tzjl_cont .t_link a.curr {
    background: #ff5256;
    color: #fff;
  }
  #user_tzjl .tzjl_cont .t_link a {
    font-size: 14px;
    color: #767676;
    padding: 5px 15px;
    border-radius: 5px;
    margin-right: 5px;
  }
  #user_tzjl .tzjl_cont .t_link .filter_term {
    float: right;
    color: #484848;
    cursor: pointer;
  }
}

</style>
