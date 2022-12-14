<template> 
    <header class="bg-white h-28 md:h-20 flex flex-col md:justify-center">
        <div class="flex flex-row text-base items-center justify-around py-2">
            <div class="flex flex-row items-center justify-around">
                <NuxtLink to="/"><img src="img/header/logo.svg" alt="" class="hover:delay-100 transition-all duration-500 hover:scale-105 w-10 md:w-12 m-2"></NuxtLink>
                <p class="mx-2 w-16 lg:w-24">Умный текст</p>
                <button class="bg-fuchsia-700 flex flex-row rounded-3xl items-center justify-center order-first mx-2 md:mx-0 md:order-last shrink-0" id="toggler">
                    <img src="img/header/button.svg" alt="" class="w-6 h-6 my-1 md:mx-3 mx-2">
                    <span class="hidden text-white mr-2 md:block">Каталог</span>
                </button>
            </div>
            <div class="pl-4 hidden md:block grow lg:grow-0 lg:w-1/2">
                <input type="text" placeholder="Поиск"  class="p-2 bg-white border-2 border-fuchsia-700 rounded-3xl w-full h-8">
            </div>
            <div class="flex flex-row items-center justify-around md:hidden">
                <NuxtLink to="/" class="mx-2">
                    <img src="https://res.cloudinary.com/dbvlvmb1r/image/upload/v1667196915/heart_ny6a28.png" alt="" class="w-7 h-7">
                </NuxtLink>
                <NuxtLink to="/catalog/basket" class="mx-2">
                    <img src="https://res.cloudinary.com/dbvlvmb1r/image/upload/v1667198777/bag_sl22h8.png" alt="" class="w-7 h-7">
                </NuxtLink>
                <NuxtLink to="/" class="mx-2">
                    <img src="https://res.cloudinary.com/dbvlvmb1r/image/upload/v1667198857/clipboard_1_rit1vm.png" alt="" class="w-7 h-7">
                </NuxtLink>
            </div>
            <div class="flex flex-row items-center justify-around hidden md:flex">
                <NuxtLink to="/" class="mx-2 hover:delay-200 transition-all duration-500 border-b-2 border-white hover:border-b-2 hover:border-fuchsia-700">Избранное</NuxtLink>
                <NuxtLink to="/basket" class="mx-2 hover:delay-200 transition-all duration-500 border-b-2 border-white hover:border-b-2 hover:border-fuchsia-700">Корзина</NuxtLink>
                <NuxtLink to="/" class="mx-2 hover:delay-200 transition-all duration-500 border-b-2 border-white hover:border-b-2 hover:border-fuchsia-700">Заказы</NuxtLink>
            </div>
        </div>
        <div class="pl-4 md:hidden grow my-2">
            <input type="text" placeholder="Поиск" class="bg-white border-2 border-fuchsia-700 rounded-3xl w-full h-8">
        </div>
    </header>
    <NuxtLoadingIndicator class="h-screen"/>
    <!-- <div class="w-full flex">
        <div id="mobile__nav" class="fixed top-0 left-0 flex flex-col h-screen w-full md:w-1/2 pt-12 bg-white text-fuchsia-800 transform -translate-x-full transition duration-300 ease-in-out z-30">
            <svg id="toggler__expanded" class="w-6 h-6 absolute top-4 left-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <div class="p-4 flex justify-between items-center">
                <p class="text-2xl text-black">Каталог</p>
                <img src="img/catalog/1.png" alt="" class="w-16">
            </div>
            <div class="w-10/12 mx-auto flex justify-center items-center my-2 hidden lg:flex fadeInLeftBig wow">
                <div class="bg-black border border-black rotate-45 w-1 h-1"></div>
                <div class="bg-black border border-black w-full h-px"></div>
                <div class="bg-black border border-black rotate-45 w-1 h-1"></div>
            </div>
            <a class="w-10/12 mx-auto p-4 flex justify-between items-center hover:bg-fuchsia-100 p-4 px-6 transition duration-200 ease-in-out" href="Pages/catalog.html">
                <span class="" >Категория 1</span>
                <img src="img/catalog/category.png" alt="" class="w-4">
            </a>     
            <a class="w-10/12 mx-auto p-4 flex justify-between items-center hover:bg-fuchsia-100 p-4 px-6 transition duration-200 ease-in-out" href="Pages/catalog.html">
                <span class="" >Категория 2</span>
                <img src="img/catalog/category.png" alt="" class="w-4">
            </a>  
            <a class="w-10/12 mx-auto p-4 flex justify-between items-center hover:bg-fuchsia-100 p-4 px-6 transition duration-200 ease-in-out" href="Pages/catalog.html">
                <span class="" >Категория 3</span>
                <img src="img/catalog/category.png" alt="" class="w-4">
            </a>    
            <div class="w-10/12 mx-auto flex justify-center items-center my-2 hidden lg:flex fadeInLeftBig wow">
                <div class="bg-black border border-black rotate-45 w-1 h-1"></div>
                <div class="bg-black border border-black w-full h-px"></div>
                <div class="bg-black border border-black rotate-45 w-1 h-1"></div>
            </div>
            <div class="p-2 self-center text-black fixed bottom-0">© 2022 Copyright: <a href="https://t.me/fire83274" target="_blank" class="border-b border-black hover:border-fuchsia-700 hover:delay-100 transition-all duration-500">noname</a></div>
        </div>
        <div class="w-full h-screen fixed top-0 hidden z-10 bg-gray-900 opacity-70" id="overlay"></div>
    </div> -->  
    <slot />    
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
                <img class="w-6" src="img/footer/vk.png" alt="" >
              </a>
              <a href="https://github.com/fire8327"  class="hover:delay-100 transition-all duration-500 hover:scale-110">
                <img class="w-6" src="img/footer/github.png" alt="" >
              </a>
              <a href="https://t.me/fire83274" class="hover:delay-100 transition-all duration-500 hover:scale-110">
                <img class="w-6" src="img/footer/telegram.png" alt="" >
              </a>
            </div>
        </div>
    </div>
</footer>
</template>

