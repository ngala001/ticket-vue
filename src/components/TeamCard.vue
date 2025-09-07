<script setup lang="ts">
  defineProps<{
   logo: string,
   name: string

  }>()

</script>
<template>
   <div class="border max-w-lg py-2 px-3 shadow-lg rounded-lg">
      <div class="grid grid-cols-2">
        <div class="place-content-center justify-self-center">
            <img :src="logo" class="size-24" alt="logo">
        </div>
          <div class="flex flex-col">
             <h2 class="py-1 text-center font-bold rounded-2xl bg-stone-400 px-2">{{ name }}</h2> 
              <div class="mt-2">
                 <h1 class="text-lg font-semibold">stadium details</h1>
                 <div class="bg-indigo-200 rounded-lg py-2 px-4">
                     <p>Name:</p>
                     <p>location:</p>
                     <p>Capacity:</p>
                 </div>
              </div>
          </div>
      </div>
   </div>
</template>