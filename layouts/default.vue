<template>
    <Header></Header>
    <NuxtLoadingIndicator class="h-screen"/>
    <Transition name="fade">
        <Preloader v-if="PreloaderShow"/>
    </Transition>    
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
    <Footer></Footer>
</template>

<script setup>
    let PreloaderShow = ref(true);
    onMounted ( () =>{
        PreloaderShow.value = false;       
    });    
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }   
</style>


