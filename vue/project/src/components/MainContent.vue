<!-- 메인 페이지 마크업 -->
<template lang="html">
<div>
  <MainVisual />
    <article class="">
      <h2 class="hidden">콘텐츠영역</h2>
        <ul class="iconList my-16 d-flex justify-space-around text-center">
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
      <section class="fbStory d-flex">
        <div class="image">
          <img src="../assets/ball.png" alt="">
        </div>
        <div class="fbStoryTxt">
          <div class="fbStoryCon">
            <h3>축구 ⚽️</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas sint aliquam culpa quam ipsa omnis illo, dignissimos nostrum exercitationem voluptatum quis ipsum recusandae eligendi, necessitatibus natus cupiditate blanditiis aspernatur.</p>
            <button><router-link to="/sub3" class="link">MoreView</router-link></button>
          </div>
        </div>
      </section>
      <section class="fbFind text-center">
        <div class="fbFindTxt">
          <h3>축구장 검색하기</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptas ducimus molestiae consequuntur hic dolorem. Eveniet ab nostrum placeat nam distinctio neque, odio repellat. Nostrum sint consectetur omnis excepturi facilis.</p>
          <button><router-link to="/sub2" class="link">MoreView</router-link></button>
        </div>
      </section>
      <section class="fbPic">
          <v-card>
            <v-card-title class="text-center justify-center py-6">
              <h3>축구장 보기</h3>
            </v-card-title>
            <v-tabs
              v-model="tab"
              color="fb"
              grow
            >
              <v-tab
                v-for="item in items"
                :key="item"
              >
                {{ item }}
              </v-tab>
            </v-tabs>
        
            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="item in items"
                :key="item"
              >
                <v-card
                  color="basil"
                  flat
                >
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
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
  
  <style>
    h3{ font-size: 40px;}
    .iconList { box-shadow: 0 0 10px rgba(0, 0, 0, .2); border-radius: 20px; padding: 20px 0 !important;}
    .iconList li { padding: 10px; transition: all .5s; }
    .iconList svg { display: block; margin: 0 auto; font-size: 10vw; color: #ddd; margin: 20px; transition: all .5s;}
    .iconList li:hover svg { color: #aaa;}
    .iconList li span { position: relative;}
    .iconList li span::after{position: absolute; content: ''; width: 0; height: 5px; background: #4CA91A; top: 25px; left: 50%; transition: all .5s; transform: translateX(-50%);}
    .iconList li:hover span::after{ width: 70px;}
    .fbStory { }
    .fbStory .image { width: 50%; position: relative; left: -100px; }
    .fbStory .image::after{ position: absolute; bottom: 0; right: 0; display: block; content: ''; border-radius: 50%; width: 800px; height: 200px; background: rgba(76, 169, 26, .2);}
    .fbStoryTxt{ position: relative; width: 50%;}
    .fbStoryTxt::before{ position: absolute; top: 200px; content: ''; width: 20vw; height: 20vw;  border: 3px solid #4CA91A; border-radius: 50%;}
    .fbStoryTxt::after{ position: absolute; top: 100px; left: 200px; content: ''; width: 50vw; height: 50vw;  border: 3px solid #4CA91A; border-radius: 50%;}
    .fbStoryCon{ position: relative;background: #fff; top:50%; transform: translateY(-50%); box-shadow: 0 0 10px rgba(0, 0, 0, .2); padding: 10px; border-radius: 20px; z-index: 5;}
    .fbStoryTxt h3 { color: #4CA91A; }
    .fbFind { width: 120%; position: relative; left: 50%; transform: translateX(-50%); background: url(../assets/grass.jpg) center no-repeat; background-position: cover; padding: 100px 0;}
    .fbFindTxt { width: 80%; margin: 0 auto; color: #fff;}
    .fb--text { color: #347512 !important;}
  </style>