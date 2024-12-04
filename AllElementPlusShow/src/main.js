import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/base.css' 
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/styles/systemColor/light.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)

app.mount('#app')
