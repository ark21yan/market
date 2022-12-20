<template> 
<div class="container mx-auto mt-20 p-2">
    <swiper :loop="true" :navigation="true" class="w-full" :modules="[SwiperNavigation]">
        <swiper-slide>
          <picture>
              <source srcset="https://main-cdn.sbermegamarket.ru/upload/mnt/78c465ce-f714-4bf2-a586-626e6f41ff48.jpg" media="(min-width: 1024px)">
              <source srcset="https://main-cdn.sbermegamarket.ru/upload/mnt/c2fc9a38-dfa8-4991-a32e-0d6721cd77bd.jpg" media="(min-width: 320px)">
              <img alt="" class="md:h-80 w-full lg:h-auto">
          </picture>
        </swiper-slide>
        <swiper-slide>
            <picture>
                <source srcset="https://main-cdn.sbermegamarket.ru/upload/mnt/0ff4d8ad-d5b2-4ac0-a766-987c07e25c78.jpg" media="(min-width: 1024px)">
                <source srcset="https://main-cdn.sbermegamarket.ru/upload/mnt/57bd4847-d071-4ef9-bb65-5574554969c4.jpg" media="(min-width: 320px)">
                <img alt="" class="md:h-80 w-full lg:h-auto">
            </picture>
        </swiper-slide>
        <swiper-slide>
            <picture>
                <source srcset="https://main-cdn.sbermegamarket.ru/upload/mnt/0ff4d8ad-d5b2-4ac0-a766-987c07e25c78.jpg" media="(min-width: 1024px)">
                <source srcset="https://main-cdn.sbermegamarket.ru/upload/mnt/57bd4847-d071-4ef9-bb65-5574554969c4.jpg" media="(min-width: 320px)">
                <img alt="" class="md:h-80 w-full lg:h-auto">
            </picture>
        </swiper-slide>      
    </swiper>
</div>

<div class="container mx-auto mt-20 p-2">
    <ProductGrid title="Популярные категории"/>
</div>

<div class="container mx-auto mt-20 p-2 fadeInUpBig wow">
    <picture>
        <source srcset="https://main-cdn.sbermegamarket.ru/upload/mnt/edd30c34-1d8e-401d-bae7-c6e0584fc80d.jpg" media="(min-width: 1024px)">
        <source srcset="https://main-cdn.sbermegamarket.ru/upload/mnt/68e71bef-4e05-4ea3-af5c-b3c1f8728347.jpg" media="(min-width: 320px)">
        <img alt="" class="md:h-80 w-full rounded-xl">
    </picture>
</div>

<div class="container mx-auto mt-20 p-2">
    <Certificates />
</div>

<div class="container mx-auto mt-20 p-2">
    <Partners title="Популярные категории"/>
</div>

<div class="container mx-auto mt-20 p-2">
    <ProductGrid title="Разные категории"/>
</div>

<div class="container mx-auto mt-20 p-2">
    <sliderProducts title="Спонсируемые товары"/>
</div>

<div class="container mx-auto mt-20 p-2">
    <AboutDiscount />
</div>
</template>

<script setup>
    
</script>

<style> 
    
.swiper-button-next,.swiper-button-prev {
color:rgb(162 28 175);
}

.swiper-button-next:hover,.swiper-button-prev:hover {
    color:rgb(232 121 249);
}

.swiper-pagination-bullet-active{
    background: rgb(162 28 175);;
}
</style>