<script setup lang="ts">
import TeamCard from '@/components/TeamCard.vue';
import { GET_TEAMS } from '@/composable/team-actions';
import { useTeamStore } from '@/store/team-store';
import { useQuery } from '@vue/apollo-composable';
import { watchEffect } from 'vue';

 
 
 const store = useTeamStore()

 const {result, loading, error} = useQuery(GET_TEAMS)

 watchEffect(() => {

    store.setLoading(loading.value)
    store.setTeams(result.value?.teams ?? [])
    store.setError(
      error.value
      ? error.value.graphQLErrors.length
        ? error.value.graphQLErrors.map(e =>e.message).join(', ')
        : error.value.networkError
         ? "Server could not be reached. Please check your network connection"
         : "Unknow error occured, try again later"
      : null
    )

   
 })
  

</script>
<template>
    <div class="h-[91vh] pt-8">
      <div class="w-[85%] mx-auto gap-5 grid grid-cols-2">
         <div class="flex items-center h-full justify-center" v-if="store.loading">
          <div>
              <p>
                <span class="loading loading-bars"></span>
              </p>
              <p>Loading...</p>
          </div>
         </div>
         <div class="flex items-center h-full justify-center" v-if="store.error">
            <h3>{{ error }}</h3>
         </div>
         <div 
             v-for="team in store.teams" 
             :key="team.id"
             class=""
           >
             <TeamCard :logo="team.logo" :name="team.name"/>
         </div>
      </div>
    </div>
</template>


<style scoped>

</style>