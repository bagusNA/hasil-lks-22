<script setup>
import {RouterView} from 'vue-router';
import {store} from "./store/store";
import Navbar from "./components/Navbar.vue";

store.getFromLocal();
</script>

<template>
  <Navbar />

  <router-view />
</template>

<style scoped>
</style>
