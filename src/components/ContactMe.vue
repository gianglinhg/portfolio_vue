<template>
  <section class="section bg-light-primary dark:bg-gray-800">
    <div class="container mx-auto">
      <div class="flex flex-col items-center text-center">
        <h2 class="section-title">Contact me</h2>
        <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi eaque incidunt at mollitia
          laboriosam magni totam illum aperiam esse corrupti eveniet, exercitationem dolor itaque, rerum neque porro
          magnam. Magnam!</p>
      </div>
      <div class="flex flex-col lg:flex-row lg:gap-x-8">
        <div class="flex flex-1 flex-col item-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
          <div class="flex flex-col lg:flex-row lg:gap-x-4">
            <div class="text-accent w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>

            </div>
            <div>
              <h4 class="font-body text-xl mb-1">Đặt câu hỏi ?</h4>
              <p class="text-paragraph mb-1">I am here to help you</p>
              <p class="text-accent font-nomal">Email me at linhbq89@gmail.com</p>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row lg:gap-x-4">
            <div class="text-accent w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h4 class="font-body text-xl mb-1">Vị trí</h4>
              <p class="text-paragraph mb-1">Tân phú, HCM</p>
              <p class="text-accent font-nomal">Saving clients</p>
            </div>
          </div>
        </div>
        <form class="space-y-8 w-full max-w-md">
          <div class="flex gap-8 ">
            <div>
              <input type="text" class="input" placeholder="Tên của bạn" />
              <!-- <span v-if="form.errors.name" class="text-sm m-2 text-red-400">{{ form.errors.name }}</span> -->
            </div>
            <div>
              <input type="email" class="input" placeholder="Mail của bạn" />
              <!-- <span v-if="form.errors.email" class="text-sm m-2 text-red-400">{{ form.errors.email }}</span> -->
            </div>
          </div>
          <textarea class="textarea" name="message" id="message" placeholder="Nội dung" spellcheck="false"></textarea>
          <!-- <span v-if="form.errors.message" class="text-sm m-2 text-red-400">{{ form.errors.message }}</span> -->
          <button class="btn btn-lg bg-accent hover:bg-[#65451F] text-white w-full">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>