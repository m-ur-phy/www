<template>
    <div>
      <div class="box">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <img src="../assets/main1.jpg" alt="">
              <dl class="mainttl">
                <dt>바로 지금<br>그라운드로!</dt>
                <dd>축구장 검색은 경축</dd>
              </dl>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/main2.jpg" alt="">
              <dl class="mainttl">
                <dt>바로 지금<br>그라운드로!</dt>
                <dd>축구장 검색은 경축</dd>
              </dl>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/main3.jpg" alt="">
              <dl class="mainttl">
                <dt>바로 지금<br>그라운드로!</dt>
                <dd>축구장 검색은 경축</dd>
              </dl>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </template>
  
  <style>
      .swiper dl{position: absolute; left: 50%; top:50%; transform: translateX(-50%) translateY(-50%);}
      .mainttl dt{font-size: 6vw; text-align: center; font-weight: 900; line-height: 1.2em;}
      .mainttl dd{font-size: 3vw; text-align: center; font-weight: 500; margin-top: 10px;}
      .swiper-button-next, .swiper-button-prev { color: #4CA91A !important;}
      .swiper .swiper-pagination-bullet-active { background: #4CA91A !important;}
  </style>
  
  <script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
     components: {
      Swiper,
      SwiperSlide
  },
  data(){
    return{
       swiperOption: {
          effect : 'fade',
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
        delay:3000,
      }
        }
    }
  },
  }
  </script>