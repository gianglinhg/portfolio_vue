<template>
  <div class="bg-slate-200 dark:bg-slate-900">
    <!-- Header -->
    <Header :user="user?.name"/>
    <main class="min-h-screen">
      <slot />
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Header from "./Header.vue";
import Footer from "./Footer.vue";

// const user = computed(() => page.props.auth.user)
</script>