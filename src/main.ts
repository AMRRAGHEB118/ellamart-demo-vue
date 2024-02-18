import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './route'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import mitt from 'mitt';


const Emitter = mitt();


const vuetify: any = createVuetify({
    components,
    directives,
})

const app = createApp(App).provide('Emitter', Emitter).use(vuetify).use(router)

app.config.globalProperties.Emitter = Emitter

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        Emitter: typeof Emitter
    }
}

app.mount('#app')
