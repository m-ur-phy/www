<template>
    <footer>
  <v-bottom-navigation
    :value="value"
    color="primary"
    horizontal
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
    </footer>
  </template>
  
  <style>
       .copy{color: #fff; font-size: 16px;
          background: #333; padding: 15px 0; }
  </style>
  
  <script>
  export default {
    
  }
  </script>