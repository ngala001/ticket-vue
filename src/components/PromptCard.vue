<template>
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center">
       <div class="bg-base-200 px-4 min-w-sm rounded-lg shadow-lg">
         <div class="py-3 grid gap-3">
             <div class="grid gap-4 place-content-center">
                 <p class="text-lg font-semibold">{{ message }}</p>
                <CircleCheckBig class="justify-self-center text-green-400 size-8 check-animate"/>
             </div>
             <div class="flex justify-end">
                <button @click="emit('ok')" class="btn btn-error btn-sm">Ok</button>
             </div>
         </div>
       </div>
    </div>
</template>

<script setup lang="ts">
import { CircleCheckBig } from 'lucide-vue-next';
import { defineEmits, defineProps } from 'vue';

 defineProps<{
    message: string
 }>();

const emit = defineEmits<{
    (e: "ok"): void
}>();
 
</script>

<style scoped>
  @keyframes pop-check {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

.check-animate {
  animation: pop-check 0.5s ease-out forwards;
}
</style>