import FastClick from 'fastclick';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'lib-flexible';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import langs from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import { getTerminalType } from './utils/fun.js';

locale.use(langs);
FastClick.attach(document.body);

Vue.config.silent = true;

// 不可关闭 对话框
// ElementUI.Dialog.props.closeOnClickModal.default = false

// 国际化
import VueI18n from 'vue-i18n';
const testJson = require('/public/table.json');
const { lang, thirdPartyLib } = testJson.data;

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: lang, // 语言标识
    // this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        zh: require('./common/lang/zh'), // 中文语言包
        en: require('./common/lang/en') // 英文语言包
    }
});

// 向head中循环插入js
function insertJsfromUrl(src) {
    var HEAD = document.getElementsByTagName('head')[0] || document.documentElement;
    var script = document.createElement('script');
    // script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', src);
    HEAD.appendChild(script);
}

//键盘
window.addEventListener('resize', function () {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function () {
            document.activeElement.scrollIntoViewIfNeeded();
        }, 0);
    }
});

// 解决FastClick在IOS中需要多次点击才能获得焦点的问题
var deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0;
var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
FastClick.prototype.focus = function (targetElement) {
    var length;
    if (
        deviceIsIOS &&
        targetElement.setSelectionRange &&
        targetElement.type.indexOf('date') !== 0 &&
        targetElement.type !== 'time' &&
        targetElement.type !== 'month' &&
        targetElement.type !== 'email'
    ) {
        length = targetElement.value.length;
        targetElement.focus(); //加入这一句话就OK了
        targetElement.setSelectionRange(length, length);
    } else {
        targetElement.focus();
    }
};

Vue.config.productionTip = true;
// axios.defaults.baseURL = '/api';
axios.defaults.withCredentials = true;
axios.defaults.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};
Vue.use(VueAxios, axios);
import './assets/css/reset.css';

Vue.use(ElementUI);
Vue.prototype.$axios = axios;

router.beforeEach(async (to, from, next) => {
    // ...
    // let terminalType = await getTerminalType();
    // console.log(terminalType,'res')
    // if (terminalType === 'mobile' && to.fullPath.indexOf('/pc') !== -1) {
    //     // mobile
    //     console.log('is_mobile');
    //     await next({ path: '/m/login' });
    // } else if (terminalType === 'pc' && to.fullPath.indexOf('/mobile') !== -1) {
    //     // pc
    //     console.log('is_pc');
    if (to.meta.title) {
        //判断是否有标题
        document.title = to.meta.title;
        if (to.path == '/content') {
            next();
        } else if (to.path == '/403') {
            next();
        } else if (to.path == '/404') {
            next();
        } else if (to.path == '/printview') {
            next();
        } else if (to.path == '/regsuccess') {
            next();
        } else {
            next();
            for (let i = 0; i < thirdPartyLib.length; i++) {
                insertJsfromUrl(thirdPartyLib[i]);
            }
        }
    }
    next();
    // } else {
    //     await next();
    // }
});

new Vue({
    i18n,
    router,
    render: (h) => h(App)
}).$mount('#app');
