<template>
  <div class="container">
    <form class="from-group col-5" @submit.prevent="handlesubmit">
      <input
        type="text"
        placeholder="name"
        v-model="name"
        class="form-control"
      />
      <input
        type="number"
        placeholder="price"
        v-model="price"
        class="form-control"
      />

      <button class="btn btn-success" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    ...mapActions(["addProduct"]),
    handlesubmit() {
      this.addProduct({ name: this.name, price: this.price });
      this.$swal("success");
    },
  },
};
</script>

<style>
</style>