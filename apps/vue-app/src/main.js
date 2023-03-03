import { createApp } from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from '@stencil-ui/core/loader';

createApp(App).mount('#app')

applyPolyfills().then(() => {
  defineCustomElements();
});
