<!-- 서브 페이지 마크업 -->
<template lang="html">
    <div class="box2">
      <h2>서브 페이지 입니다.</h2>
      <button @click="fnMainPage">메인 페이지로 이동(라우터 함수 사용)</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      // 라우터 함수로 이동할 때는 $router 글로벌 객체에 이동할 주소 넣어줌
      fnMainPage() {
        this.$router.push('/main')
      }
    }
  }
  </script>
  
  <style>
    .box2{width: 90%; margin: 10px 5%; padding: 20px; box-sizing: border-box;
     background:darkseagreen; color: #333;}
  </style>