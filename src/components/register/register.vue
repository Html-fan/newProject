<template>
  <div class="register">
    <div class="reg_con">
      <img src="@/assets/regImg/LOGO SOC.png" alt="" class="reg_logo">
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
      <div class="reg_code">
        <el-input v-model="reg_code_con" placeholder="请输入右侧验证码" class="reg_code_con"></el-input>
        <span>1234</span>
      </div>
      <!-- <img src="@/assets/regImg/button_登录.svg" alt="" class="reg_btn" @click="reg(username,password)"> -->
      <el-button @click="reg(username,password)" >注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:"register",
  data() {
    return {
      username:"",
      password:"",
      reg_code_con:"",
    }
  },
  mounted(){
    // this.loginIndex()
  },
  methods:{
    reg(username,password){  
      console.log(username,password);
      if(username=="" || password =="" || this.reg_code_con==""){ 
        alert("用户名、密码、验证码不能为空")
      }else if(!/^1\d{10}$/.test(username)){
        alert("请输入正确的手机号")
      }else{
        this.axios({
          url:"http://jx.xuzhixiang.top/ap/api/reg.php",
          method:"get",
          params:{
            username,
            password,
          }
        }).then((res)=>{
            if(res.data.code == 0){
              alert(res.data.msg)
            }else{
              alert(res.data.msg+"即将跳转到登陆页面")
              this.$router.push({
                path:'/login',
              })
            } 
        }).catch((err)=>{
          alert('网络故障，请稍候重试')
        })
      }
    }

  //   reg(a,b){
  //   if(a==""|| b == ""){
  //     alert("不能为空")
  //   }else{
  //     this.$router.push({
  //       path:'/index'
  //     })
  //   }
  // },
  // loginIndex:function(){
  //   let _this = this
  //  _this.axios({
  //     url:"http://jx.xuzhixiang.top/ap/api/reg.php",
  //     method:"get",
  //     params:{
  //       username:_this.username,
  //       password:_this.password
  //     }
  //   }).then((res)=>{
  //     console.log(res);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }
  },
  
}
</script>

<style scoped>
  .register{
    width: 100%;
    height: 100%;
    background-image: url("../../assets/regImg/BG.jpg");
    background-repeat: no-repeat;
    position: fixed;
    background-size: 19.2rem 10.8rem; 
  }
  .reg_con{
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
  .reg_logo{
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

  .reg_code{
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
  .reg_code_con{
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
  .el-button{
    width: 3.04rem;
    height: .48rem;
    background: blue;
    color: #FFFFFF;
  }
</style>