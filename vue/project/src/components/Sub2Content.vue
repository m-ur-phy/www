<!-- 서브 페이지 마크업 -->
<template lang="html">
    <div class="box3">
      <h2>서브 페이지2 입니다.</h2>
      <div v-for="(x) in oneromms" :key="x.id">
        <img :src="x.image" alt="" class="rimg">
        <h4>{{ (x.id+1) + '.' + x.title }}</h4>
        <p>{{ 'price : ' + x.price }}</p>
        <p>{{ x.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
    import jdata from '../oneroom.json';
  export default {
    data() {
      return {
        oneromms : jdata
      }
    }
   
  }
  </script>
  
  <style>
    .box3{width: 90%; margin: 10px 5%; padding: 20px; box-sizing: border-box;
     background:orange; color: #333;}
  </style>