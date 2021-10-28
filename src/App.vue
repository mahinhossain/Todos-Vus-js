<template>
  <Addtodos />
  <Todos />
</template>

<script>
import Todos from "./components/ToDos.vue";
import Addtodos from "./components/AddTodos.vue";

export default {
  name: "App",
  components: {
    Todos,
    Addtodos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
