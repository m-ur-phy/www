<template>
    <div class="subVisImg">
      <img src="../assets/subVis1.jpg" alt="">
    </div>
  </template>
  
  <style>
    .subVisImg{ overflow: hidden; height: 300px; background: #347512;transform: scale(1.1); animation: subVis 2s forwards;}
    .subVisImg img{ }
    @keyframes subVis { 
      from { transform: scale(1.1); } 
      to { transform: scale(1); } 
    }
  </style>
  
  <script>
  export default {
  data(){
    return{
    }
  },
  }
  </script>