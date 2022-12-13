<template>
    <footer>
  <template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text text-center"
    >
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

      <v-card-text class="white--text pt-0">
        nascetur ridiculus mus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus porro commodi tempora quas nulla vero ea omnis iste ab recusandae quos vel? Molestiae iste neque rerum expedita, quam animi.
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
  }
  </script>