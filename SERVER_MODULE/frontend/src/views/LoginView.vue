<script setup>
import {inject, reactive} from "vue";
import {store} from "../store/store";
import {postFetch} from "../helpers/postFetch";
import {useRouter} from "vue-router";

const router = useRouter();
const url = inject('endpoint') + '/api/v1/auth/login';

const form = reactive({
  email: 'user1@webtech.id',
  password: 'password1'
});

const loginAction = async () => {
  const data = await postFetch(url, {
    email: form.email,
    password: form.password
  });

  store.setToken(data.user.accessToken);
  store.setUser(data.user);

  alert('Login success!');
  await router.push({ name: 'home' });
}

</script>

<template>
  <main>
    <section class="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-6">
            <h1 class="text-center mb-4">Formify</h1>
            <div class="card card-default">
              <div class="card-body">
                <h3 class="mb-3">Login</h3>

                <form action="#" @submit.prevent="loginAction">
                  <!-- s: input -->
                  <div class="form-group my-3">
                    <label for="email" class="mb-1 text-muted">Email Address</label>
                    <input v-model="form.email"
                        type="email" id="email" name="email" class="form-control" autofocus />
                  </div>

                  <!-- s: input -->
                  <div class="form-group my-3">
                    <label for="password" class="mb-1 text-muted">Password</label>
                    <input v-model="form.password"
                        type="password" id="password" name="password" class="form-control" />
                  </div>

                  <div class="mt-4">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
