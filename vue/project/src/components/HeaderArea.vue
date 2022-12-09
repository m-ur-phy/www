<template>
    <header class="d-flex justify-space-around white">
        <h1 class="logo"> <router-link to="/main" class="link">{{plogo}}</router-link></h1>
        <nav>
         
          <router-link to="/sub1" class="link">서브 페이지1</router-link>
          <router-link to="/sub2" class="link">서브 페이지2</router-link>
          <router-link to="/sub3" class="link">서브 페이지3</router-link>
        </nav>
    </header>
</template>
  
<style>
      header{position: fixed; width: 100%; z-index: 10; box-shadow: 10px 0 10px rgba(0, 0, 0, .1);}
      .link{color:orange; padding: 10px; display: inline-block; font-weight: bold;}
      .logo{font-size: 20px}
</style>
  
<script>
  export default {
      props:['plogo']
  }
</script>