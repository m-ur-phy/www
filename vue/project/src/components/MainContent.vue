<!-- 메인 페이지 마크업 -->
<template lang="html">
<div>
  <MainVisual />
    <article class="mainWrap">
      <h2 class="hidden">콘텐츠영역</h2>
        <ul class="iconList">
          <li>
            <i class="fa-regular fa-futbol"></i>
            <span>FootBall</span>
          </li>
          <li>
            <i class="fa-regular fa-face-grin-tongue-squint"></i>
            <span>Quick</span>
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>
            <span>Easy</span>
          </li>
          <li>
            <i class="fa-solid fa-earth-asia"></i>
            <span>Gyeongi</span>
          </li> 
        </ul>
      <section class="fbStory">
        <div class="image">
          <img src="../assets/ball.png" alt="">
        </div>
        <div class="fbStoryTxt">
          <div class="fbStoryCon">
            <h3>축구 ⚽️</h3>
            <p>주로 발로 공을 차서 상대편의 골에 공을 많이 넣는 것으로 승부를 겨루는 경기. 11명이 팀을 이루며, 골키퍼 이외에는 손을 쓰면 안 되고 주로 머리와 발을 사용한다.</p>
            <button><router-link to="/vue/sub3" class="more">MoreView</router-link></button>
          </div>
        </div>
      </section>
      <section class="fbFind">
        <div class="fbFindTxt">
          <h3>축구장 검색하기</h3>
          <p>경축에서 축구장을 검색해보세요. 지역, 이름, 잔디 까지 어떠한 조건이든 당신을 위한 맞춤으로 제공해드립니다!</p>
          <button><router-link to="/vue/sub2" class="more">MoreView</router-link></button>
        </div>
      </section>
      <section class="fbPic">
          
      </section>
    </article>
    </div>
  </template>
  
  <script>
  import MainVisual from './MainVisual.vue'
  export default {
    data(){
    return{
      tab: null,
        items: [
          '구장', '관중석'
        ],
        text: [
          '구장'
        ]
    }
  },
  components:{
      MainVisual
  }
  }
  </script>
  
  <style scoped>
    h3{ font-size: 2.5rem;}
    button{ margin: 20px 0;}
    .iconList { margin: 100px 0; display: flex; justify-content: space-around; text-align: center; box-shadow: 0 0 10px rgba(0, 0, 0, .2); border-radius: 20px; padding: 20px 0 !important;}
    .iconList li { padding: 10px; transition: all .5s; }
    .iconList svg { display: block; margin: 0 auto; font-size: 10vw; color: #ddd; margin: 20px; transition: all .5s;}
    .iconList li:hover svg { color: #aaa;}
    .iconList li span { position: relative;}
    .iconList li span::after{position: absolute; content: ''; width: 0; height: 5px; background: #4CA91A; top: 30px; left: 50%; transition: all .5s; transform: translateX(-50%);}
    .iconList li:hover span::after{ width: 70px;}
    .fbStory { display: flex; position: relative;}
    .fbStory::after{ position: absolute; bottom: 0; right: 60%; display: block; content: ''; border-radius: 50%; width: 800px; height: 200px; background: rgba(76, 169, 26, .2);}
    .fbStory .image { width: 50%; position: relative; top: -10%; left: -20%; animation: move 5s infinite alternate; }
    @keyframes move{
      0% { top: -10%; left: -20%;}
      50% { left: 0; top: 0; transform: rotate(360deg);}
      100% {
        left: 70%;
        top: -10%;
        transform: rotate(0);
      }
    }
    .fbStory p { margin: 20px 0;}
    .fbStoryTxt{ position: relative; width: 50%;}
    /* .fbStoryTxt::before{ position: absolute; top: 0; content: ''; width: 20vw; height: 20vw;  border: 3px solid #4CA91A; border-radius: 50%;}
    .fbStoryTxt::after{ position: absolute; top: 100px; left: 100px; content: ''; width: 50vw; height: 50vw;  border: 3px solid #4CA91A; border-radius: 50%;} */
    .fbStoryCon{ position: relative;background: #fff; top:50%; transform: translateY(-50%); box-shadow: 0 0 10px rgba(0, 0, 0, .2); padding: 5%; border-radius: 20px; z-index: 5;}
    .fbStoryTxt h3 { color: #4CA91A; }
    .fbFind { text-align: center; background: url(../assets/grass.jpg) center no-repeat; background-position: cover; padding: 100px 0; border-radius: 50%;}
    .fbFindTxt { width: 80%; margin: 0 auto; color: #fff;}
    .fbFindTxt p { margin: 20px 0;}
    .fb--text { color: #347512 !important;}

    @media screen and (max-width:640px) {
      .iconList {display: grid; grid-template-columns: 50% 50%;}
      .iconList svg{ font-size: 12vw; margin: 10px auto;}

    }
    
  </style>