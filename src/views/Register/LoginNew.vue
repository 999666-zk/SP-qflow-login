<template>
    <!-- ===== -->
    <div class="login-box">
        <div class="login-box-top-area">
            <div class="login-title">
                <span>Scholarship Management Gateway System</span>
            </div>
            <div class="login-top-text">
                <span>Registering</span>
            </div>
        </div>
        <transition name="slide-fade">
            <template v-if="isShow">
                <!-- <template v-if="false"> -->
                <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
                    <div>
                        <img :src="sendData.qrCode" alt="" width="240" />
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
                            <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en_US" target="_blank">
                                Microsoft Authenticator App</a
                            >Scan QR code
                        </p>
                    </div>
                    <div class="stepbtn">
                        <el-button type="primary" class="registeringbtn" @click="nextPage">Next</el-button>
                    </div>
                </div>
            </template>
            <template v-else>
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
                            <span style="color: grey; line-height: 24px">{{ $t('message.codeDes') }}</span>
                        </div>
                        <el-form-item class="form-items">
                            <div class="box-form-out">
                                <div class="box-form-out-in-box">
                                    <div class="box-form-out-inner">
                                        <el-button class="spbtn backbtn" @click="backQrCode">Back</el-button>
                                        <el-button type="primary" class="spbtn registeringbtn" @click="submitCode('ruleFormCode')"
                                            ><span>{{ $t('message.ok') }}</span></el-button
                                        >
                                    </div>
                                </div>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </template>
        </transition>
    </div>
</template>

<script>
import JSEncrypt from 'jsencrypt';
import { submitFormsApi, checkAuthenticationApi } from '@/api/https.js';
import '@/assets/css/index.css';
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
        userIds: Number,
        sendData: Object
    },
    components: {},
    data() {
        return {
            // 控制显隐
            isShow: true,

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
            EMAILS: '',
            userid: '',
            loading: true,

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
                        trigger: 'blur'
                    }
                ],
                userEmail: [
                    {
                        pattern:
                            /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                        message: this.$t('message.msgEmail'),
                        trigger: 'blur'
                    }
                ],
                otheruser: [
                    {
                        required: true,
                        message: this.$t('message.msgOther'),
                        trigger: 'blur'
                    }
                ],
                password: [{ required: true, message: this.$t('message.msgpassword'), trigger: 'blur' }]
            };
        },
        rulesCode() {
            return {
                code: [
                    {
                        pattern: /^\d{6}$/,
                        message: this.$t('message.spCodemsg'),
                        trigger: 'blur'
                    }
                ]
            };
        }
    },
    methods: {
        nextPage() {
            this.isShow = false;
        },
        // 重置表单
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //验证token的第一次登录
        submitFormToken(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.allObj.userData.useQingFlowVersion <= 4.5) {
                        this.loginBefore();
                    } else {
                        this.loginAfter();
                    }
                }
            });
        },
        // 验证code
        async submitCode(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    const { code } = this.CodeFormData;
                    const params = { userId: this.sendData.formData.nric, checkCode: code };
                    console.log(params);
                    await this.checkAuthentication(params);
                }
            });
        },
        // 判定方式
        async checkAuthentication(params) {
            await checkAuthenticationApi(JSON.stringify(params)).then(
                async (res) => {
                    const { code } = res.data;
                    if (code === 0) {
                        // checkcode 判定成功
                        this.$notify.success({
                            title: 'success',
                            message: `2FA verification succeeded`,
                            duration: 0,
                            position: 'bottom-left',
                            showClose: true
                        });
                        // 重新提交表单
                        await this.submitForms();
                    }
                },
                (err) => {
                    const { code, message } = err.response.data;
                    this.$notify.error({
                        title: 'error',
                        message: `Message:${message};errorCode:${code}`,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            );
        },

        // 重新提交表单
        async submitForms() {
            await submitFormsApi(JSON.stringify({ ...this.sendData.formData, checkCode: this.CodeFormData.code })).then(
                async (res) => {
                    const { code } = res.data;
                    if (code === 0) {
                        // 清除session
                        await sessionStorage.clear();
                        // 注册成功
                        this.$router.push('/registrationsuccess');
                    }
                },
                (err) => {
                    const { code, message } = err.response.data;
                    if (code === 40103) {
                        this.$notify.error({
                            title: 'error',
                            dangerouslyUseHTMLString: true,
                            message: ` <div style="padding: 10px 6px;">
                                                <div><strong>Message:</strong> The phone number is already registered</div>
                                                <div><strong>errorCode:</strong> ${code}</div>
                                               </div>`,
                            duration: 0,
                            position: 'bottom-left',
                            showClose: true
                        });
                    } else {
                        this.$notify.error({
                            title: 'error',
                            message: `Message:${message};errorCode:${code}`,
                            duration: 0,
                            position: 'bottom-left',
                            showClose: true
                        });
                    }
                }
            );
        },
        backQrCode() {
            this.isShow = true;
        }
    }
};
</script>
<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
@import '@/assets/scss/PcLoginForm.scss';
@import '@/assets/scss/MobileLoginForm.scss';

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
a::after {
    content: '' !important;
    width: 0px !important;
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
.stepbtn {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}

.box-form-out-inner {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
}

.registeringbtn {
    background: #fb9337;
    border-color: #fb9337;
    transition: all 0.3s;
    &:hover {
        background: #ffb061;
        border-color: #ffb061;
    }
}
.tips {
    line-height: 24px;
    a {
        color: #fb9337;
    }
}
.backbtn {
    transition: all 0.3s;
    &:hover {
        background: #fff2e5;
        border-color: #ffb061;
        color: #fb9337;
    }
}
</style>
