<template>
<div id="app">
  <v-app id="inspire">
    <HeaderArea plogo="GYEONG CHUCK" />
    <router-view></router-view>
    <FooterArea />
  </v-app>
</div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;500;700&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap'); 
/* font-family: 'Noto Sans KR', sans-serif; */
/* font-family: 'Roboto', sans-serif; */

html, body, div , span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; } 
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section { display: block; } 
body { font-family:'Noto Sans KR', sans-serif; font-size: 16px; color: #333 } 
ol, ul { list-style: none; } 
table { border-collapse: collapse; border-spacing: 0; } 
address { font-style: normal } 
a { color: #333; text-decoration: none } 
img { border: 0; vertical-align: top } 
* { box-sizing: border-box; } 
.hidden { display: block; position: absolute; left: -1000%; width: 1px; height: 1px; overflow: hidden; color: #fff; }

body{font-size: 16px; color: #333; font-family: 'Noto Sans KR', sans-serif;}
a{color: #333; text-decoration: none;}
section { margin: 100px 0;}
article { width: 90%; margin: 0 auto;}
</style>

<script>
import HeaderArea from './components/HeaderArea.vue'
import FooterArea from './components/FooterArea.vue'


export default {
  name : 'app',
  data(){
    return{
      vname:'홍길동',
      cnt:1,
      classname:'btn',
      btnstyle:'background:red; color:#fff; width:200px; padding:15px 0'
    }
  },
  methods: {
  },
  components:{
      HeaderArea,
      FooterArea
  }
}

</script>

