<template>
    <header class="bg-white h-28 md:h-20 flex flex-col md:justify-center">
        <div class="flex flex-row text-base items-center justify-around py-2">
            <div class="flex flex-row items-center justify-around">
                <NuxtLink to="/"><img src="@/assets/img/header/logo.svg" alt="" class="hover:delay-100 transition-all duration-500 hover:scale-105 w-10 md:w-12 m-2"></NuxtLink>
                <p class="mx-2 w-16 lg:w-24">Умный текст</p>
                <button class="bg-fuchsia-700 flex flex-row rounded-3xl items-center justify-center order-first mx-2 md:mx-0 md:order-last shrink-0" id="toggler">
                    <img src="@/assets/img/header/button.svg" alt="" class="w-6 h-6 my-1 md:mx-3 mx-2">
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
</template>

