<template>
  <div class="baseHeader">
    <img src="@/assets/indexImg/logops.png" alt="" class="ind_logo">
    <div class="ind_list">
      <ul @click="radioBtn($event)">
        <li  :data-index = 0 :class="{'active':cuurId === 0}">监控中心</li>
        <li  :data-index = 1 :class="{'active':cuurId === 1}">处置中心</li>
        <li  :data-index = 2  :class="{'active':cuurId === 2}" class="ind_li3">
          分析中心
          <div class="icon"></div>
        </li>
        <li  :data-index = 3 :class="{'active':cuurId === 3}">资产中心</li>
        <li  :data-index = 4 :class="{'active':cuurId === 4}">配置中心</li>
        <li  :data-index = 5 :class="{'active':cuurId === 5}">全局导航</li>
      </ul>
      <div class="ind_user">
        <img src="@/assets/indexImg/wode_mw (1).png" alt="" class="icon_wode">
        <span>{{this.$route.query.u}}</span>
        <div class="icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"baseHeader",
  data() {
    return {
      cuurId:0,
    }
  },
  methods: {
    radioBtn(e){
      
      if(e.target.nodeName.toLowerCase() === 'li'){
        const index = parseInt(e.target.dataset.index)
        this.cuurId = index
        
      }  
      }
      
    },
  //   doStyle(index){
  //   console.log(index);
  // }
 
  
}
</script>

<style  scoped>
  .baseHeader{
    width: 100%;
    height: .52rem;
    background: #0F244D;
    display: flex;
  }
  .ind_logo{
    width: 2rem;
    height: .52rem;
  }
  .ind_list{
    width: 17.2rem;
    height: .52rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul{
    display: flex;
  }
  .ind_li3{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  ul>li{
    width: 1.64rem;
    height: .52rem;
    font-family: PingFangSC-Regular;
    font-size: .18rem;
    color: #F5FCFF;
    letter-spacing: 0;
    text-align: center;
    line-height: .52rem;
    list-style: none;
    cursor: pointer;
  }
  .icon{
    width: 0;
    height: 0;
    border-top: 0.08rem solid #fff;
    border-right: .08rem solid  transparent; 
    border-left: .08rem solid  transparent;
    margin-left: 3px;
    
  }
  .ind_user{
    height: .52rem;
    margin-right: .32rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .icon_wode{
    width: .24rem;
    height: .24rem;
    margin-right: 0.1rem;
    background: #00AAFF;
    border-radius: 50%;
  }
  .ind_user>span{
    font-family: PingFangSC-Regular;
    font-size: .14rem;
    color: #F5FCFF;
    letter-spacing: 0;
    line-height: .14rem;
  }
  ul>>>.active{
     background-image: linear-gradient(139deg, #00AAFF 0%, #198CFF 100%);
  }
</style>>
  
