<!-- 서브 페이지 마크업 -->
<template lang="html">

    <div>
      <div class="subVis">
        <SubVisual />
        <h3>경축 소개</h3>
      </div>
      <article class="subWrap">
        <h2 class="hidden">경축 웹사이트 소개</h2>
        <div class="intro">
          <span>축구장 찾으세요?</span>
          <div class="image"><img src="../assets/how.gif" alt=""></div>
          <p>나 경기도민! 축구는 하고 싶은데,, 축구를 할곳이 없다구요? <br> 당신에게 <span>딱 알맞는</span> 축구장을 알려드릴게요!</p>
        </div>
        <section class="func">
          <h4>경축은 무엇을 제공하나요?</h4>
          <ul>
            <li v-for="(fcon, i) in funcconts" :key="i">
              <div class="image"><img :src="fcon.img" alt=""></div>
              <dl>
                <dt>{{fcon.title}}</dt>
                <dd>{{fcon.txt}}</dd>
              </dl>
            </li>
          </ul>
        </section>
        <section class="infor">
          <h4>경축의 목표</h4>
          <ul>
            <li v-for="(icon, i) in infoconts" :key="i">
              <div class="image"><img :src="icon.img" alt=""></div>
              <dl>
                <dt>{{icon.title}}</dt>
                <dd>{{icon.txt}}</dd>
              </dl>
            </li>
          </ul>
          
        </section>
      </article>
      
    </div>
  </template>
  
  <script>
  import SubVisual from './SubVisual.vue'

  export default {
    components:{
      SubVisual
    },
    data(){
    return{
      funcconts:[
        {title: '경기도의 시군', txt: '경기도의 시 군만 검색해보세요! 당신 근처에 있는 축구장을 알려드릴게요!', img: require('../assets/area.png')},
        {title: '축구장 이름', txt: '당신이 자주 찾는 축구장의 이름을 바로 검색해보세요!', img: require('../assets/stadium.png')},
        {title: '잔디', txt: '천연잔디? 인조잔디? 토사? 원하는 잔디에 맞춰 최적의 환경을 만나보세요!', img: require('../assets/field.png')},
        {title: '완공일', txt: '오래된 정감있는 축구장과 새로움이 가득한 축구장 당신의 선택을 알려주세요!', img: require('../assets/party.png')}
      ],
      infoconts:[
        {title: '건강증진', txt: '경기 축구장을 찾아보는 경축은 대내외적으로 대한민국 축구를 발전하기 위해 만들어졌습니다. 축구를 대중 속으로 널리 보급시켜 국민의 건강증진, 건전한 여가 선용, 스포츠 정신의 함양에 기여합니다.', img: require('../assets/info1.jpeg') },
        {title: '건전한 여가생활', txt: '축구를 대중 속으로 널리 보급시켜 국민의 건강증진, 건전한 여가 선용, 스포츠 정신의 함양에 기여하고, 유소년부터 프로축구에 이르는 모든 축구 영역의 균형있는 육성과 발전을 목표로 합니다.', img: require('../assets/info2.jpeg') },
        {title: '스포츠 정신', txt: '경기 축구장을 찾아보는 경축은 대내외적으로 대한민국 축구를 발전하기 위해 만들어졌습니다. 유소년부터 프로축구에 이르는 모든 축구 영역의 균형있는 육성과 발전을 목표로 합니다.', img: require('../assets/info3.webp') }
      ]
    }
  }
    
  }
  </script>
  
  <style scoped>
    .intro span { display: block; font-size: 2.5em; font-weight: 700; text-align: center; margin: 100px 0;}
    .intro > .image { width: 35%; margin: 0 auto;}
    .intro p { text-align: center; margin: 50px 0;}
    .intro p span { font-weight: 500; color: #4CA91A; font-size: 1.3rem; display: inline;}
    
    .func ul { padding: 0; display: grid; grid-template-columns: calc(50% - 2.5%) calc(50% - 2.5%);  grid-column-gap: 5%; grid-row-gap: 7%;}
    .func li { padding: 40px 5%; border-radius: 20px; border: 5px solid #4CA91A;}
    .func li .image { width: 50%; margin: 0 auto;}
    .func li img { transition: all .5s;}
    .func li:hover img{ transform: scale(1.2);}
    .func dl { text-align: center; margin: 20px 0; }
    .func dt { font-size: 1.5em; margin: 20px 0; font-weight: 500;}
    .func dd { color: #666;}

    .infor { margin-top: 200px;}
    .infor ul li{ display: flex; align-items: center; border-radius: 20px; overflow: hidden; margin: 50px 0; box-shadow: 0 0 15px rgba(0, 0, 0, .2);}
    .infor ul li:nth-of-type(2) { flex-direction:row-reverse; }
    .infor .image { width: 50%; overflow: hidden; }
    .infor .image img { transition: all .5s;}
    .infor li:hover img{ transform: scale(1.1);}
    .infor dl{ width: 50%; padding: 20px; }
    .infor dt{ font-size: 1.5em; margin: 0 0 20px; font-weight: 500;}
    .infor dd{ color: #666;}
    
    /* .infor h4::before{ position: absolute; top:0; left: 0; content: '축구장찾기는경축축구장찾기는경축축구장찾기는경축축구장찾기는경축'; font-size: 5em; color: rgba(76, 169, 26, .2); white-space:nowrap; animation: move 30s linear infinite; transform: translateY(-50%);} */
    /* .infor h4::before{ content: ''; position: absolute; top: 0; left: 0; width: 100px; height: 100px; background-image: url(../assets/ball.png); background-size: cover;} */
    /* @keyframes move{
    100% {
        transform: translateX(-5888px) translateY(-50%);
    }
  }  */
  @media screen and (max-width:1024px) { 
    .infor ul li{ display: block;}
    .infor .image {width: auto;}
    .infor dl { width: auto;}
}
    @media screen and (max-width:640px) {
      .infor { margin-top: 100px;}
      .func ul { display: block;}
      .func li { margin: 50px 0;}
    }
  </style>