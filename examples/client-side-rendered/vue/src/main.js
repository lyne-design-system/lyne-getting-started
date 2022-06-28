import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElements } from '@sbb-esta/lyne-components/dist/esm/loader';

defineCustomElements();

createApp(App).mount('#app')
