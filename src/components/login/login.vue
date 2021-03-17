<template>
  <div class="login">
    <div class="log_con">
      <img src="@/assets/regImg/LOGO SOC.png" alt="" class="log_logo">
      <el-input v-model="username" placeholder="请输入用户名" class="username">
        <i slot="prefix">
          <img src="@/assets/regImg/icon_用户名.svg" alt="">           
        </i>
      </el-input>
      <el-input v-model="password" placeholder="请输入密码" class="password">
        <i slot="prefix">
          <img src="@/assets/regImg/icon_密码.svg" alt="">           
        </i>
      </el-input>
      <div class="log_code">
        <el-input v-model="log_code_con" placeholder="请输入右侧验证码" class="log_code_con"></el-input>
        <span>1234</span>
      </div>
      <img src="@/assets/regImg/button_登录.svg" alt="" class="log_btn" @click="log(username,password)">
    </div>
  </div>
</template>

<script>
export default {
  name:"login",
  data() {
    return {
      username:"",
      password:"",
      log_code_con:"",
    }
  },
  mounted(){
  },
  methods:{

    log(u,p){
    if(u==""|| p == "" ||this.log_code_con == ""){
      alert("用户名、密码、验证码不能为空不能为空")
    }else if(!/^1\d{10}$/.test(u)){
      alert("请输入正确的手机号")
    }else{
      this.axios({
        method:"get",
        url:"http://jx.xuzhixiang.top/ap/api/login.php",
        params:{
          username:u,
          password:p
        }
      }).then((res)=>{
        console.log(res.data);
        if(res.data.code == 1){
          alert(res.data.msg)
        this.$router.push({
          path:"/index",
          query:{
            u,
            p
          }
        })}else{
          alert(res.data.msg)
        }
      })
      
    }
  },
 
  },
  
}
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    background-image: url("../../assets/regImg/BG.jpg");
    background-repeat: no-repeat;
    position: fixed;
    background-size: 19.2rem 10.8rem; 
  }
  .log_con{
    font-size: 0;
    width: 3.68rem;
    height: 4.7rem;
    background: #FFFFFF;
    border-radius: 2px;
    text-align: center;
    position: absolute;
    right: 1.72rem;
    top: 3.06rem; 
  }
  .log_logo{
    width: 2.04rem;
    height: .7rem;
     margin-top: .48rem;
    margin-bottom: .48rem;
    /* display: block; */
  }
  .el-input>>>.el-input__inner{
    height: .48rem;
    font-size: 0.14rem;
    font-family: PingFangSC-Regular;
    color: #99A6BF;
    line-height: .14rem;
  }
  .log_btn{
    width: 3.04rem;
  }
  .log_code{
    width: 3.04rem;
    height: .48rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: .32rem;
  }
  .username{
    width: 3.04rem;
    margin-bottom: .16rem; 
  }
  .password{
    width: 3.04rem;
    margin-bottom: .16rem;
  }
  .log_code_con{
    width: 2.13rem;
  }
  span{
    width: .78rem;
    height: .276rem;
    background: #F2F2F2;
    font-family: PTSerif-Caption;
    font-size: .192rem;
    line-height:.276rem;
  }
  i>>>img{
    width: 0.24rem;
    height: 0.24rem;
    margin-top: 0.12rem;
  }
</style>