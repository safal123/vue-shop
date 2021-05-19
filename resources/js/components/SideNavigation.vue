<template>
  <v-card height="100%" width="256" class="mx-auto indigo darken-2" tile>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title white--text">
          Admin Panel
        </v-list-item-title>
        <v-list-item-subtitle class="white--text">
          Welcome, Safal
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        { title: "Products", icon: "mdi-image", to: "/products" },
      ],
      right: null,
    };
  },
};
</script>