<template>
  <div class="pa-4">
    <div class="d-flex align-center mb-4 orange lighten-2 pa-2 border">
      <h3 class="white--text">All Products</h3>
      <v-spacer></v-spacer>
      <add-product></add-product>
    </div>
    <v-data-table
      tile
      :headers="headers"
      :items="products"
      item-key="name"
      class="elevation-10 rounded-0"
    >
      <template v-slot:item.price="{ item }"> ${{ item.price }}.00 </template>
      <template v-slot:item.image_url="{ item }">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          height="100"
          max-width="100"
          :src="item.image_url"
          alt="item.name"
          contains
        ></v-img>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import AddProduct from "../components/AddProduct.vue";
export default {
  created() {
    this.fetchProducts();
  },
  components: { AddProduct },
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
          sortable: false,
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
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
      let cacheProducts = localStorage.getItem("products");
      if (cacheProducts) {
        return (this.products = JSON.parse(cacheProducts));
      }
      await axios
        .get("https://laravel-react-redux.herokuapp.com/api/products")
        .then((response) => {
          localStorage.setItem(
            "products",
            JSON.stringify(response.data.products)
          );
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

<style lang="scss">
div.border {
  border-bottom: 5px solid rgb(95, 88, 86);
}
</style>