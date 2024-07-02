import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure correct path to your router setup
import './assets/styles.css';


createApp(App)
  .use(router)
  .mount('#app');
