<template>
  <Link :href="project.project_url" class="group flex flex-col items-center text-center cursor-pointer">
    <div class="mb-4">
      <img :src="project.image" :alt="project.name" class="rounded-lg h-56">
    </div>
    <h3 class="group-hover:text-light-tail-100 capitalize text-accent text-sm mb-3">
      {{ project.skill.name }}
    </h3>
    <h3 class="group-hover:text-light-tail-100 text-2xl font-semibold capitalize mb-3">
      {{ project.name }}
    </h3>
  </Link>
</template>
<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
  project: Object
})
</script>