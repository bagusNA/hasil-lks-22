<script setup>
import {inject, reactive} from "vue";
import {authPost} from "../../helpers/authPost";

const url = inject('endpoint') + '/api/v1/forms';

const form = reactive({
  name: null,
  slug: null,
  description: null,
  allowed_domains: null,
  limit_one_response: false
});

const submitAction = async () => {
  const domains = form.allowed_domains.toString().split(',');

  const res = await authPost(url, {
    name: form.name,
    slug: form.slug,
    description: form.description,
    allowed_domains: domains,
    limit_one_response: form.limit_one_response,
  });

  console.log(res);
}

</script>

<template>
  <main>
    <div class="hero py-5 bg-light">
      <div class="container">
        <h2>Create Form</h2>
      </div>
    </div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4">

            <form action="#" @submit.prevent="submitAction">
              <!-- s: input -->
              <div class="form-group mb-3">
                <label for="name" class="mb-1 text-muted">Form Name</label>
                <input v-model="form.name"
                    type="text" id="name" name="name" class="form-control" autofocus />
              </div>

              <!-- s: input -->
              <div class="form-group my-3">
                <label for="slug" class="mb-1 text-muted">Form Slug</label>
                <input v-model="form.slug"
                    type="text" id="slug" name="slug" class="form-control" />
              </div>

              <!-- s: input -->
              <div class="form-group my-3">
                <label for="description" class="mb-1 text-muted">Description</label>
                <textarea v-model="form.description"
                    id="description" name="description" rows="4" class="form-control"></textarea>
              </div>

              <!-- s: input -->
              <div class="form-group my-3">
                <label for="allowed-domains" class="mb-1 text-muted">Allowed Domains</label>
                <input v-model="form.allowed_domains"
                    type="text" id="allowed-domains" name="allowed_domains" class="form-control" />
                <div class="form-text">Separate domains using comma ",". Ignore for public access.</div>
              </div>

              <!-- s: input -->
              <div class="form-check form-switch" aria-colspan="my-3">
                <input v-model="form.limit_one_response"
                    type="checkbox" id="limit_one_response" name="limit_one_response" class="form-check-input" role="switch"/>
                <label class="form-check-label" for="limit_one_response">Limit to 1 response</label>
              </div>

              <div class="mt-4">
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>
