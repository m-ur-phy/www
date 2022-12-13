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
            <div class="image">
              <img src="../assets/history.jpeg" alt="">
            </div>
            <p>
              The history of football being played in England dates back many centuries. Medieval or mob football was often played between neighbouring towns and villages, with a mass of players from opposing teams clashing to deliver an inflated pigs bladder from one end of town to the other. Kicking or punching the bladder, or ball, was permitted, as was doing the same to your opponents …these medieval matches were chaotic and had very few rules.
            </p>
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
    .hisIntro p { margin: 50px 0; text-align: justify;}
  </style>