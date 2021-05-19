<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <side-navigation />
    </v-navigation-drawer>

    <v-app-bar app class="indigo darken-2 white--text">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="yellow--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
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
