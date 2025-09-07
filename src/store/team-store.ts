import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Team {
    id: string
    name: string
    logo: string
    stadiumId: string
}


export const useTeamStore = defineStore('teams', () => {
    const teams = ref<Team[]>([]);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null)

    function setTeams(newTeams: Team[]) {
        teams.value = newTeams
    }

    function setLoading(val: boolean) {
        loading.value = val
    }

    function setError(val: string | null) {
        error.value = val
    }

  return { teams, setTeams, loading, error, setLoading, setError }

})