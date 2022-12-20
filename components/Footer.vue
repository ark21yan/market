<template>
    <footer class="bg-white flex flex-col md:flex-row text-base items-center justify-around h-24 mt-8">
    <div class="p-2">© 2022 Copyright: <a href="https://t.me/fire83274" target="_blank" class="border-b border-black hover:border-fuchsia-700 hover:delay-100 transition-all duration-500">noname</a></div>
    <div class="flex flex-col md:flex-row">
        <div>
            <NuxtLink to="/" class="mx-4 hover:delay-200 transition-all duration-500 border-b-2 border-white hover:border-b-2 hover:border-fuchsia-700">
                О нас
            </NuxtLink>
            <NuxtLink to="/" class="mx-4 hover:delay-200 transition-all duration-500 border-b-2 border-white hover:border-b-2 hover:border-fuchsia-700">
                Контакты
            </NuxtLink>
        </div>
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex mt-2 space-x-6 justify-center md:mt-0">
              <a href="https://vk.com/fire83274"  class="hover:delay-100 transition-all duration-500 hover:scale-110">
                <img class="w-6" src="@/assets/img/footer/vk.png" alt="" >
              </a>
              <a href="https://github.com/fire8327"  class="hover:delay-100 transition-all duration-500 hover:scale-110">
                <img class="w-6" src="@/assets/img/footer/github.png" alt="" >
              </a>
              <a href="https://t.me/fire83274" class="hover:delay-100 transition-all duration-500 hover:scale-110">
                <img class="w-6" src="@/assets/img/footer/telegram.png" alt="" >
              </a>
            </div>
        </div>
    </div>
</footer>
</template>
