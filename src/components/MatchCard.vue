<template>
    <div class="max-w-xl  border bg-base-100 shadow-sm rounded-lg font-[500]">
        <div class="">
             <h1 class="py-2 text-center">06-sep-2025</h1>
             <hr class="w-[85%] mx-auto">
             <div class="flex items-center py-3 justify-between px-3 max-w-[70%] mx-auto">
                 <div class="grid gap-3">
                    <img src="../assets/Gor-mahia.png" class="size-18" alt="logo">
                    <h1 class="font-poppins">Gor Mahia</h1>
                 </div>
                 <div>
                    <button disabled class="btn btn-sm border-0 disabled:bg-gray-700 font-bold disabled:text-black">16:00</button>
                 </div>
                 <div class="grid gap-3">
                    <img src="../assets/police.jpg" class="size-18" alt="logo">
                    <h1 class="font-poppins">Police FC</h1>
                 </div>
             </div>
             <h3 class="text-center text-sm">📍Nyayo National Stadium</h3>
             <div class="bg-black/60 flex items-center py-3 justify-between  px-4 rounded-b-lg mt-3">
                <p class="text-white">from ksh 300</p>
                <button class="btn btn-sm btn-warning">Buy now</button>
             </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>
 .font-poppins {
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-style: italic;
 }
</style>