<template>
  <Master>
    <Hero />
    <Promote />
    <About />
        <!-- Skills tail 100 -->
    <Skills/>
        <!-- Portfolio Primary -->
        <!-- <Portfolio :skills="skills" :projects="projects"/> -->
    <Service />
    <ContactMe />
  </Master>
</template>

<script setup>
import Master from './components/Master.vue';
import Hero from './components/Hero.vue';
import Promote from './components/Promote.vue';
import About from './components/About.vue';
import Service from './components/Service.vue';
import ContactMe from './components/ContactMe.vue';
import Skills from './components/Skills.vue';
import { ref } from 'vue';
</script>