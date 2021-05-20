<template>
  <v-dialog max-width="700px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mx-2" fab dark small color="green" v-bind="attrs" v-on="on">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </template>
    <v-card class="rounded-0">
      <v-card-title>Add New Product</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Add
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
