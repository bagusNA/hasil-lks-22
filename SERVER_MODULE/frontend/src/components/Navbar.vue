<script setup>
import {useRoute, useRouter} from "vue-router";
import {authPost} from "../helpers/authPost";
import {inject} from "vue";
import {store} from "../store/store";

const url = inject('endpoint') + '/api/v1/auth/logout';
const route = useRoute();
const router = useRouter();

const logoutAction = async () => {
  await authPost(url);

  store.clearAll();
  alert('Logout success!');
  router.push({ name: 'login' });
}
</script>

<template>
  <nav v-if="route.name !== 'login'"
       class="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Formify</RouterLink>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Administrator</a>
        </li>
        <li class="nav-item">
          <a
              @click.prevent="logoutAction"
              href="#" class="btn bg-white text-primary ms-4"
          >Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>