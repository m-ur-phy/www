<!-- 메인 페이지 마크업 -->
<template lang="html">
<div>
  <MainVisual />
    <article class="">
      <h2>메인 페이지 입니다.</h2>
      <ul class="d-flex">
        <li><i class="fa-regular fa-futbol"></i></li>
        <li><i class="fa-regular fa-face-grin-tongue-squint"></i></li>
        <li><i class="fa-regular fa-circle-check"></i></li>
        <li><i class="fa-solid fa-earth-asia"></i></li>
        
        
        
       

      </ul>
    </article>
    </div>
  </template>
  
  <script>
  import MainVisual from './MainVisual.vue'


  export default {
    data(){
    return{

    }
  },
  components:{
      MainVisual
  }
  }
  </script>
  
  <style>
    .box1{width: 90%; margin: 10px 5%; padding: 20px; box-sizing: border-box;
     background: crimson; color: #fff;}
  </style>