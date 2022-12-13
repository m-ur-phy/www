<template>
    <footer>
  <template>
    <!-- <a class="topMove" href="#" @click="topMove">
      <span class="hidden">위로가기</span>
      <i class="fa-solid fa-futbol"></i>
    </a> -->
  <v-footer dark padless >
    
    <v-card flat tile class="white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        It was made by a developer who likes and loves soccer. The reason why I like soccer is because of the biggest advantage of soccer that no sports in the world can match. The advantage is that the requirements for a game to be established are the most lax. It's a bare-body sport that doesn't require any equipment other than a ball, and this alone overwhelms the majority of sports.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vue with Vuetify with Oilpaint!</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
    </footer>
  </template>
  
  <style>
    .copy{color: #fff; font-size: 16px;
      background: #333; padding: 15px 0; }
    .topMove{     
      display: block;
      position: fixed;
      bottom: 50px;
      right: 50px;
      width: 50px;
      height: 50px;
      font-size: 2em;
      text-align: center;
      z-index: 100;
      transition: all .1s;
      color: #4CA91A;
      }
  </style>
  
  <script>
   export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    // methods:{
    //   topMove: function() {
    //     window.scrollTo({top: 0, behavior: "smooth"});
    //   }
    // }
  }
  
  </script>