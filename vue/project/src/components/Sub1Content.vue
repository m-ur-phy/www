<!-- 서브 페이지 마크업 -->
<template lang="html">

    <div>
      <SubVisual />
      <h2>서브 페이지1 입니다.</h2>
      
    </div>
  </template>
  
  <script>
  import SubVisual from './SubVisual.vue'
  export default {
    components:{
      SubVisual
  }
   
  }
  </script>
  
  <style>
    .box2{width: 90%; margin: 10px 5%; padding: 20px; box-sizing: border-box;
     background:darkseagreen; color: #333;}
  </style>