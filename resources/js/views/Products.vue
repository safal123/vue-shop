<template>
  <div class="pa-4">
    <!-- <div v-for="product in this.products" v-bind:key="product.id">
      {{ product.name }}
      <v-img
        v-bind:src="product.image_url"
        height="250"
        v-bind:alt="product.name"
      />
    </div> -->
    <div class="text-right mb-4">
      <v-btn class="mx-2" fab dark small color="green" @click="addProduct">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </div>
    <v-data-table
      tile
      :headers="headers"
      :items="products"
      item-key="name"
      class="elevation-1"
    >
    </v-data-table>
  </div>
</template>
<script>
export default {
  created() {
    this.fetchProducts();
  },
  computed: {
    headers() {
      return [
        {
          text: "Id",
          value: "id",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Price (USD)",
          value: "price",
        },
        {
          text: "Image",
          value: "image_url",
        },
        {
          text: "Actions",
          value: "",
        },
      ];
    },
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      await axios
        .get("https://laravel-react-redux.herokuapp.com/api/products")
        .then((response) => {
          this.products = response.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addProduct() {
      alert("Hello world..");
    },
  },
};
</script>