<template>
  <div class="infoDisplay">
    <div id="infoDis" class="infoDis">
      <div style="height: 47px">
        <div class="infoDis_bar" id="infoDis_bar">
          <ul>
            <li v-for="(item,index) in infoTitle">
              <router-link :to="item.path">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="infoDis_BannerImg"></div>
    <router-view />
  </div>
</template>

<script>

  const infoTitles = [
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

  export default {
    components: {

    },
    data () {
      return {
        infoTitle:infoTitles
      }
    },
  }
</script>

<style lang='less' scope>
 .infoDisplay {
   .infoDis .infoDis_bar {
    height: 47px;
    background-color: #d3333b;
    z-index: 8;
  }
  .infoDis .infoDis_bar ul {
    width: 1080px;
    margin: 0 auto;
  }
  .infoDis .infoDis_bar ul li {
    float: left;
    width: 120px;
    line-height: 47px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
  }
  .infoDis .infoDis_bar ul li a {
    color: #fff;
    display: block;
    width: 100%;
    height: 100%;
  }
  .infoDis .infoDis_bar ul li a.router-link-active {
    background-color: #c8000b;
  }
  .infoDis_BannerImg {
    height: 345px;
    margin-top: 5px;
    background: url('./images/info_menu_bg.jpg') center center no-repeat;
    overflow: hidden;
    position: relative;
  }
 }
</style>
