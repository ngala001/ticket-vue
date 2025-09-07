<template>
    <div class="container mx-auto pt-7">
        <MatchCard/>
        <p>{{ homeTeam }}- {{ awayTeam }}- {{ matchId }}</p>
    </div>
</template>

<script setup lang="ts">
import MatchCard from '@/components/MatchCard.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const matchId = route.params.id as string
const homeTeam = route.params.homeTeam as string
const awayTeam = route.params.awayTeam as string

</script>

<style scoped>

</style>