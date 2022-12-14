<template>
    <p class="text-2xl fadeInLeft wow">{{title}}</p>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-16">       
        <div v-for="category in categorys" class="card">
            <a  href="#" class="flex flex-col shadow-lg rounded-3xl items-center justify-center bg-white hover:delay-100 transition-all duration-500 hover:scale-105">
                <img src="https://res.cloudinary.com/dbvlvmb1r/image/upload/v1667025525/xtrike-me-gk-402-_D0_98_D0_B3_D1_80_D0_BE_D0_B2_D0_B0_D1_8F-_D0_9A_D0_BB_D0_B0_D0_B2_D0_B8_D0_B0_D1_82_D1_83_D1_80_D0_B0_idh4sr.jpg" alt="">
                <p class="my-4">
                    {{category}}
                </p>
            </a>
        </div>            
    </div>
</template>

<script setup>
    const { data: categorys} = await useLazyFetch('https://fakestoreapi.com/products/categories')
    const props = defineProps({
        title:String,
    })    
</script>

