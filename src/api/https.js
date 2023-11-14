// axios二次封装
import { https, leanflowHttps } from './index.js';
import { myCryptoJs,myDeCryptoJs } from '@/utils/sc.js';
// 获取pubkey
const getPubKeyApi = () => {
    return leanflowHttps({
        method: 'GET',
        url: '/api/user/pubkey'
    });
};

// 登录
const loginBeforeApi = (data) => {
    return leanflowHttps({
        method: 'POST',
        url: '/api/user/login',
        data
    });
};

// 登录之后
const loginAfterApi = (data) => {
    return leanflowHttps({
        method: 'POST',
        url: '/api/user/pwd',
        data
    });
};

// 获取token
const getTokenApi = (data) => {
    return leanflowHttps({
        method: 'POST',
        url: '/api/user/login/uid',
        data
    });
};
// ----------------------------------------------
// 请求判断是否进行了2FA认证
const checkTwoFAApi = (data) => {
    let SCINNER = myCryptoJs(`${JSON.stringify(data)}-${Date.now()}`);
    // let res = myDeCryptoJs(SCINNER)
    return https({
        method: 'POST',
        headers: {
            sign: SCINNER,
            // signResult:res
        },
        url: '/midware/otp/verification/login',
        data
    });
};
// 请求判断是否进行了2FA认证
const checkAuthenticationApi = (data) => {
    return https({
        method: 'POST',
        url: '/midware/otp/authentication',
        data
    });
};

// 判断登录成功的标志
// const loginSuccessApi = (params) => {
//     return https({
//         method: 'GET',
//         url: '/midware/user/get_login_info',
//         params
//     });
// };

// loginnew 提交表单
const submitFormsApi = (data) => {
    return https({
        method: 'POST',
        url: '/midware/user/register',
        data
    });
};
// 验证是否是已经注册的账号
const getAllDataApi = () => {
    return https({
        method: 'GET',
        url: '/midware/admin/register_data'
    });
};

//注册2FA
const checkTwoFARegisterApi = (data) => {
    let SCINNER = myCryptoJs(`${JSON.stringify(data)}-${Date.now()}`);

    return https({
        method: 'POST',
        headers: {
            sign: SCINNER
        },
        url: '/midware/otp/verification/register',
        data
    });
};

// 门户
const reportShowApi = (data) => {
    return https({
        method: 'POST',
        url: '/midware/admin/report_show',
        data
    });
};

// 发送验证码
const sendEmailCodeApi = (data) => {
    return https({
        method: 'POST',
        url: '/midware/admin/verification_code',
        data
    });
};

// 重置密码
const changePasswordApi = (data) => {
    return https({
        method: 'POST',
        url: '/midware/admin/update_user_password',
        data
    });
};

// login 富文本
const getNoticeApi = (data) => {
    return https({
        method: 'GET',
        url: '/midware/admin/login_data'
    });
};

export {
    getPubKeyApi,
    checkTwoFAApi,
    checkAuthenticationApi,
    loginBeforeApi,
    loginAfterApi,
    getTokenApi,
    submitFormsApi,
    getAllDataApi,
    checkTwoFARegisterApi,
    reportShowApi,
    sendEmailCodeApi,
    changePasswordApi,
    getNoticeApi
};
