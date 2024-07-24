
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const app = createApp(App)

app.component('AppHeader', AppHeader);
app.component('AppFooter', AppFooter)

app.use(createPinia())
app.use(router)

app.mount('#app')
