<template>
  <section class="bg-light-tail-100 dark:bg-gray-900 py-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-8 md-grid-flox-col">
        <div class="flex items-center justify-center" v-for="skill in skills.value" :key="skill.id">
          <img class="lg:h-16" :src="skill.image" :alt="skill.name" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { ref, defineProps } from 'vue';
  export default {
    data(){
      return {
        skills: ref([]),
      }
    },
    mounted(){
      axios.get('/json/skills.json').then(response => {
        this.skills.value = response.data
      })
    }
  }
</script>