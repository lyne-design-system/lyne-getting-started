import { createApp } from 'vue'
import App from './App.vue'
import '@sbb-esta/lyne-components/dist/lyne-components/lyne-components.css';
import { defineCustomElements } from '@sbb-esta/lyne-components/dist/esm/loader';

defineCustomElements();

createApp(App).mount('#app')
