import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"

// import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'
import router from './routes'

const app = createApp(App)

// app.use(Swal)
app.use(router)

app.mount('#app')
