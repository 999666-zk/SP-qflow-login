<template>
    <!-- ===== -->
    <div class="login-box">
        <div class="login-box-top-area">
            <div class="login-title">
                <span>Scholarship Management Gateway System</span>
            </div>
            <div class="login-top-text">
                <span>Log In</span>
            </div>
        </div>
        <transition name="plus-icon">
            <template v-if="pageOneShow">
                <!-- <template v-if="false"> -->
                <div class="login-form">
                    <transition name="fade" mode="out-in">
                        <div class="login-other" v-if="styleData.login_type === 'sso'">
                            <button class="workwechat-login" v-for="item in allObj.loginWays" :key="item.SyName">
                                <a class="workwechat" :title="item.WayName" :href="item.WayToUrl">
                                    <p class="login-font">
                                        <img class="workwechat-img" :src="item.WayImgUrl" alt="" />
                                        {{ item.WayName | capitalize }}
                                    </p>
                                </a>
                            </button>
                        </div>
                        <div v-else>
                            <el-form ref="ruleForm" :rules="rules" class="demo-ruleForm" :model="ruleFormData">
                                <el-form-item
                                    class="form-items"
                                    :prop="
                                        EMAIL_REGEX.test(ruleFormData.username)
                                            ? 'userEmail'
                                            : MOBILENUM_REGEX.test(ruleFormData.username)
                                            ? 'username'
                                            : 'otheruser'
                                    "
                                >
                                    <el-input clearable v-model="ruleFormData.username" placeholder="Please enter your email"></el-input>
                                    <!-- @input="getEmail" -->
                                </el-form-item>
                                <!-- -------------- -->
                                <el-form-item class="form-items" prop="password">
                                    <el-input
                                        v-model="ruleFormData.password"
                                        placeholder="Enter password"
                                        show-password
                                        clearable
                                        @keyup.enter.native="submitFormToken('ruleForm')"
                                    >
                                    </el-input>
                                </el-form-item>
                                <el-form-item v-if="isAdmin">
                                    <div id="text_login">
                                        <div class="forget-password" @click="toForgetPage">
                                            <span>Forgot Password?</span>
                                        </div>
                                        <!-- <div class="forget-password" @click="toRegisterPage">
                                            <span>Register</span>
                                        </div> -->
                                    </div>
                                </el-form-item>
                                <!-- --------- -->
                                <el-form-item class="form-items">
                                    <div class="box-form-out">
                                        <div class="box-form-out-in-box">
                                            <div class="box-form-out-inner">
                                                <el-button class="btn" @click="submitFormToken('ruleForm')"><span>LOGIN</span></el-button>
                                                <div class="forget-pwd">
                                                    <!-- <a @click="toRepassword">忘记密码</a> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-form>
                            <!-- 验证 -->
                            <el-dialog
                                title="Swipe And Verify"
                                :visible.sync="dialogVisible"
                                :width="dialogWidth"
                                :close-on-click-modal="false"
                            >
                                <DragVerify
                                    :message="{ isPass, dialogVisible, isFailed }"
                                    @sendMessage="sendMessage"
                                    :key="mainKey"
                                    @sendFiledMessage="sendFiledMessage"
                                />
                            </el-dialog>
                        </div>
                    </transition>
                    <div class="bottom-text-signup" v-if="isAdmin">
                        <div>
                            <p>Don’t have an account? <span @click="toSignUp">Sign Up</span></p>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else-if="pageTwoShow">
                <!-- <template v-else-if="false"> -->
                <div>
                    <el-form ref="ruleFormCode" :rules="rulesCode" :model="CodeFormData">
                        <div style="margin-bottom: -20px">
                            <span style="font-weight: 600; font-size: 16px">2FA Code</span>
                        </div>
                        <el-form-item class="form-items" prop="code" style="margin-top: 40px">
                            <el-input
                                v-model="CodeFormData.code"
                                :placeholder="$t('message.spCodemsg')"
                                clearable
                                @keyup.enter.native="submitCode('ruleFormCode')"
                            >
                            </el-input>
                        </el-form-item>
                        <div style="margin-top: 20px; margin-bottom: 10px">
                            <span style="color: grey; line-height: 18px">{{ $t('message.codeDes') }}</span>
                        </div>
                        <el-form-item class="form-items">
                            <div class="box-form-out">
                                <div class="box-form-out-in-box">
                                    <div class="box-form-out-inner">
                                        <el-button v-show="needBind" class="spbtn backbtn" @click="backQrCode">Back</el-button>
                                        <el-button class="spbtn registeringbtn" @click="submitCode('ruleFormCode')"
                                            ><span>{{ $t('message.ok') }}</span></el-button
                                        >
                                        <div class="forget-pwd">
                                            <!-- <a @click="toRepassword">忘记密码</a> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </template>
            <template v-else>
                <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
                    <div>
                        <img :src="QRCodeUrl" alt="" width="240" />
                    </div>
                    <div>
                        <p class="tips">
                            Please use
                            <a
                                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&pli=1"
                                target="_blank"
                                >Google Authenticator App</a
                            >
                            or
                            <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en_US" target="_blank"
                                >Microsoft Authenticator App</a
                            >
                            Scan QR code
                        </p>
                        <!-- <p class="tips" style="margin-top: 15px">
                            After scanning the code and binding, please jump to the verification page<a
                                href="#"
                                target="_self"
                                class="spclick"
                                @click="toCodeOther"
                                >Click To Jump</a
                            >
                        </p> -->
                        <div class="stepbtn">
                            <el-button type="primary" class="registeringbtn" @click="nextPage">Next</el-button>
                        </div>
                    </div>
                </div>
            </template>
        </transition>
    </div>
</template>

<script>
import JSEncrypt from 'jsencrypt';
import DragVerify from '@/components/DragVerify.vue';
import { isMobile } from '@/utils/fun.js';
import { getPubKeyApi, checkTwoFAApi, checkAuthenticationApi, loginBeforeApi, loginAfterApi, getTokenApi } from '@/api/https.js';
import '../assets/css/index.css';
export default {
    filters: {
        capitalize: function (value) {
            return value + this.$t('message.login');
        }
    },
    props: {
        allObj: Object,
        logo_path: String,
        styleData: Object,
        isAdmin: Boolean
    },
    components: { DragVerify },
    data() {
        return {
            needBind: false,
            dialogWidth: '',
            // 滑块
            dialogVisible: false,
            isPass: false,
            isFailed: false,
            // 计时器
            timer: null,
            timer2: null,
            timer3: null,
            ruleFormData: {
                username: '',
                password: ''
            },

            EMAIL_REGEX:
                /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            MOBILENUM_REGEX: /^\d{4,11}$/,
            pubKey: '',
            EMAILS: '',
            userid: '',
            loading: true,

            //选择状态
            pageOneShow: null,
            pageTwoShow: null,

            QRCodeUrl: '',
            CodeFormData: {
                code: ''
            },
            userIdsq: '',
            exToken: '',
            resultUri: ''
        };
    },
    computed: {
        rules() {
            return {
                username: [
                    {
                        pattern: /^\d{4,11}$/,
                        message: this.$t('message.msgIphone'),
                        trigger: ['blur', 'change']
                    }
                ],
                userEmail: [
                    {
                        pattern:
                            /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                        message: this.$t('message.msgEmail'),
                        trigger: ['blur', 'change']
                    }
                ],
                otheruser: [
                    {
                        required: true,
                        message: this.$t('message.msgOther'),
                        trigger: ['blur', 'change']
                    }
                ],
                password: [{ required: true, message: this.$t('message.msgpassword'), trigger: ['blur', 'change'] }]
            };
        },
        rulesCode() {
            return {
                code: [
                    {
                        pattern: /^\d{6}$/,
                        message: this.$t('message.spCodemsg'),
                        trigger: ['blur', 'change']
                    }
                ]
            };
        }
    },
    methods: {
        // 获取失败状态
        sendFiledMessage(val) {
            console.log(val, 'pp');
            // if (val) {
            //     this.dialogVisible = false;
            //     this.$notify.error({
            //         title: 'error',
            //         message: ``,
            //         duration: 0,
            //         position: 'bottom-left',
            //         showClose: true
            //     });
            // }
        },

        // 获取验证状态
        async sendMessage(val) {
            const { isPass } = val;
            this.isPass = isPass;
            setTimeout(async () => {
                this.dialogVisible = false;

                if (this.allObj.userData.useQingFlowVersion <= 4.5) {
                    this.loginBefore();
                } else {
                    this.loginAfter();
                }
            }, 200);
        },

        // 取消表单
        cancelSubmitForm() {
            this.dialogVisibleTips = false;
            this.isPass = false;
            this.mainKey = this.mainKey + 1;
        },
        handleClose() {
            this.dialogVisibleTips = false;
            this.isPass = false;
            this.mainKey = this.mainKey + 1;
        },

        nextPage() {
            this.pageOneShow = false;
            this.pageTwoShow = true;
        },
        backQrCode() {
            this.pageOneShow = false;
            this.pageTwoShow = false;
        },

        // 重置密码
        toForgetPage() {
            this.$router.push('/repassword');
        },
        // 注册
        toSignUp() {
            this.$router.push('/register');
        },
        // 重置表单
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        // 获取pubKey
        async getPubKey() {
            await getPubKeyApi().then((res) => {
                const { code } = res.data;
                console.log(res, 'herer');
                if (code === 0) {
                    this.pubKey = res.data.data.pubkey;
                } else {
                    this.$notify.error({
                        title: 'error',
                        message: `errorCode:${code}`,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            });
        },
        //验证token的第一次登录
        submitFormToken(formName) {
            // 需要滑块验证
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 是否通过了验证
                    if (!this.isPass) {
                        this.dialogVisible = true;
                    } else {
                        this.dialogVisible = false;
                    }
                }
            });
        },
        // 跳转链接
        toCodeOther() {
            this.pageOneShow = false;
            this.pageTwoShow = true;
        },
        // 验证code
        submitCode(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const { code } = this.CodeFormData;
                    const params = { userId: this.userIdsq, checkCode: code };
                    // console.log(params);
                    this.checkAuthentication(params);
                }
            });
        },

        // 请求判断是否进行了2FA认证
        async checkTwoFA() {
            await checkTwoFAApi(JSON.stringify({ userId: this.userIdsq })).then(
            // await checkTwoFAApi(JSON.stringify({ userId: 'test' })).then(
                (res) => {
                    if (res.data.code === 0) {
                        console.log(res.data.result);
                        const { need2FA, needBind, qrCode, uri } = res.data.result;
                        this.needBind = needBind;
                        this.resultUri = uri;
                        if (need2FA) {
                            if (needBind) {
                                // 需要绑定 和 验证
                                this.pageOneShow = false;
                                this.pageTwoShow = false;
                                this.QRCodeUrl = qrCode;
                            } else {
                                // 不需要绑定 需要验证
                                this.pageOneShow = false;
                                this.pageTwoShow = true;
                            }
                        } else {
                            // 其他
                            document.cookie =
                                this.styleData.qflowType + 'QflowToken=' + this.exToken + ';path=/;domain=.' + this.styleData.qflowDomain;
                            // 在这里进行页面的成功跳转
                            setTimeout(() => {
                                window.location.href = uri;
                            }, 2000);
                        }
                    } else {
                        this.$notify.error({
                            title: 'error',
                            message: `Message：${res.data.message}`,
                            duration: 0,
                            position: 'bottom-left',
                            showClose: true
                        });
                        this.resetForm('ruleForm');
                    }
                },
                (err) => {
                    this.$notify.error({
                        title: 'erros',
                        message: `error status:${err.response.status}`,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            );
        },

        // 判定方式
        async checkAuthentication(params) {
            await checkAuthenticationApi(JSON.stringify(params)).then(
                async (res) => {
                    if (res.data.code === 0) {
                        // checkcode 判定成功
                        document.cookie =
                            this.styleData.qflowType + 'QflowToken=' + this.exToken + ';path=/;domain=.' + this.styleData.qflowDomain;
                        this.$notify.success({
                            title: 'success',
                            message: `2FA verification succeeded`,
                            duration: 0,
                            position: 'bottom-left',
                            showClose: true
                        });
                        // 跳转登录
                        setTimeout(() => {
                            window.location.href = this.resultUri;
                        }, 2200);
                    } else {
                        this.$notify.error({
                            title: 'error',
                            message: `Message:${res.data.message}`,
                            duration: 0,
                            position: 'bottom-left',
                            showClose: true
                        });
                        this.resetForm('ruleForm');
                    }
                },
                (err) => {
                    this.$notify.error({
                        title: 'error',
                        message: `error status:${err.response.status}`,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            );
        },

        // async loginSuccess() {
        //     await loginSuccessApi({ userId: this.userIdsq }).then(
        //         (res) => {
        //             if (res.data.code === 0) {
        //                 const { system, deviceType, lastLoginTime } = res.data.result;
        //                 // 是否为首次登录
        //                 if (lastLoginTime == null) {
        //                     setTimeout(() => {
        //                         this.$notify.success({
        //                             title: 'Login Successfully',
        //                             dangerouslyUseHTMLString: true,
        //                             message: ` <div style="padding: 10px 6px;">
        //                                         <div><strong>Hello, Welcome To Log In :-)</strong></div>
        //                                         <br/>
        //                                        </div>`,
        //                             duration: 0,
        //                             position: 'bottom-left',
        //                             showClose: true
        //                         });
        //                     }, 1000);
        //                 } else {
        //                     setTimeout(() => {
        //                         this.$notify.success({
        //                             title: 'Login Successfully',
        //                             dangerouslyUseHTMLString: true,
        //                             message: ` <div style="padding: 10px 6px;">
        //                                         <div>Last Your System：<span>${system}</span></div>
        //                                         <div>Last Equipment type：<span>${deviceType}</span></div>
        //                                         <div>Last Login Time：<span>2023-08-22 15:30:30</span></div>
        //                                        </div>`,
        //                             // ${lastLoginTime}

        //                             duration: 0,
        //                             position: 'bottom-left',
        //                             showClose: true,
        //                             customClass: 'spclass'
        //                         });
        //                     }, 1000);
        //                 }
        //             } else {
        //                 this.$notify.error({
        //                     title: 'error',
        //                     message: `Message:${res.data.message}`,
        //                     duration: 0,
        //                     position: 'bottom-left',
        //                     showClose: true
        //                 });
        //                 this.resetForm('ruleForm');
        //             }
        //         },
        //         (err) => {
        //             this.$notify.error({
        //                 title: 'error',
        //                 message: `error status:${err.response.status}`,
        //                 duration: 0,
        //                 position: 'bottom-left',
        //                 showClose: true
        //             });
        //         }
        //     );
        // },

        // 登录逻辑的兼容
        // 4.5之前的版本 **直接换取token**
        async loginBefore() {
            let encryptor = new JSEncrypt();
            encryptor.setPublicKey(this.pubKey);
            let rsapwd = encryptor.encrypt(this.ruleFormData.password);
            let info = null;
            if (this.EMAIL_REGEX.test(this.ruleFormData.username)) {
                info = {
                    email: this.ruleFormData.username,
                    areaCode: '86',
                    mobile: '',
                    password: rsapwd
                };
            } else if (this.MOBILENUM_REGEX.test(this.ruleFormData.username)) {
                info = {
                    email: '',
                    areaCode: '86',
                    mobile: this.ruleFormData.username,
                    password: rsapwd
                };
            }
            await loginBeforeApi(JSON.stringify(info)).then(
                (res) => {
                    if (res.data.token != undefined) {
                        // ===================edit-april-start===================
                        // 登录;
                        // var token = res.data.token;
                        // document.cookie =
                        //     this.styleData.qflowType + 'QflowToken=' + token + ';path=/;domain=.' + this.styleData.qflowDomain;
                        // window.location.href = this.styleData.homeUrl;
                        //  请求判断是否进行了2FA认证
                        const {
                            token,
                            userInfo: {
                                lastWsInfo: { exUserId }
                            }
                        } = res.data;
                        this.userIdsq = exUserId;
                        this.exToken = token;
                        this.checkTwoFA(exUserId);
                        // ===================edit-april-end===================
                    } else {
                        if (res.data.statusCode == '41110') {
                            this.$notify.error({
                                title: 'error',
                                message: 'You have entered an invalid username or password. Please try again.',
                                duration: 0,
                                position: 'bottom-left',
                                showClose: true
                            });
                            this.resetForm('ruleForm');
                            // 刷新验证码
                            this.dialogVisibleTips = false;
                            this.isPass = false;
                            this.mainKey = this.mainKey + 1;
                        } else {
                            this.$notify.error({
                                title: 'error',
                                message: `errorCode:${res.data.statusCode}`,
                                duration: 0,
                                position: 'bottom-left',
                                showClose: true
                            });
                            this.resetForm('ruleForm');
                        }
                    }
                },
                (err) => {
                    this.$notify.error({
                        title: 'error',
                        message: `errorCode:${err.response.status}`,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            );
        },

        // 4.5之后的版本 **间接换取token**
        async loginAfter() {
            let encryptor = new JSEncrypt();
            encryptor.setPublicKey(this.pubKey);
            console.log(this.pubKey);
            let rsapwd = encryptor.encrypt(this.ruleFormData.password);

            let info = null;
            if (this.EMAIL_REGEX.test(this.ruleFormData.username)) {
                info = {
                    email: this.ruleFormData.username,
                    areaCode: '86',
                    mobile: '',
                    password: rsapwd,
                    loginType: 'email'
                };
            } else if (this.MOBILENUM_REGEX.test(this.ruleFormData.username)) {
                info = {
                    email: '',
                    areaCode: '86',
                    mobile: this.ruleFormData.username,
                    password: rsapwd,
                    loginType: 'phone'
                };
            }
            await loginAfterApi(JSON.stringify(info)).then(
                (res) => {
                    if (res.status === 200 && res.data.code === 0) {
                        // console.log(res.data.data);
                        // 进行组织数据 获取token操作
                        let secondObj = res.data.data[0];
                        console.log(secondObj);
                        // this.getToken(secondObj);
                    } else {
                        if (res.data.statusCode == '41110') {
                            // this.$message.error("账号或密码输入错误");
                            this.$notify.error({
                                title: 'error',
                                message: 'You have entered an invalid username or password. Please try again.',
                                duration: 0,
                                position: 'bottom-left',
                                showClose: true
                            });
                            this.resetForm('ruleForm');
                            this.dialogVisibleTips = false;
                            this.isPass = false;
                            this.mainKey = this.mainKey + 1;
                        } else {
                            this.$notify.error({
                                title: 'error',
                                message: `errorCode:${res.data.statusCode}`,
                                duration: 0,
                                position: 'bottom-left',
                                showClose: true
                            });
                            this.resetForm('ruleForm');
                        }
                    }
                },
                (err) => {
                    this.$notify.error({
                        title: 'error',
                        message: `errorCode:${err.response.status}`,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            );
        },

        async getToken(obj) {
            await getTokenApi(JSON.stringify(obj)).then(
                (res) => {
                    if (res.status === 200 && res.data.code === 0) {
                        if (res.data.data.token != undefined) {
                            var token = res.data.token;
                            document.cookie =
                                this.styleData.qflowType + 'QflowToken=' + token + ';path=/;domain=.' + this.styleData.qflowDomain;
                            window.location.href = this.styleData.homeUrl;
                            console.log('token');
                        }
                    } else {
                        if (res.data.statusCode == '41110') {
                            this.$notify.error({
                                title: 'error',
                                message: 'You have entered an invalid username or password. Please try again.',
                                duration: 0,
                                position: 'bottom-left',
                                showClose: true
                            });
                            this.resetForm('ruleForm');
                            this.dialogVisibleTips = false;
                            this.isPass = false;
                            this.mainKey = this.mainKey + 1;
                        } else {
                            this.$notify.error({
                                title: 'error',
                                message: `errorCode:${res.data.statusCode}`,
                                duration: 0,
                                position: 'bottom-left',
                                showClose: true
                            });
                            this.resetForm('ruleForm');
                        }
                    }
                },
                (err) => {
                    this.$notify.error({
                        title: 'error',
                        message: `errorCode:${err.response.status}`,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            );
        }
    },
    created() {
        if (isMobile()) {
            // alert('移动端')
            this.dialogWidth = '100%';
        } else {
            // alert("pc端")
            this.dialogWidth = '30%';
        }
    },
    mounted() {
        // 测试存储
        // 获取指定的userid判断自动登录还是手动登录
        this.getPubKey();
        this.pageOneShow = true;
        this.pageTwoShow = false;
        // checkTwoFAApi(JSON.stringify({ userId: 'jindaming' }));
        // this.checkTwoFA();
    }
};
</script>
<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
@import '../assets/scss/PcLoginForm.scss';
@import '../assets/scss/MobileLoginForm.scss';

.stepbtn {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
.registeringbtn {
    background: #fb9337;
    border-color: #fb9337;
    color: white;
    transition: all 0.3s;
    &:hover {
        background: #ffb061;
        border-color: #ffb061;
        color: white;
    }
}
.tips {
    line-height: 24px;
    a {
        color: #fb9337;
    }
}
a::after {
    content: '' !important;
    width: 0px !important;
}
.backbtn {
    transition: all 0.3s;
    &:hover {
        background: #fff2e5;
        border-color: #ffb061;
        color: #fb9337;
    }
}

.box-form-out-inner {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
}

::v-deep .el-input__inner {
    transition: all 0.3s;
}
::v-deep .el-input__inner:hover {
    border-color: #ffb061;
    border-right-width: 1px !important;
    z-index: 1;
}
::v-deep .el-input__inner:focus {
    border-color: #ffb061 !important;
    box-shadow: 0 0 0 2px #fb933733 !important;
    border-right-width: 1px !important;
    outline: 0 !important;
}
::v-deep .el-select .el-input__inner:focus {
    border-color: #ffb061;
    box-shadow: 0 0 0 2px #fb933733;
    border-right-width: 1px;
    outline: 0;
}

::v-deep .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
    background-color: #f5f7fa;
    color: #ffb061;
}

::v-deep .el-select-dropdown__item.selected {
    color: #ffb061 !important;
    font-weight: 700;
}
#imgoutbox {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-title {
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;
    color: #acb3bd;
    font-family: 'PingFang SC';
}
.login-top-text {
    margin-top: 4px;
    font-family: 'PingFang SC';
    color: #121315;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
}
.forget-password {
    height: max-content;
    line-height: 22px;
    margin-top: -4px;
    cursor: pointer;
    span {
        color: #fb9337;
    }
}
::v-deep .el-button--text {
    padding-bottom: 16px !important;
}
.bottom-text-signup {
    text-align: center;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #767e89;
    span {
        cursor: pointer;
        color: #fb9337;
    }
}
::v-deep .el-form-item:nth-child(3) {
    margin-bottom: 16px;
}
#text_login {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
::v-deep .el-dialog {
    width: max-content !important;
    min-width: 320px !important;
    border-radius: 24px;
}
</style>
