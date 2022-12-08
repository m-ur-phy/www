<!-- 메인 페이지 마크업 -->
<template lang="html">
    <div class="box1">
      <h2>메인 페이지 입니다.</h2>
      <button @click="fnSubPage">서브 페이지로 이동(라우터 함수 사용)</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      // 라우터 함수로 이동할 때는 $router 글로벌 객체에 이동할 주소 넣어줌
      fnSubPage() {
        this.$router.push('/sub')
      }
    }
  }
  </script>
  
  <style>
    .box1{width: 90%; margin: 10px 5%; padding: 20px; box-sizing: border-box;
     background: crimson; color: #fff;}
  </style>