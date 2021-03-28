<template>
<v-app>
  <v-system-bar app color="orange lighten-3">
  <!-- <v-system-bar app color="primary" lights-out dark> -->
  <!-- <v-system-bar app> -->
  <!-- <v-system-bar app window dark> -->
  <!-- 최상단메뉴 -->
    <span>12시:30분</span>  <b>:</b> 
     <v-icon>mdi-message</v-icon>
    <span>10 unread messages</span> 
   <v-spacer></v-spacer>
    <v-icon>mdi-minus</v-icon>
    <v-icon>mdi-checkbox-blank-outline</v-icon>
    <v-icon>mdi-close</v-icon>
    
    <!-- mobile
    <v-spacer></v-spacer>
    <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-battery</v-icon>
    <span>12:30</span>
    -->
  </v-system-bar>

  <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" color="grey lighten-3" permanent>
  <!-- <v-navigation-drawer app floating permanent> -->
  <!-- <v-navigation-drawer app> -->
      <!-- left메뉴 --> 
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <!-- <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img> -->
          <v-img src="./assets/youngjunekim.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>YoungjuneKim</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <!-- <v-divider></v-divider> -->

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>

  <v-app-bar app height="56">
    <!-- -->
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> |
    <router-link to="/axiosTest">AxiosTest</router-link> |
    <router-link to="/hackerNews">HackerNews</router-link> | 
    <router-link to="/vuetifyTableSample">VuetifyTableSample</router-link>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid class="grey lighten-5">
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app height="40" color="orange lighten-3" lights-out dark> 
      <!-- 맨밑바닥 -->
      {{ new Date().getFullYear() }} — <strong> Web Orange</strong>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
        { title: 'About', icon: 'mdi-forum' },
      ],
      mini: true,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],      
  }),
};
</script>
