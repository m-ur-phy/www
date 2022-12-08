<template>
    <header>
        <h1 class="logo">{{plogo}}입니다</h1>
    </header>
</template>
  
<style>
       .logo{color: red; font-size: 30px;}
</style>
  
<script>
  export default {
       props:['plogo']
  }
</script>