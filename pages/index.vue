<template> 
<div class="container mx-auto mt-20 p-2">
    <swiper :loop="true" :navigation="true" :modules="modules">
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
    <product_grid />
</div>



</template>

<script >
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
export default {
  components: {
    Swiper,
    SwiperSlide,    
  },  
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style >
    .swiper {
        width: 100%;
    }

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