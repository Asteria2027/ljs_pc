<template>
  <div class="tender_person">
    <div class="newyys_list newyys_list1" id="newyys">
      <div class="uf-touzi" id="sbpx">
        <label>排序方式：<a class="active mrpx">默认排序 </a><a class="nhll">历史年化<b></b></a><a class="tzqy">投标期限<b></b></a><a class="last tbjd">投标进度<b></b></a></label>
        <span>支持转让，100元起，等额本息/按月付息，到期还本</span>
      </div>
      <ul id="newsan" style="padding-top: 0px;">			
        <li href="financeDetail.do?id=28073" class="able_click" v-for="(item,index) in list" :key="index">
          <div class="new_index_yysbox">
            <div class="new_index_bi_title new_index_bi_title1">
              <a title="沈阳陈**先生用于耐用消费品" href="financeDetail.do?id=28073">沈阳陈**先生用于耐用消费品<span>可转</span>
                </a>
            </div>
            <div class="new_index_bi_a">
              <div class="new_left">
                <p class="font_color_a"><span class="new_font26">12.8</span><span>%</span></p>
                <p class="font_color_b">历史年化</p>
              </div>
              <div class="new_right">
                <p><span class="new_font26">36</span><span>个月</span></p>
                <p class="font_color_b">期限</p>
              </div>
            </div>
            <div class="new_yys_proessbox">
              <p class="new_yys_proessbg"></p>
              <p class="new_yys_proessbar new_yys_proessbar1" style="width:100%"></p>
              <span>投标进度</span>
            </div>
            <div class="new_yysPr">
              <label> 开放额度<span>:</span></label>
              <span class="heise">￥7,740</span>
              <span class="debx"><p>等额本息</p><span>还款方式</span></span>
              <div class="jinduzhi"><span class="new_yysprright">100%</span></div>
            </div>
            <div class="new_yys_btnjiru new_yys_btnjiru1">
              <a>还款中</a>
            </div>
          </div>
        </li>
				<div class="clear"></div>
			</ul>
		</div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data () {
      return {
        list:[1,2,3,4,5,6]
      }
    },
  }
</script>

<style lang='less' scope>
.tender_person {
  .newyys_list {
    width: 1080px;
    margin: 0 auto;
    background-color: #ffffff;
    border-left: 0;
    border-right: 0;
  }
  #newyys .uf-touzi {
    border-bottom: 1px solid #f2f2f2;
    padding: 0 70px 0 30px;
    width: 980px;
    height: 70px;
    line-height: 72px;
    color: #767676;
    width: 1040px;
    margin: 0 auto;
    font-size: 14px;
  }
  .uf-touzi label {
    padding-left: 4px;
    float: left;
  }
  .uf-touzi label a.active {
    color: #fff;
    background-color: #ff6f4e;
    border-radius: 4px;
    border-color: #ff6f4e;
  }
  .uf-touzi label a {
    padding: 0px 6px;
    margin: 0 8px;
    color: #767676;
    cursor: pointer;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
  .uf-touzi span {
    float: right;
    color: #999;
    font-size: 14px;
  }
  #newyys #newsan {
    padding: 0 0px;
  }
  .newyys_list ul {
    width: 1040px;
  }
  #newyys ul li {
    float: none;
    width: 1080px;
    padding: 0;
    height: 160px;
    position: relative;
    border: 0;
    border-bottom: 1px solid #f2f2f2;
    margin: 0;
    cursor: pointer;
  } 
  #newyys .new_index_yysbox {
    height: 99px;
    width: 1020px;
    padding-top: 0px;
  }
  .new_index_bi_title {
    position: relative;
  }
  .new_index_bi_title1 {
    color: #a4a4a4;
  }
  .new_index_bi_title {
    font-size: 16px;
    text-align: center;
    color: #484848;
    height: 48px;
  }
  #newyys .able_click .new_index_yysbox .new_index_bi_title a{
    color: #2d2d2d;
    font-size: 15px;
    display: block;
    width: 100%;
    text-align: left;
    position: absolute;
    height: auto;
    left: 0px;
    top: 22px;
  }
  #newyys .new_index_bi_a {
    background: none;
    height: 50px;
    margin-top: 10px;
    width: 100%;
    overflow: hidden;
  }
  #newyys .new_index_yysbox {
    height: 99px;
    width: 1020px;
    padding-top: 0px;
    margin: 0 auto;
  }
  #newyys .new_index_yysbox .new_index_bi_a .new_left {
    background: none;
    position: absolute;
    left: 30px;
    top: 70px;
    width: 175px;
    height: 60px;
  }
  .new_index_bi_a .new_left {
    float: left;
    width: 48%;
  }
  #newyys .new_index_yysbox .new_index_bi_a .new_left .font_color_a {
    position: relative;
    text-align: left;
  }
  .font_color_a {
    color: #e25353;
  }
  #newyys .new_index_yysbox .new_index_bi_a .new_left .font_color_b {
    color: #a4a4a4;
    position: absolute;
    top: 43px;
    left: 0px;
    font-size: 14px;
  }
  #newyys .new_index_yysbox .new_index_bi_a .new_right {
    width: 108px;
    height: 60px;
    position: absolute;
    left: 195px;
    top: 70px;
    float: right;
    width: 48%;
  }
  #newyys .able_click .new_index_yysbox .new_index_bi_a .new_right .new_font26 {
    color: #2d2d2d;
    font-size: 28px;
    font-family: "Helvetica";
    margin-left: 5px;
  }
  #newyys .able_click .new_index_yysbox .new_index_bi_a .new_left .new_font26 {
    font-size: 32px;
    font-family: "Hiragino Sans GB","Helvetica Neue",Helvetica,tahoma,arial,Verdana,sans-serif,"WenQuanYi Micro Hei","\5B8B\4F53";
  }
  #newyys .able_click .new_index_yysbox .new_index_bi_a .new_right p span {
    font-size: 15px;
    color: #2d2d2d;
    margin-left: 5px;
  }
  #newyys .new_index_yysbox .new_yys_proessbox {
    display: block;
    position: absolute;
    left: 553px;
    top: 75px;
    width: 90px;
    margin: 0px;
  }
  #newyys .new_index_yysbox .new_yys_proessbox .new_yys_proessbg {
    width: 90px;
    height: 5px;
    border-radius: 4px;
  }
  #newyys .new_index_yysbox .new_yys_proessbox .new_yys_proessbar1{
    width: 50px;
    height: 5px;
    border-radius: 4px;
    background-color: #63b97c;
  }
  #newyys .new_index_yysbox .new_yys_proessbox span {
    display: block;
    margin-top: 38px;
    font-size: 14px;
    color: #a4a4a4;
  }
  .new_yysPr {
    font-size: 12px;
    color: #a4a4a4;
    padding-top: 30px;
    overflow: hidden;
    margin-left: 20px;
    margin-right: 20px;
  }
  .able_click .new_index_yysbox .new_yysPr label {
    color: #a4a4a4;
    position: absolute;
    top: 113px;
    font-size: 14px;
    left: 725px;
    float: left;
  }
  #newyys .able_click .new_index_yysbox .new_yysPr .heise {
    position: absolute;
    left: 720px;
    top: 67px;
    color: #2d2d2d;
    font-size: 18px;
    font-weight: normal;
  }
  #newyys .new_index_yysbox .new_yysPr .debx {
    position: absolute;
    left: 335px;
    top: 67px;
    color: #999;
    font-size: 14px;
    display: block;
    text-align: center;
  }
  #newyys .able_click .new_index_yysbox .new_yysPr .debx p {
    color: #2d2d2d;
    padding-top: 12px;
  }
  #newyys .new_index_yysbox .new_yysPr .debx span {
    font-size: 14px;
    color: #a4a4a4;
    position: absolute;
    left: 0px;
    top: 43px;
  }
  #newyys .new_index_yysbox .new_yysPr .jinduzhi {
    position: absolute;
    left: 610px;
    top: 124px;
    color: #ff5256;
    width: 100px;
    height: 20px;
  }
  #newyys .able_click .new_index_yysbox .new_yysPr .new_yysprright {
    color: #999;
    float: left;
  }
  .newyys_list1 .new_yys_btnjiru {
    margin-left: 12px;
    margin-top: 15px;
    width: 220px;
    height: 34px;
  }
  #newyys .new_index_yysbox .new_yys_btnjiru a {
    width: 110px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    left: 890px;
    top: 60px;
    background-color: #999;
    border: 1px solid #999;
    color: #fff;
    display: block;
    text-align: center;
    background: #ff5256;
    border-radius: 4px;
  }
}
 
</style>
