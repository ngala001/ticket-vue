<script setup lang="ts">
 import { Button } from './ui/button';
 import { Search } from 'lucide-vue-next';
 import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectLabel
} from './ui/select';
import MatchCard from './MatchCard.vue';

</script>

<template>
  <main class="py-6 min-h-[91.55vh] oveflow-y-auto bg-black/10">
    <div class="container mx-auto">
       <div 
         class="flex flex-col md:flex-row py-4 gap-5 md:gap-3 w-[80%] bg-base-100 mx-auto border md:h-22 items-center justify-center px-6 rounded-2xl">
          <Select>
             <SelectTrigger class="w-full">
               <SelectValue placeholder="Choose your team"/>
             </SelectTrigger>
             <SelectContent>
               <SelectGroup>
                 <SelectLabel>Available teams</SelectLabel>
                 <SelectItem value="gor">Gor</SelectItem>
               </SelectGroup>
             </SelectContent>
          </Select>
          <Select>
             <SelectTrigger class="w-full">
               <SelectValue placeholder="location"/>
             </SelectTrigger>
             <SelectContent>
               <SelectGroup>
                 <SelectLabel>Stadiums</SelectLabel>
                 <SelectItem value="gor">Nyayo National Stadium</SelectItem>
               </SelectGroup>
             </SelectContent>
          </Select>
          
          <Button variant="outline" class="w-32 cursor-pointer">
            <Search/>
            Search
          </Button>
       </div>
       <h1 class="mt-12 px-4 text-2xl font-poppins">Upcoming matches</h1>
       <div class="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-3 py-4 rounded-lg">
         <MatchCard/>
         <MatchCard/>
         <MatchCard/>
       </div>
    </div>
  </main>
</template>
<style scoped>
 .font-poppins {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: normal;
}
</style>
