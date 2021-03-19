<template>
  <div class="indexBox">
    <baseHeader></baseHeader>
    <div class="popBox"><popupBox></popupBox></div>
  </div>
</template>
<script>
import baseHeader from "@/baseComponents/baseHeader"
import popupBox from "@/baseComponents/popupBox"
export default {
  name:"index",
  components:{
    baseHeader,
    popupBox
  },
  data() {
    return {
    }
  },
  methods: {
   
  }
}
</script>

<style scoped>
  .indexBox{
    width: 100%;
    height: 100%;
    background: #0F254D;
    position: fixed;
    background-size: 19.2rem 10.8rem;
  }
  
</style>