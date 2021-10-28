import axios from "axios";
const state = {
  counter: 11,
  counter2: 121,
  products: [],
  searchfrommut: "",
};
const actions = {
  async handlesearch({ commit }, searchText) {
    commit("mySeach", searchText);
  },
  async getproducts({ commit }) {
    const response = await axios.get("http://localhost:7777/products");
    console.log("response :>> ", response.data);
    commit("setProducts", response.data);
  },
  async addProduct({ commit }, product) {
    const response = await axios.post(
      "http://localhost:7777/products",
      product
    );

    commit("newProducts", response.data);
  },
  async handledelete({ commit }, id) {
    const response = await axios.delete("http://localhost:7777/products/" + id);
    console.log("response ffff :>> ", response);

    actions.getproducts({ commit });

    commit("removeProducts", id);
  },
};
const mutations = {
  addToCounter(state, payload) {
    state.counter = state.counter + payload;
  },
  mySeach(state, payload) {
    console.log("test search", payload);

    state.searchfrommut = payload;
    // state.counter = state.counter + payload;
  },

  setProducts: (state, products) => (state.products = products),
  newProducts: (state, product) => state.products.unshift(product),
  removeProducts: (state, id) =>
    state.products.filter((product) => product.id != id),
};

const getters = {
  mycounter: (state) => state.counter,
  allproducts: (state) => state.products,

  mysearxh: (state) => state.searchfrommut,
};
export default {
  state,
  getters,
  mutations,
  actions,
};
