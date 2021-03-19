<template>
  <div class="popupBox">
      <ul>
        <li v-for = "(item,i) in popList" :key="i"   @click="isList">
          <div class="topMuem">
            <img :src="item.icon" alt="" srcset="">
            <span>{{item.name}}</span>
          </div>
          <div class="list">
            <ol>
              <li v-for="(list,index) in item.listArr" :key="index">{{list}}</li>
            </ol>
          </div>
        </li>
      </ul>
      
      
  </div>
</template>

<script>
  export default {
    
    name:'popupBox',
    data() {
      return {
         popList:[
          {
            icon:require("@/assets/indexImg/icon-监控中心.svg"),
            name:"监控中心",
            listArr:[
              "综合安全态势",
              "安全事件态势",
              "脆弱性态势",
              "网络攻击态势",
              "终端安全态势",
              "主机安全态势",
              "员工风险态势",
            ]

            },
          {
            icon:require("@/assets/indexImg/icon-处置中心.svg"),
            name:"处置中心",
            listArr:[
              "综合安全态势",
              "安全事件态势",
              "脆弱性态势",
              "网络攻击态势",
              "终端安全态势",
              "主机安全态势",
              "员工风险态势",
            ]
            },
          {
            icon:require("@/assets/indexImg/icon-处置中心.svg"),
            name:"分析中心",
            listArr:[
              "综合安全态势",
              "安全事件态势",
              "脆弱性态势",
              "网络攻击态势",
              "终端安全态势",
              "主机安全态势",
              "员工风险态势",
            ]
          },
          {
            icon:require("@/assets/indexImg/icon-资产中心.svg"),
            name:"资产中心",
            listArr:[
              "综合安全态势",
              "安全事件态势",
              "脆弱性态势",
              "网络攻击态势",
              "终端安全态势",
              "主机安全态势",
              "员工风险态势",
            ]

            },
          {
            icon:require("@/assets/indexImg/icon-配置中心.svg"),
            name:"配置中心",
            listArr:[
              "综合安全态势",
              "安全事件态势",
              "脆弱性态势",
              "网络攻击态势",
              "终端安全态势",
              "主机安全态势",
              "员工风险态势",
            ]
            },
      ],
     
      }
    },
     methods: {
        isList(){
          
            
         
        }
      }
  }
</script>

<style scoped>
  .popupBox{
    width: 14rem;
    height: 6.6rem;
    background: #112A59;
    /* font-size: 0; */
    margin-left: 2rem;
  }
  .popupBox>ul{
    display: flex;
    margin-left: 1.18rem;
    justify-content: space-around;
    width: 11.92rem;
    
  }
  .popupBox>ul>li{
    list-style: none;
    margin-top: .56rem;
    
  }
  .popupBox>ul>li>.topMuem{
    display: flex;
  }
  .popupBox>ul>li>.topMuem>img{
    height: .16rem;
    width: .16rem;
  }
  .popupBox>ul>li>.topMuem>span{
    display: block;
    height: .3rem;
    width: 1.6rem;
    font-family: PingFangSC-Medium;
    font-size: .18rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: .18rem;
    margin-left: 8px;
    border-bottom:1px solid #405580;
  }
  .list>ol{
    margin-top:.24rem;
  }
  .list>ol>li{
    margin-left: .24rem;
    list-style: none;
    width: 1.8rem;
    font-family: PingFangSC-Regular;
    font-size: .16rem;
    color: #F5FCFF;
    line-height: .24rem;
  }
</style>