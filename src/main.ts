import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './composable/apollo'

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
});

const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
