<script setup>
import {RouterLink, RouterView, useRouter} from 'vue-router';

const router = useRouter();

</script>

<template>
  <nav v-if="router.currentRoute.value !== 'home'"
      class="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
    <div class="container">
      <RouterLink to="/logout">Formify</RouterLink>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Administrator</a>
        </li>
        <li class="nav-item">
          <a href="index.html" class="btn bg-white text-primary ms-4">Logout</a>
        </li>
      </ul>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
</style>
