<script>
import axios from 'axios'
export default{

    data(){
        return{
            cardData:"",
           
        }
    },
  methods: {
        loadData() {
          fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
              this.cardData = data;
            })
            .catch(error => {
              console.error('Terjadi kesalahan:', error);
            });
        }
      },
      mounted() {
        this.loadData();
      },

 
}
//https://api.adviceslip.com/advice
</script>
<template>
    <div class="card flex justify-center items-center h-screen bg-bgfull" id="card"> 
         <div class="flex flex-col items-center bg-card max-w-sm rounded-lg shadow-lg relative" v-for="isi in cardData">
               <p class=" text-cardl text-center text-xs w-48 pt-6 ">ADVICE #{{isi.id}} </p>
                <text class="w-64 text-lg font-bold text-center pt-2 pb-3 lg:pb-9 lg:px-6 text-cardp ">
                  <h1>"{{isi.advice}}"</h1>
                </text>
                <img src="../assets/images/pattern-divider-desktop.svg" alt="" class="hidden sm:block pb-12" width="240">
                <img src="../assets/images/pattern-divider-mobile.svg" alt="" class="pb-12 sm:hidden"  width="240">
                <div class="max-w-lg bg-cardbut rounded-full absolute -bottom-5">
                           <button class="sm:p-3 p-2" @click="loadData">
                        <img src="../assets/images/icon-dice.svg" alt="">
                           </button>
                </div>
        </div>
  </div>
</template>