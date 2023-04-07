import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import { 
  registerMicroApps, // 注册应用
  start // 开启方法
 } from 'qiankun'
 const apps = [
  {
    name: 'vueApp', // 应用名字
    entry: '//localhost:10000', // 默认会加载这个html 解析里面的js(这里使用的fetch) 动态的执行(子应用必须支持跨域)
    container: '#vue', // 容器名 挂载元素
    activeRule: '/vue', // 激活路径 激活规则(当访问/vue 就把这个应用挂载到#vue上)
    props:{a:1}
  },
  {
    name: 'reacrApp',
    entry: '//localhost:3000', 
    container: '#react', 
    activeRule: '/react',
  }
]
registerMicroApps(apps); // 注册应用
start({
  prefetch: false // 取消预加载
});// 开启
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app-base')
