import { createApp } from 'vue'

import App from './App'
import router from '@/app/router'

import './assets/styles/main.scss'

const init = async () => {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}

init()
