<template>
<div id="app">
  <v-app id="inspire">
    <HeaderArea plogo="GYEONG CHUCK" />
    <router-view></router-view>
    <FooterArea />
  </v-app>
</div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;500;700&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap'); 
/* font-family: 'Noto Sans KR', sans-serif; */
/* font-family: 'Roboto', sans-serif; */


body{font-size: 16px; color: #333; font-family: 'Noto Sans KR', sans-serif;}
a{color: #333; text-decoration: none;}
#app {
  text-align: center;
  color: #2c3e50;
}

.head{}
.rimg{width: 90%; margin: 15px auto;}
h4{font-size: 24px;margin: 15px 0;}
p{font-size: 18px; margin: 15px 0;}
</style>

<script>
import HeaderArea from './components/HeaderArea.vue'
import FooterArea from './components/FooterArea.vue'


export default {
  name : 'app',
  data(){
    return{
      vname:'홍길동',
      cnt:1,
      classname:'btn',
      btnstyle:'background:red; color:#fff; width:200px; padding:15px 0'
    }
  },
  methods: {
  },
  components:{
      HeaderArea,
      FooterArea
  }
}

</script>

