<template>
    <p class="text-2xl fadeInLeft wow">{{title}}</p>
    <swiper :navigation="true" class="m-auto w-full mt-6" :slides-per-view="'auto'" :space-between="32" >
        <swiper-slide v-for="product in products" class="swiper-slide flex flex-col products gap-2" >
            <NuxtLink :to="`/catalog/${product.id}`" class="p-2 bg-white rounded-3xl shadow-lg">
                <img  :src="product.image" alt="" class="w-full object-contain aspect-square">
            </NuxtLink>
            <p class="text-xl font-bold"><span>{{product.price}}</span>$</p>   
            <p class="description h-20 test-base">{{product.description}}</p>   
            <button class="text-white border-2 border-fuchsia-700 rounded-3xl bg-fuchsia-700 h-8 w-24 hover:delay-100 transition-all duration-500 hover:bg-transparent hover:text-fuchsia-700">Купить</button>          
        </swiper-slide>
    </swiper>
</template>

<script setup>
    const { data: products } = await useFetch('https://fakestoreapi.com/products');     
    const props = defineProps({
        title:String,
    })    
</script>

<style>
.swiper-slide{
    @apply w-64;
} 

.products .description{    
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    padding: 2px;
}
</style>