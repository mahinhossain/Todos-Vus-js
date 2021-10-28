<template>
  <h1>Todos</h1>
  <h1>{{ counter }}</h1>
  <h1>{{ counter2 }}</h1>
  <h4>{{ mycounter }}</h4>
  <h1>{{ mysearxh }}</h1>

  <input
    type="text"
    placeholder="Search"
    v-model="search"
    @input="handlesearch(search)"
    class="card-body"
  />

  <input type="number" placeholder="text" v-model="value" />
  <button @click="addToCounter(value)">+ ADD</button>
  <div class="row">
    <div v-for="item in allproducts" :key="item.name" class="col-md-3">
      <div class="card-body bg-light">
        <h4 class="text-success">Name:{{ item.name }}</h4>
        <h6 class="text-danger">{{ item.price }}</h6>
        <button class="btn-sm btn-danger" @click="handledelete(item.id)">
          delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "ToDos",

  data() {
    return {
      value: 1,
      search: "",
    };
  },
  computed: {
    ...mapState(["counter", "counter2"]),
    ...mapGetters(["mycounter", "mysearxh", "allproducts"]),
  },
  methods: {
    ...mapMutations(["addToCounter"]),
    ...mapActions(["getproducts", "handledelete", "handlesearch"]),
  },
  created() {
    this.getproducts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
