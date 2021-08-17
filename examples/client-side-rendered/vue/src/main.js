import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElements } from 'lyne-test/dist/esm/loader';

defineCustomElements();

createApp(App).mount('#app')
