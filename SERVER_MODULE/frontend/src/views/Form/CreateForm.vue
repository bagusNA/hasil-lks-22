<script setup>
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

            <form action="detail-form.html">
              <!-- s: input -->
              <div class="form-group mb-3">
                <label for="name" class="mb-1 text-muted">Form Name</label>
                <input type="text" id="name" name="name" class="form-control" autofocus />
              </div>

              <!-- s: input -->
              <div class="form-group my-3">
                <label for="slug" class="mb-1 text-muted">Form Slug</label>
                <input type="text" id="slug" name="slug" class="form-control" />
              </div>

              <!-- s: input -->
              <div class="form-group my-3">
                <label for="description" class="mb-1 text-muted">Description</label>
                <textarea id="description" name="description" rows="4" class="form-control"></textarea>
              </div>

              <!-- s: input -->
              <div class="form-group my-3">
                <label for="allowed-domains" class="mb-1 text-muted">Allowed Domains</label>
                <input type="text" id="allowed-domains" name="allowed_domains" class="form-control" />
                <div class="form-text">Separate domains using comma ",". Ignore for public access.</div>
              </div>

              <!-- s: input -->
              <div class="form-check form-switch" aria-colspan="my-3">
                <input type="checkbox" id="limit_one_response" name="limit_one_response" class="form-check-input" role="switch"/>
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
