<!-- 서브 페이지 마크업 -->
<template lang="html">
    <div>
      <div class="subVis">
        <SubVisual />
        <h3>축구장 찾기</h3>
      </div>
      <article class="subWrap">
        <h2 class="hidden">축구장 찾기</h2>
        <section class="infor">
          <h4>지금바로 축구장을 찾아보세요!</h4>
          <div class="image"></div>
          <div class="searchBox">
            <select v-model="fvalue">
                <option value="">==선택==</option>
                <option value="SIGUN_NM">시군</option>
                <option value="FACLT_NM">경기장이름</option>
                <option value="BOTM_MATRL_NM">잔디</option>
                <option value="COMPLTN_YY">완공일</option>
            </select>
            <input id="search" type="search" v-model="value" @keyUp.enter="search()">
            <button @click="search()">검색</button>
          </div>

          <div class="msg" v-show="message"><i class="fa-solid fa-magnifying-glass-location"></i> {{msgtext}}</div>
          
          <ul class="listBox">
            <li v-for="(x, i) in football" :key="x.ID">
              <p>{{ i+1 }}</p>
              <div class="listCon">
                <dl>
                  <dt>{{x.FACLT_NM}}</dt>
                  <dd><span><span class="hidden">지역</span>🛣</span> {{ x.SIGUN_NM }}</dd>
                  <dd><span><span class="hidden">잔디</span>🌱</span> {{ x.BOTM_MATRL_NM }}</dd>
                  <dd><span><span class="hidden">완공일</span>🛠</span> {{ x.COMPLTN_YY }}</dd>
                </dl>
                <button class="more" @click="[open = true, modalno = i]">MoreView</button>
              </div>
              
                <!-- <div class="modalBg" v-if="open == true" @click="open = false">
                <div class="modal">
                  <dl>
                    <dt>{{football[i].FACLT_NM}}</dt>
                    <dd><span><span class="hidden">지역</span>🛣</span> {{ football[i].SIGUN_NM }}</dd>
                    <dd><span><span class="hidden">잔디</span>🌱</span> {{ football[i].BOTM_MATRL_NM }}</dd>
                    <dd><span><span class="hidden">완공일</span>🛠</span> {{ football[i].COMPLTN_YY }}</dd>
                  </dl>
                  <span class="close" @click="open = false"><span class="hidden">닫기</span><i class="fa-solid fa-xmark"></i></span>
                </div>
              </div> -->
            </li>
          </ul>
          <div class="modalBg" v-if="open == true" @click="open = false">
            <div class="modal">
              <dl>
                <dt>{{football[modalno].FACLT_NM}}</dt>
                <dd><span>지역 : </span> {{ football[modalno].SIGUN_NM }}</dd>
                <dd><span>잔디 : </span> {{ football[modalno].BOTM_MATRL_NM }}</dd>
                <dd><span>완공일 : </span> {{ football[modalno].COMPLTN_YY }}</dd>
                <dd><span>관리 : </span> {{ football[modalno].MANAGE_MAINBD_NM }}</dd>
              </dl>
              <span class="close" @click="open = false"><span class="hidden">닫기</span><i class="fa-solid fa-xmark"></i></span>
            </div>
          </div>
          
        </section>
      </article>
    </div>
  </template>
  
    <script>
      

  import jdata from '../football.json';
  import SubVisual from './SubVisual.vue'

  export default {
    data(){
      return{
        modalno: 0,
        open: false,
        message: false,
        msgtext: '검색 데이터가 없습니다',
        value: '',
        fvalue: '',
        football : jdata,
      }

    },

    methods:{
      search: function(){
        let ft = this.fvalue;
        let text = this.value;
        if(text){
          this.football = jdata.filter(function(element){
            return element[ft].includes(text);  // 조건에 참이면 객체를 배열로 리턴
          });
          if(this.football.length==0){
            this.message=true;
            this.msgtext='검색 데이터가 없습니다';
          }else{
            this.message=true;
            this.msgtext=this.football.length + '개가 검색되었습니다';
          }

        }else{
          alert('검색어를 입력해주세요!');
        } 

      }

    },
    components:{
      SubVisual
      }

  }


  </script>
  
  <style scoped>
    .searchBox { display: flex; justify-content: center; gap: 10px; border-radius: 20px; text-align: center; padding: 20px 0; margin: 100px 0; background: rgba(109, 169, 26, .1);}
    .searchBox select, .searchBox button, .searchBox input[type='search'] { padding: 10px 5px;  border-radius: 15px;}
    .searchBox select:focus, .searchBox button:focus, .searchBox input[type='search']:focus { outline: none;}
    .searchBox input[type='search']{ background: #fff; }
    .searchBox select{ background: rgba(255, 255, 255, .7); text-align: center;}
    .searchBox button { background: rgba(109, 169, 26, .5);}
    .modalBg { top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, .5); position: fixed; padding: 20px;}
    .modal { top: 50%; left: 50%; width: 90%; position: fixed; background: #fff; border-radius: 50px; padding: 50px; z-index: 10; transform: translateX(-50%) translateY(-50%); text-align: center;}
    .modal dt { font-size: 1.5em; font-weight: 700; color: #347512; border-bottom: 1px solid #347512; padding-bottom: 20px; margin-bottom: 20px;}
    .modal dd { }
    .close { position: absolute; top: 30px; right: 30px; font-size: 1.2em; }
    .msg { font-size: 1.2em; margin: 50px 0; font-weight: 500; color: #666;}
    .more { margin: 20px 0 0 0; }
    .listBox {}
    .listBox li{ display: flex; align-items: center; padding: 30px 0; border-bottom: 1px dashed #4CA91A;}
    .listBox li p { font-size: 3em; width: 10%; text-align: center; color:  #347512;}
    .listBox li .listCon { padding-left: 60px; width: 90%;}
    .listBox li dt { font-size: 1.5em; font-weight: 500; margin: 0 0 20px 0;}
    .listBox li dd { color: #666; display: inline; margin: 0 1.5%;}
    .listBox li dd span { font-size: 1.5em;}
  </style>