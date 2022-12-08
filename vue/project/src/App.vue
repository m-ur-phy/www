<template>
  <div id="app">
    <HeaderArea plogo="그린컴퓨터" />

    <h2>{{ vname +'씨 '+ cnt +'번 방문하셨습니다' }}</h2>
    <button :class="classname" :style="btnstyle" @click="append()">클릭</button>
    <div>
      <img src="./assets/back.jpg" alt="">
    </div>
    <!-- 라우터 컴포넌트에 연결된 컴포넌트가 렌더링 됨-->
    <router-view></router-view>
    <hr>
    <p>라우터링크 사용:
      <router-link to="/main">메인 페이지</router-link>
      <router-link to="/sub">서브 페이지</router-link>
    </p>

    <div v-for="(x) in oneromms" :key="x.id">
       <img :src="x.image" alt="" class="rimg">
       <h4>{{ (x.id+1) + '.' + x.title }}</h4>
       <p>{{ 'price : ' + x.price }}</p>
       <p>{{ x.content }}</p>
   </div>

    <FooterArea />
  </div>
</template>

<style>
body{font-size: 16px; color: #333;}
a{color: #333; text-decoration: none;}
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.head{color: red;}
   .rimg{width: 90%; margin: 15px auto;}
   h4{font-size: 24px;margin: 15px 0;}
   p{font-size: 18px; margin: 15px 0;}
</style>

<script>
import HeaderArea from './components/HeaderArea.vue'
import FooterArea from './components/FooterArea.vue'
import jdata from './oneroom.json';

export default {
  name : 'app',
  data(){
    return{
       vname:'홍길동',
       cnt:1,
       classname:'btn',
       btnstyle:'background:red; color:#fff; width:200px; padding:15px 0',
       oneromms : jdata
    }
  },
  methods: {
    append: function(){
        this.cnt++;
    }
  },
  components:{
       HeaderArea,
       FooterArea
  }
}

</script>
