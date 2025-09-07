<script setup lang="ts">
 import { usePrompt } from './composable/prompt';
  import Button from './components/ui/button/Button.vue';

 const showPrompt = usePrompt()

 const createUser = async() => {
   const confirm = await showPrompt("Account created successfully");
   if(confirm) {
     
   }
 }
</script>

<template>
  <header class="py-2 shadow-sm bg-base-200 sticky top-0 z-10">
      <nav class="flex w-[85%] mx-auto items-center justify-between">
        <h1>Porshtech</h1>
        <div>
          <Button>logout</Button>
        </div>
      </nav>
    </header>
   <RouterView/>
</template>

<style scoped>

</style>
