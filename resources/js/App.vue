<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <side-navigation />
    </v-navigation-drawer>

    <v-app-bar app class="">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="orange--text">
      </v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon class="orange--text">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon class="orange--text">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideNavigation from "./components/SideNavigation.vue";
export default {
  components: { SideNavigation },
  data: () => ({ drawer: null }),
};
</script>
