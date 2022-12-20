<template>
    <div class="container mx-auto p-2 mt-8 bg-white flex justify-between rounded-3xl">
        <p class="text-xl p-1">Сортировка</p>        
        <div class="relative p-2 bg-fuchsia-700 text-white rounded-3xl" @click="selectShow = !selectShow">
            {{sortTitle}}
            <div class="absolute top-full left-0 text-black bg-white p-2" v-show="selectShow">
                <div @click="getBySortNumber(productsFilter,'price'), sortTitle='по стоимости по возрастанию'" class="border-b-2">по стоимости по возрастанию</div>
                <div @click="getBySortNumber(productsFilter,'price', true), sortTitle='по стоимости по убыванию'" class="border-b-2">по стоимости по убыванию</div>
                <div @click="getBySortWord(productsFilter,'title'), sortTitle='по названию по возрастанию'" class="border-b-2">по названию по возрастанию</div>
                <div @click="getBySortWord(productsFilter,'title', true),sortTitle='по названию по убыванию'" class="border-b-2">по названию по убыванию</div>
            </div>
        </div>
    </div>

    <div class="flex flex-col md:flex-row container mx-auto p-2 mt-8">
        <div class="w-full md:w-1/4 md:pr-4 bg-white px-2 rounded-3xl">
            <p class="text-2xl mt-6">Цена</p>
            <div class="py-2 relative w-full">
                
            </div>
            <div class="flex flex-row justify-between mt-2 w-full">
                <input type="text" v-model="inputPrice1">
                <input type="text" v-model="inputPrice2">
            </div>
            <div>о
                <p class="text-2xl mt-6"></p>
                <div class="flex items-center my-2">
                    <input id="checkbox1" type="checkbox" value="" class="w-4 h-4 text-fuchsia-700 bg-gray-100 rounded border-gray-300 focus:outline-none focus:ring-0" name="brand[]">
                    <label class="ml-2 text-sm font-medium text-gray-900">Первый</label>
                </div>  
                <div class="flex items-center my-2">
                    <input id="checkbox2" type="checkbox" value="" class="w-4 h-4 text-fuchsia-700 bg-gray-100 rounded border-gray-300 focus:outline-none focus:ring-0" name="brand[]">
                    <label class="ml-2 text-sm font-medium text-gray-900">Второй</label>
                </div> 
                <div class="flex items-center my-2">
                    <input id="checkbox3" type="checkbox" value="" class="w-4 h-4 text-fuchsia-700 bg-gray-100 rounded border-gray-300 focus:outline-none focus:ring-0" name="brand[]">
                    <label class="ml-2 text-sm font-medium text-gray-900">Третий</label>
                </div> 
            </div>
            <div>
                <p class="text-2xl mt-6">Цвет</p>
                <div class="flex items-center my-2" v-for="color in colors">                    
                    <label class="ml-2 text-sm font-medium text-gray-900">
                        <input type="checkbox"  :value="color" v-model="inputColors" class="w-4 h-4 text-fuchsia-700 bg-gray-100 rounded border-gray-300 focus:outline-none focus:ring-0" />
                        {{color}}
                    </label>
                </div>  
                
            </div>
            <button  class="text-white mt-10 border-2 border-fuchsia-700 rounded-3xl bg-fuchsia-700 h-8 w-24 hover:delay-100 transition-all duration-500 hover:bg-transparent hover:text-fuchsia-700">Применить</button>         
                     
        </div>
        <div class="w-full md:w-3/4 md:pl-4 mt-8 md:mt-0">
            <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 justify-center">
                <div class="flex flex-col w-full relative" v-for="product in productsFilter" :key="product.id">
                    <a href="products.html" class="hover:scale-105 transition-all hover:delay-200 duration-500"><img src="https://res.cloudinary.com/dbvlvmb1r/image/upload/v1666943504/cld-sample-5.jpg" alt="" class="w-full rounded-3xl shadow-lg"></a>
                    <p class="test-base">{{product.title}}</p>   
                    <p class="h-10 test-base">{{product.color}}</p>   
                    <p class="text-xl font-bold"><span>{{product.price}}</span>$</p>
                    <button class="text-white border-2 border-fuchsia-700 rounded-3xl bg-fuchsia-700 h-8 w-24 hover:delay-100 transition-all duration-500 hover:bg-transparent hover:text-fuchsia-700">Купить</button>          
                    <button class="like w-6 absolute right-4 top-4" onclick="test();"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="_01_align_center" data-name="01 align center"><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z"/></g></svg></button>
                    <div class="likepopup bg-white shadow-lg absolute rounded-3xl p-2 right-0 -top-4">Товар успешно добавлен в избранное</div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script setup>
    const {data:products} = await useFetch('http://localhost:3000/products');    
    let colors = ref(["white", "orange", "black"])

    let inputPrice1 = ref(100)
    let inputPrice2 = ref(200)
    let inputColors = ref([])
    const productsFilter = computed(() =>{       
        let arr =[]; 
        arr = [...products.value.filter(elem =>{return inputColors.value.includes(elem.color)})];
        arr = [...arr.filter(elem =>{
            if(Number(elem.price) >= Number(inputPrice1.value) && Number(elem.price) <=Number(inputPrice2.value)){
                return -1
            }
            return 0;
        }
        )];
        return arr
    });    

    


    let sortTitle = ref("Выберите критерий")
    let selectShow = ref(false)   
    const getBySortNumber = (arr, critery = false, rev = false)=>{
    if(critery){
        arr.sort((a,b) =>{
           return Number(a[critery]) - Number(b[critery])
        });
    }else{
        arr.sort((a,b) =>{
           return Number(a) - Number(b)
        });
    }

    if (rev) {
        arr.reverse()
    }
}
const getBySortWord = (arr, critery = false, rev = false)=>{
    productsFilter.value.sort((a,b) =>{
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }           
        return 0;
    });

    if(critery){
        arr.sort((a,b) =>{
            if (a[critery] > b[critery]) {
          return 1;
        }
        if (a[critery] < b[critery]) {
          return -1;
        }        
        return 0;
        });
    }else{
        arr.sort()
    }
    if (rev) {
        arr.reverse()
    }


} 
</script>

<style  scoped>

</style>