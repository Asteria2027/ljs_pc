<template>
  <div class="centre_recharge">
    <div class="admin_b">
      <div class="admin_b_conmonTitle">
        充值提现
      </div>
      <div class="admin_cztx_x2">
        <div class="div_box div_recharge">
          <p>累计充值 	<span>0.00 元</span></p>
          <a class="btn" id="rechargeBtn" href="javascript:void();">充值</a>
        </div>
		    <div class="div_box div_withdraw">
			    <p>累计提现 	<span>0.00元</span></p>
			    <a class="btn" id="withdrawBtn" href="javascript:void();">提现</a>
		    </div>
	    </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data () {
      return {

      }
    },
  }
</script>

<style lang='less' scope>
.centre_recharge {
  .admin_b {
    width: 792px;
    margin: 0 auto;
    overflow: hidden;
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
  .admin_cztx_x2 {
    float: left;
    width: 792px;
    height: 155px;
    border: 1px solid #d0d5d9;
    border-radius: 5px;
  }
  .admin_cztx_x2 .div_box {
    float: left;
    width: 346px;
    height: 150px;
    padding-left: 50px;
    font-size: 16px;
  }
  .admin_cztx_x2 .div_box p {
    color: #222222;
    height: 70px;
    line-height: 70px;
    padding-top: 15px;
  }
  .admin_cztx_x2 .div_box p span {
    padding: 0 10px;
    color: #fd7602;
    font-weight: bold;
  }
  .admin_cztx_x2 .div_box.div_recharge a.btn {
    background-color: #fe5b58;
  }
  .admin_cztx_x2 .div_box a.btn {
    padding: 5px 30px;
    border-radius: 4px;
    color: #fff;
  }
  .admin_cztx_x2 .div_box.div_withdraw a.btn {
    background-color: #ffa10d;
  }
}
 
</style>
