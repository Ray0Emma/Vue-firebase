import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

app.config.globalProperties.$filters = {
    toLower(value) {
        return value.toLowerCase();
    }
}
app.mount('#app')
