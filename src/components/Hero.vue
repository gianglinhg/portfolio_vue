<template>
  <section id="home"
    class="lg:h-[85vh] flex items-center bg-light-primary dark:bg-dark-primary py-32 lg:py-0 overflow-hidden">
    <div class="container mx-auto h-full">
      <div class="flex flex-col md:flex-row items-center h-full pt-8">
        <div class="flex-1 flex flex-col items-center lg:items-start">
          <p class="text-lg text-accent text-md mb-[22px]">Hey, I'm Lucas</p>
          <h1
            class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
            I Build & Design <br> Web Interface
          </h1>
          <p class="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <button
            class="btn btn-md bg-accent hover:bg-[#65451F] hover:text-light-tail-500 dark:hover:text-light-tail-100 dark:hover:bg-light-secondary md:btn-lg transition-all rounded-md">
            Work with me
          </button>
        </div>
        <div class="mt-8 md:mt-0 flex flex-1 justify-end items-center h-full rounded-lg">
          <img src="/img/hero.jpg" alt="Hero img" class="rounded-lg">
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>