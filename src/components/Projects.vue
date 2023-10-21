<template>
  <div class="container mx-auto">
    <nav class="mb-12 border-b-2 border-light-tail-100 dark:text-dark-navy-100">
      <ul class="flex flex-col lg:flex-row justify-evenly items-center">
        <li class="cursor-pointer capitalize m-4">
          <button v-on:click="filterProject('all')"
            class="flex text-center px-4 py-2 hover:text-light-tail-100 dark:text-dark-navy-100">
            All
          </button>
        </li>
        <li class="cursor-pointer capitalize m-4" v-for="projectSkill in skills.data" :key="projectSkill.id">
          <button @click="filterProject(projectSkill.id)"
            class="flex text-center px-4 py-2 hover:text-light-tail-100 dark:text-dark-navy-100">
            {{ projectSkill.name }}
          </button>
        </li>
      </ul>
    </nav>
    <section class="grid gap-y-12 lg:grid-cols-3 lg:gap-8">
      <Project v-for="project in projects.data" :key="project.id" :project="project" />
    </section>
  </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import Project from './Project.vue';
const props = defineProps({
  skills: Object,
  projects: Object,
});
const filteredProject = ref(props.projects.data);

const filterProject = (id) => {
  if (id === 'all') {
    filteredProject.value = props.projects.data;
  } else {
    filteredProject.value = props.projects.data.filter(project => {
      return project.skill.id === id ;
    })
  }
}
</script>