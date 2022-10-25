<script setup>
import {RouterLink} from 'vue-router';
import {inject, onBeforeMount, ref} from "vue";
import {authGet} from "../helpers/authGet";

const url = inject('endpoint') + '/api/v1/forms';
const forms = ref(null);

onBeforeMount(async () => {
 const res = await authGet(url);
  forms.value = res.forms;
});

</script>

<template>
  <main>
    <div class="hero py-5 bg-light">
      <div class="container">
        <RouterLink :to="{ name: 'form-create' }"
          class="btn btn-primary"
        >
          Create Form
        </RouterLink>
      </div>
    </div>

    <div class="list-form py-5">
      <div class="container">
        <h6 class="mb-3">List Form</h6>

        <template v-for="form in forms">
          <RouterLink
                      :to="`/form/detail/${form.slug}`"
                      class="card card-default mb-3"
          >
            <div class="card-body">
              <h5 class="mb-1">{{ form.name }}</h5>
              <small class="text-muted">@{{ form.slug }} {{ form.limit_one_response ? '(limit for 1 response)' : '' }}</small>
            </div>
          </RouterLink>

        </template>
      </div>
    </div>

  </main>
</template>
