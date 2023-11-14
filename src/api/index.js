import { isProd } from '@/config';
import axios from 'axios';
const leanflowHttps = (config) => {
    // const { url } = config;
    // const regs = /\/api/;
    // // 生产环境判断
    // let resUrl = isProd ? (regs.test(url) ? url : `${FLAGS}${url}`) : url;

    const instance = axios.create({
        baseURL: isProd ? '' : '/api'
    });
    return instance(config);
};

const https = (config) => {
    const instance = axios.create({
        baseURL: isProd ? '' : '/midware'
    });
    return instance(config);
};

export { https, leanflowHttps };
