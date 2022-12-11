<template>
    <header class="d-flex justify-space-around">
        <h1 class="logo"><router-link to="/main" class="link">{{plogo}}</router-link></h1>
        <nav>
          <h2 class="hidden">글로벌네비게이션영역</h2>
          <ul class="d-flex">
            <li><router-link to="/sub1" class="link">경축 소개</router-link></li>
            <li><router-link to="/sub2" class="link">축구장 찾기</router-link></li>
            <li><router-link to="/sub3" class="link">축구 이야기</router-link></li>
          </ul>
        </nav>
    </header>
</template>
  
<style>
  header{position: fixed; width: 100%; background: rgba(255, 255, 255, .5); z-index: 10; box-shadow: 10px 0 10px rgba(0, 0, 0, .1); padding: 20px;}
  .link{color: #333 !important; font-weight: bold;}
  .logo{font-size: 30px; color: #333;}
</style>
  
<script>
  export default {
      props:['plogo']
  }
</script>