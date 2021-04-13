import { createApp } from 'vue'
import App from './App.vue'
import a from 'lodash';
import b from 'ant-design-vue';
import c from 'element-plus';
import router from './router';

const app = createApp(App);
app.use(b)
app.use(c)
app.use(router)

router.isReady().then(() => app.mount('#app'))

