<template>
   <div class="container mx-auto p-2 mt-12" id="block2">
        <p class="text-2xl fadeInLeft wow">Оформление заказа</p>
        <div class="flex justify-between mt-8">
            <p class="text-xl">Товары в заказе</p>
            <NuxtLink to="/" class="text-white border-2 border-fuchsia-700 rounded-3xl bg-fuchsia-700 h-8 w-48 hover:delay-100 transition-all duration-500 hover:bg-transparent hover:text-fuchsia-700 flex items-center justify-center"><span>Добавить товары</span></NuxtLink>
        </div>
        <div class="flex flex-col">
            <div v-for="product in products" class="flex flex-col md:flex-row bg-white rounded-3xl p-4 relative mt-8">
                <img :src="product.image" alt="" class="w-64 rounded-3xl">
                <div class="flex flex-col md:w-96 md:ml-6">
                    <p class="text-base font-bold">{{product.title}}</p>
                    <p class="text-base">{{product.description}}</p>
                    <p class="text-xl font-bold"><span>{{product.price}}</span>₽</p>
                    <div class="flex flex-row h-10 w-32 rounded-2xl relative bg-transparent mt-1">
                        <button data-action="decrement" class=" bg-fuchsia-700 text-white hover:text-gray-700 hover:bg-transparent border-2 border-fuchsia-700 h-full w-20 rounded-l-2xl cursor-pointer outline-none">
                            <span class="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input type="number" value="1" class="outline-none focus:outline-none border-2 border-fuchsia-700 focus:ring-0 text-center w-full bg-fuchsia-700 font-semibold text-md md:text-basecursor-default flex items-center text-white outline-none" name="custom-input-number">
                        <button data-action="increment" class="bg-fuchsia-700 text-white hover:text-gray-700 hover:bg-transparent border-2 border-fuchsia-700 h-full w-20 rounded-r-2xl cursor-pointer">
                            <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                <button class="like w-6 absolute right-4 top-4" ><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="_01_align_center" data-name="01 align center"><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z"/></g></svg></button>
                <div class="likepopup bg-white shadow-lg absolute rounded-3xl p-2 right-0 -top-4">Товар успешно добавлен в избранное</div>
                </div>
            </div>           
        </div>
        <div class="flex flex-col mt-8">
            <p class="text-xl mx-1" @click="getTotalCost">Общая сумма заказа:<span class="font-bold mx-1">2100</span>$</p>
            <button class="mt-4 text-white border-2 border-fuchsia-700 rounded-3xl bg-fuchsia-700 h-8 w-48 hover:delay-100 transition-all duration-500 hover:bg-transparent hover:text-fuchsia-700">Оформить заказ</button>
        </div>
    </div>

    <div class="container mx-auto p-2 mt-12">
        <SliderProducts title="Возможно вам понравится"/>
    </div>
</template>

<script setup>
    const {data: products } = await useFetch('https://fakestoreapi.com/products?limit=3'); 
</script>

