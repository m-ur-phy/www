<!-- 서브 페이지 마크업 -->
<template lang="html">
    <div>
      <div class="subVis">
        <SubVisual />
        <h3>축구 이야기</h3>
      </div>
      <article class="subWrap">
        <h2 class="hidden">축구 소개</h2>
        <section class="infor">
          <h4>축구를 알려드릴게요</h4>
          <div class="hisIntro">
            <div class="story1">
              <div class="image">
                <img src="../assets/history.jpeg" alt="">
              </div>
              <p>
                "어느 나라가 축구의 기원인가"라는 질문에 대해서는 여러 가지 의견이 있을 수 있으나, "어느 나라가 현대 축구의 형태를 완성했는가"라는 질문의 답은 잉글랜드라는 데에 별다른 이견이 없다. 1863년 프리메이슨 테이번이라는 선술집에 런던의 축구 클럽과 학교 축구부들의 관계자가 모여 회의를 가졌고, 회의 결과 축구협회(The Football Association), 약칭 FA가 탄생하였다. 이는 세계 최초 축구협회였고, 그 뒤에도 잉글랜드는 '잉글랜드' 축구협회가 아닌 그냥 축구협회라는 명칭을 계속 쓰며 자신들이 근현대 축구의 발상지임을 계속해서 어필하고 있다.
              </p>
              <p>또한 잉글랜드는 축구가 스포츠로 자리매김하게끔 축구의 규칙을 제정하고, 체계적으로 행정 체계를 발전시켰으며 세계 각국에 축구를 현대적인 스포츠로 널리 보급하는 데 기여했다. 실제로 세계에 축구를 퍼뜨린 것은 중국인이 아니라 잉글랜드인들이었으며, AC 밀란, 레알 마드리드 CF나 민족주의로 유명한 아틀레틱 클럽도 그 시초엔 잉글랜드인들이 끼어 있었을 정도. 그리고 저 셋을 비롯해 영어권이 아니지만 클럽 이름에 영어가 포함된 경우가 많다는 점을 봐도 영국의 영향을 확인할 수 있다.</p>
            </div>
            <div class="story2">
              <div class="image">
                <img src="../assets/history2.jpeg" alt="">
              </div>
              <p>
                명실상부 우리나라 최대 인기 스포츠 중 하나로, 최고의 생활스포츠이자 2위 자리를 다투는 프로스포츠이다. 대한민국에서는 야구, 농구, 배구와 함께 4대 스포츠 중 하나로 꼽히고 있다. 1980년대에는 차범근이 독일 분데스리가에서, 2000년대에는 박지성이 잉글랜드 프리미어 리그에서 명성을 떨쳤고, 이후 2010년대에 이어서 현재도 손흥민이 잉글랜드 프리미어 리그에서 활약하며 유럽에서 좋은 모습을 보여주고 있다. 대한민국 최상위 프로 축구 리그인 K리그는 1983년에 슈퍼 리그로 출범하면서 지금까지도 프로 리그가 이어지고 있으며, 현재까지 AFC 챔피언스 리그 우승 횟수가 가장 많은 리그이기도 하다.
              </p>

            </div>
          </div>
          <ul>
            
          </ul>
          
          
        </section>
        <section>
          <h4>축구인 헌장</h4>
          <v-row justify="center">
            <v-expansion-panels accordion>
              <v-expansion-panel v-for="(item, i) in fbraw" :key="i">
                <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{item.txt}}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </section>

      </article>
    </div>
  </template>
  
  <script>
  import SubVisual from './SubVisual.vue'
  export default {
    data(){
    return{
      fbraw:[
        {title: '1. Make every effort to play good football.', txt: '승리를 위하여 최선을 다한다.', img: require('../assets/area.png')},
        {title: '2. Play fair.', txt: '정정당당하게 경기한다.', img: require('../assets/stadium.png')},
        {title: '3. Observe the Laws of the Games.', txt: '경기규칙을 준수한다.', img: require('../assets/field.png')},
        {title: '4. Respect opponents, teammates, referees, officials and spectators.', txt: '상대와 동료 선수, 심판과 임원, 관중을 존중한다.', img: require('../assets/party.png')},
        {title: '5. Accept defeat with dignity.', txt: '패배를 당당하게 인정한다.', img: require('../assets/party.png')},
        {title: '6. Promote the interests of football.', txt: ' 축구의 발전과 권익을 위해 노력한다.', img: require('../assets/stadium.png')},
        {title: '7. Reject corruption, discrimination, violence, and other dangers to out Game.', txt: '축구에 해가 되는 부정과 부패, 차별과 폭력을 배격한다.', img: require('../assets/stadium.png')},
        {title: '8. Resolve all disputes through FIFA & KFA and respect the decisions.', txt: '축구 관련 분쟁은 축구협회와 국제축구연맹을 통하여 해결하고, 그 결정을 존중한다.', img: require('../assets/stadium.png')},
        {title: '9. Help each other as a football family.', txt: '우리는 축구 가족이다. 서로 돕고 산다.', img: require('../assets/stadium.png')},
        {title: '10. Honor those who work hard to defend football’s good reputation.', txt: '축구의 명예를 위해 헌신한 이들을 드높인다.', img: require('../assets/stadium.png')}
      ]
    }
  },
    components:{
      SubVisual
    }
  }
  </script>
  
  <style scoped>
    .hisIntro {}
    .hisIntro .image { border-radius: 20px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, .5);}
    .hisIntro p { margin: 50px 0; text-align: justify; }
    .story2 { display: grid; grid-template-columns: 50% 50%; align-items: center;}
    .story2 .image { max-width: 500px; margin: 0 auto;}
    .story2 p { padding: 20px;}
    @media screen and (max-width:640px) {
      .story2 { display: block; }
    }
  </style>