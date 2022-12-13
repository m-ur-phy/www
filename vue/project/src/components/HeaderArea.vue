<template>
    <header>
        <h1 class="logo"><router-link to="/vue/main" class="link">{{plogo}}</router-link></h1>
        <nav>
          <h2 class="hidden">글로벌네비게이션영역</h2>
          <ul>
            <li><router-link to="/vue/sub1" class="link"><h3>ABOUT</h3></router-link></li>
            <li><router-link to="/vue/sub2" class="link"><h3>FIND</h3></router-link></li>
            <li><router-link to="/vue/sub3" class="link"><h3>STORY</h3></router-link></li>
          </ul>
        </nav>
    </header>
</template>
  
<style scoped>
  header{ display: flex; justify-content: space-between; align-items: center; position: fixed; width: 100%; background: rgba(255, 255, 255, .5); z-index: 10; box-shadow: 10px 0 10px rgba(0, 0, 0, .1); padding: 10px 20px;}
  .link{color: #333 !important;}
  .link:hover h3{color: #4CA91A !important; }
  .link h3 { font-weight: 500 !important;transition: all .5s;}
  .logo{font-size: 1.5em; color: #333;}
  nav ul { display: flex;}
  nav ul li { margin: 0 10px; font-size: 1.3em; }

@media screen and (max-width:1024px) { 
  header{display: block; text-align: center;}
  nav ul { justify-content: center;}
}

@media screen and (max-width:640px) {
  header{ padding: 5px 20px;}
  nav ul li { font-size: 1em;}
}

</style>
  
<script>
  export default {
      props:['plogo'],
      
      
  }
</script>