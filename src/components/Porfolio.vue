<template>
  <section id="portfolio" class="section bg-light-primary dark:bg-dark-primary min-h-[1400px]">
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center">
        <h2 class="section-title">New Work</h2>
        <p class="subtitle text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, cum similique ut at enim a delectus tenetur aspernatur et ipsum iste dolores accusamus nam repudiandae possimus cumque veniam omnis tempore!</p>
      </div>
    </div>
    <Projects :skills="skills" :projects="projects"/>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import Projects from './Projects.vue';
defineProps({
  skills : Object,
  projects : Object,
})
</script>