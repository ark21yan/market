<template>
    <div class="flex container mx-auto mt-10" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Главная
                </NuxtLink>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <NuxtLink to="/catalog" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2">Каталог</NuxtLink>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">Товар</span>
                </div>
              </li>
            </ol>
    </div>

    <div class="container mx-auto p-2 mt-12">
        <div class="grid grid-cols-1 gap-32 lg:grid-cols-2 mt-8">
            <div class="flex flex-col items-center justify-center w-full h-auto">
                <swiper  :spaceBetween="10" class="m-auto w-full rounded-lg" :thumbs="{ swiper: thumbsSwiper }" :modules="[ SwiperThumbs]" >
                     <swiper-slide class="swiper-slide flex flex-col products gap-2 bg-white p-2 " >
                        <img :src="product.image" class="w-full rounded-3xl object-contain h-96"/>
                     </swiper-slide>                     
                     <swiper-slide class="swiper-slide flex flex-col products gap-2 bg-white p-2 " >
                        <img :src="product.image" class="w-full rounded-3xl object-contain h-96"/>
                     </swiper-slide>                     
                     <swiper-slide class="swiper-slide flex flex-col products gap-2 bg-white p-2 " >
                        <img :src="product.image" class="w-full rounded-3xl object-contain h-96"/>
                     </swiper-slide>                     
                     <swiper-slide class="swiper-slide flex flex-col products gap-2 bg-white p-2 " >
                        <img :src="product.image" class="w-full rounded-3xl object-contain h-96"/>
                     </swiper-slide>                     
                     
                </swiper>

                <swiper @swiper="setThumbsSwiper" :spaceBetween="13" :rewind="true" :slidesPerView="3" class="mt-8 w-full" :modules="[ SwiperThumbs]">
                     <swiper-slide class="swiper-slide flex flex-col products gap-2" >
                        <img :src="product.image" class="w-full rounded-3xl cursor-pointer h-48 object-contain bg-white p-2"/>                        
                     </swiper-slide>
                     <swiper-slide class="swiper-slide flex flex-col products gap-2" >
                        <img :src="product.image" class="w-full rounded-3xl cursor-pointer h-48 object-contain bg-white p-2"/>                        
                     </swiper-slide>
                     <swiper-slide class="swiper-slide flex flex-col products gap-2" >
                        <img :src="product.image" class="w-full rounded-3xl cursor-pointer h-48 object-contain bg-white p-2"/>                        
                     </swiper-slide>
                     <swiper-slide class="swiper-slide flex flex-col products gap-2" >
                        <img :src="product.image" class="w-full rounded-3xl cursor-pointer h-48 object-contain bg-white p-2"/>                        
                     </swiper-slide>
                     
                </swiper>                
            </div>            
            <div class="flex flex-col w-full shadow-lg rounded-3xl bg-white h-auto self-start relative">
                <div class="p-4">
                    <p class="text-2xl pb-2">{{product.title}}</p>
                    <p class="text-2xl py-2">Описание</p>
                    <p class="text-base">{{product.description}}</p> 
                    <div class="flex flex-col">
                        <p class="text-2xl py-2 font-bold">{{product.price}}$</p>      
                        <button class="text-white my-2 border-2 border-fuchsia-700 rounded-3xl bg-fuchsia-700 h-8 w-24 hover:delay-100 transition-all duration-500 hover:bg-transparent hover:text-fuchsia-700">Купить</button>                   
                    </div>
                </div>
                <button class="like w-6 absolute right-4 top-4"><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="_01_align_center" data-name="01 align center"><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z"/></g></svg></button>
                <div class="likepopup bg-white shadow-lg absolute rounded-3xl p-2 right-0 -top-4">Товар успешно добавлен в избранное</div>
            </div>
        </div>
    </div>

    <div class="container mx-auto p-2 mt-12">
        <p class="text-2xl fadeInLeft wow">Подробная информация</p>
        <div class="mb-4">
            <ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-2" role="presentation">
                    <button class="inline-block text-gray-500 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 test active" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Характеристики</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block text-gray-500 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 test" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Отзывы</button>
                </li>
            </ul>
        </div>
        <div id="myTabContent">
            <div class="bg-white p-4 rounded-2xl shadow-lg" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <p class="text-gray-500 text-sm">Тут могли быть характеристики о товаре</p>
            </div>
            <div class="bg-white p-4 rounded-2xl shadow-lg hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p class="text-gray-500 text-sm">Тут могли быть отзывы товара</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id;
    const {data:product} = await useFetch(uri)

    let thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    }

    
</script>

