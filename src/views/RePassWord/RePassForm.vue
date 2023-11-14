<template>
    <div class="login-box">
        <div class="login-box-top-area">
            <div class="login-title">
                <span>Scholarship Management Gateway System</span>
            </div>
            <div class="login-top-text">
                <span>Reset Password</span>
            </div>
        </div>
        <div class="login-form">
            <div class="login-box">
                <div class="login-form">
                    <el-form ref="ruleForm" :model="ruleForm" class="demo-ruleForm" :rules="rules">
                        <el-form-item class="form-items" prop="usertag">
                            <el-input v-model="ruleForm.usertag" placeholder="Please enter your email address"></el-input>
                        </el-form-item>

                        <el-form-item prop="yzm">
                            <div id="spbttn">
                                <el-input
                                    v-model="ruleForm.yzm"
                                    autocomplete="off"
                                    placeholder="Please enter your code"
                                    id="spinput"
                                    style="border-right: none !important"
                                >
                                </el-input>

                                <el-button id="sp_btn" v-show="showTime" type="text" @click="sendEmail(ruleForm.yzm)">{{
                                    isFirst ? 'Send' : 'Resend'
                                }}</el-button>
                                <el-button id="sp_btn2" slot="append" type="text" disabled v-show="!showTime"
                                    >{{ sendTime }} Second</el-button
                                >
                            </div>
                        </el-form-item>

                        <!-- -------------- -->
                        <el-form-item prop="password">
                            <el-input
                                v-model="ruleForm.password"
                                show-password
                                clearable
                                type="password"
                                placeholder="Please Input Your Password"
                                @input="checkPassword"
                                @blur="hiddenDiv"
                                @focus="showDiv"
                            ></el-input>
                            <div v-if="passwordCheckResult == null">
                                <div id="card">
                                    <div>
                                        <span v-if="regexLength"
                                            ><svg
                                                t="1692502239057"
                                                class="icon"
                                                viewBox="0 0 1024 1024"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                p-id="4856"
                                                width="20"
                                                height="20"
                                            >
                                                <path
                                                    d="M874.183789 150.103705A511.970436 511.970436 0 1 0 1023.994127 511.979533a508.274925 508.274925 0 0 0-149.810338-361.875828z m-51.168617 237.365527L491.271975 718.92816a57.820537 57.820537 0 0 1-82.438327 0L201.885021 511.979533A58.673347 58.673347 0 0 1 284.891888 428.972666l165.445193 165.445193 289.955494-289.955494a58.104807 58.104807 0 0 1 41.219164-17.056205 57.365705 57.365705 0 0 1 41.219163 17.340475 58.957617 58.957617 0 0 1 0.28427 82.722597z"
                                                    fill="#2BB74A"
                                                    p-id="4857"
                                                ></path></svg
                                        ></span>
                                        <span v-else
                                            ><svg
                                                t="1692502299189"
                                                class="icon"
                                                viewBox="0 0 1024 1024"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                p-id="9338"
                                                width="20"
                                                height="20"
                                            >
                                                <path
                                                    d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64z m158.4 244.352L512 466.752 353.6 308.352l-45.248 45.248L466.752 512l-158.4 158.4 45.248 45.248L512 557.248l158.4 158.4 45.248-45.248-158.336-158.464 158.336-158.336-45.248-45.248z"
                                                    p-id="9339"
                                                    fill="#d81e06"
                                                ></path>
                                            </svg> </span
                                        >Minimum length of 12 characters
                                    </div>

                                    <div>
                                        <span v-if="regexLower"
                                            ><svg
                                                t="1692502239057"
                                                class="icon"
                                                viewBox="0 0 1024 1024"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                p-id="4856"
                                                width="20"
                                                height="20"
                                            >
                                                <path
                                                    d="M874.183789 150.103705A511.970436 511.970436 0 1 0 1023.994127 511.979533a508.274925 508.274925 0 0 0-149.810338-361.875828z m-51.168617 237.365527L491.271975 718.92816a57.820537 57.820537 0 0 1-82.438327 0L201.885021 511.979533A58.673347 58.673347 0 0 1 284.891888 428.972666l165.445193 165.445193 289.955494-289.955494a58.104807 58.104807 0 0 1 41.219164-17.056205 57.365705 57.365705 0 0 1 41.219163 17.340475 58.957617 58.957617 0 0 1 0.28427 82.722597z"
                                                    fill="#2BB74A"
                                                    p-id="4857"
                                                ></path></svg></span
                                        ><span v-else
                                            ><svg
                                                t="1692502299189"
                                                class="icon"
                                                viewBox="0 0 1024 1024"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                p-id="9338"
                                                width="20"
                                                height="20"
                                            >
                                                <path
                                                    d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64z m158.4 244.352L512 466.752 353.6 308.352l-45.248 45.248L466.752 512l-158.4 158.4 45.248 45.248L512 557.248l158.4 158.4 45.248-45.248-158.336-158.464 158.336-158.336-45.248-45.248z"
                                                    p-id="9339"
                                                    fill="#d81e06"
                                                ></path></svg
                                        ></span>
                                        <div style="margin: -38px 0px 0px 30px">
                                            Must contain at least 2 of the following: <br />uppercase, lowercase, digits and special
                                            characters
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item prop="repassword">
                            <el-input
                                v-model="ruleForm.repassword"
                                show-password
                                clearable
                                type="password"
                                placeholder="Please Input Your Password Again"
                            ></el-input>
                        </el-form-item>
                        <!-- --------- -->
                        <el-form-item class="form-items">
                            <div class="box-form-out">
                                <div class="box-form-out-in-box">
                                    <div class="box-form-out-inner">
                                        <el-button
                                            type="primary"
                                            :class="isClick ? 'cancelbtn1' : 'cancelbtn2'"
                                            @click="submitForm('ruleForm')"
                                            :disabled="isClick"
                                            >Reset Password</el-button
                                        >
                                    </div>
                                </div>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="login-box-bottom-area">
                    <div class="bottom-text-signup">
                        <div>
                            <p><span @click="toLogin">Log in</span></p>
                        </div>
                    </div>
                </div>

                <!-- 验证 -->
                <el-dialog title="Swipe And Verify" :visible.sync="dialogVisible" :width="dialogWidth" :close-on-click-modal="false">
                    <!-- <DragVerify :message="{ isPass, dialogVisible }" @sendMessage="sendMessage" :key="mainKey" /> -->
                    <DragVerify :message="{ isPass, dialogVisible }" @sendMessage="sendMessage" :key="mainKey" />
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import JSEncrypt from 'jsencrypt';
import DragVerify from '@/components/DragVerify.vue';
import { isMobile } from '@/utils/fun.js';
import { EMAIL_REG, PASSWORD_REG, REGEXLENGHT, REGEXLOWER, REGEXUPER, REGEXNUMBER, REGEXSP } from '@/common/reg/index.js';
import { getPubKeyApi, sendEmailCodeApi, changePasswordApi } from '@/api/https.js';
import '@/assets/css/index.css';
export default {
    components: { DragVerify },
    data() {
        // 密码校验
        var validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter your Password'));
            } else {
                if (this.ruleForm.password !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePassword2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter Password again'));
            } else if (value !== this.ruleForm.password) {
                callback(new Error('The new password and confirmation password do not match.'));
            } else {
                callback();
            }
        };

        return {
            TIME_COUNT: 60,
            pubKey: '',
            mainKey: 0,
            dialogWidth: '',
            isPass: false,
            dialogVisible: false,
            isClick: true,
            // 第一次发送
            isFirst: true,
            // password
            passwordCheckLoading: false,
            passwordCheckResult: null,
            regexLength: false,
            regexLower: false,
            regexUper: false,
            regexNumber: false,
            regexSp: false,

            showTime: true /* 布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
            sendTime: '' /* 倒计时 计数器 */,
            timer: null,

            ruleForm: {
                usertag: '',
                yzm: '',
                password: '',
                repassword: ''
            },
            // 控制密码的显示和隐藏
            rules: {
                usertag: [
                    { required: true, message: 'Please enter your email address', trigger: ['blur', 'change'] },
                    {
                        pattern: EMAIL_REG,
                        message: 'please enter a valid email address',
                        trigger: ['blur', 'change']
                    }
                ],
                yzm: [{ required: true, message: 'Please enter the verification code you received', trigger: ['blur', 'change'] }],
                password: [
                    { required: true, validator: validatePassword, trigger: ['blur', 'change'] },
                    {
                        pattern: PASSWORD_REG,
                        message: 'Please enter a password that meets the rules',
                        trigger: ['blur', 'change']
                    }
                ],
                repassword: [
                    { required: true, validator: validatePassword2, trigger: ['blur', 'change'] },
                    {
                        pattern: PASSWORD_REG,
                        message: 'Please enter a password that meets the rules',
                        trigger: ['blur', 'change']
                    }
                ]
            }
        };
    },
    methods: {
        checkPassword() {
            // 最小长度为 12 个字符
            REGEXLENGHT.test(this.ruleForm.password) ? (this.regexLength = true) : (this.regexLength = false);
            // //  是否包含小写字母
            PASSWORD_REG.test(this.ruleForm.password) ? (this.regexLower = true) : (this.regexLower = false);
            // // 是否包含大些字母
            // REGEXUPER.test(this.ruleForm.password) ? (this.regexUper = true) : (this.regexUper = false);
            // // 必须包含数字
            // REGEXNUMBER.test(this.ruleForm.password) ? (this.regexNumber = true) : (this.regexNumber = false);
            // // 特殊字符
            // REGEXSP.test(this.ruleForm.password) ? (this.regexSp = true) : (this.regexSp = false);
        },
        hiddenDiv() {
            let target = document.getElementById('card');
            target.style.opacity = '0';
            target.style.zIndex = '-9999';
            target.style.transition = 'all 0.6s';
        },
        showDiv() {
            let target = document.getElementById('card');
            target.style.opacity = '1';
            target.style.zIndex = '9999';
            target.style.transition = 'all 0.6s';
        },
        toLogin() {
            this.$router.push('/login');
        },
        sendEmail() {
            this.$refs.ruleForm.validateField('usertag', (errMsg) => {
                if (errMsg) {
                    // console.log('手机号校验未通过');
                } else {
                    // console.log('校验通过');
                    this.dialogVisible = true;
                    this.mainKey = this.mainKey + 1;
                }
            });
        },
        // 获取验证状态----图片拼接
        async sendMessage(val) {
            const { isPass } = val;
            this.isPass = isPass;
            this.dialogVisible = false;
            await this.sendEmailCode();
        },

        startTimes() {
            setTimeout(async () => {
                this.isClick = false;
                /*发送验证码时，开始计数，一分钟发送一次*/
                const TIME_COUNT = this.TIME_COUNT; //  更改倒计时时间
                if (!this.timer) {
                    this.sendTime = TIME_COUNT;
                    this.showTime = false;
                    this.timer = setInterval(() => {
                        if (this.sendTime > 0 && this.sendTime <= TIME_COUNT) {
                            this.sendTime--;
                        } else {
                            this.showTime = true;
                            this.isFirst = false;
                            clearInterval(this.timer); // 清除定时器
                            this.timer = null;
                        }
                    }, 1000);
                }
            }, 200);
        },

        // 发送验证码
        async sendEmailCode() {
            await sendEmailCodeApi(JSON.stringify({ email: this.ruleForm.usertag })).then(
                (res) => {
                    if (res.status == 200) {
                        if (res.data.code === 0) {
                            this.$notify.success({
                                title: 'Sent successfully',
                                duration: 0,
                                position: 'bottom-left',
                                showClose: true
                            });
                            this.startTimes();
                        } else {
                            if (res.data.code == 40011) {
                                this.$notify.error({
                                    title: 'Error',
                                    message: `User does not exist`,
                                    duration: 0,
                                    position: 'bottom-left',
                                    showClose: true
                                });
                            } else {
                                this.$notify.error({
                                    title: 'Error',
                                    message: `errorCode ${res.data.code}`,
                                    duration: 0,
                                    position: 'bottom-left',
                                    showClose: true
                                });
                            }
                        }
                    }
                },
                (error) => {
                    this.$notify.error({
                        title: 'Error',
                        message: error,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            );
        },

        // 更改密码
        async changePassword() {
            const { usertag, yzm, password } = this.ruleForm;
            let encryptor = new JSEncrypt();
            encryptor.setPublicKey(this.pubKey);
            let rsapwd = encryptor.encrypt(password);
            await changePasswordApi(JSON.stringify({ email: usertag, verificationCode: yzm, password: rsapwd })).then(
                (res) => {
                    if (res.status == 200) {
                        if (res.data.code === 0) {
                            if (res.data.result.errCode === 0) {
                                this.$notify.success({
                                    title: 'Reset Password Successfully',
                                    duration: 0,
                                    position: 'bottom-left',
                                    showClose: true
                                });
                                setTimeout(() => {
                                    this.$router.push('/login');
                                }, 3000);
                            } else {
                                this.$notify.error({
                                    title: 'Error',
                                    message: `errorCode ${res.data.result.errCode}`,
                                    duration: 0,
                                    position: 'bottom-left',
                                    showClose: true
                                });
                            }
                        } else {
                            this.$notify.error({
                                title: 'Error',
                                message: `errorCode ${res.data.code}`,
                                duration: 0,
                                position: 'bottom-left',
                                showClose: true
                            });
                        }
                    }
                },
                (error) => {
                    this.$notify.error({
                        title: 'Hint',
                        message: error,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            );
        },

        // 表单提交
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    // 进行表单的提交
                    console.log('success');
                    await this.changePassword();
                } else {
                    console.log('error');
                }
            });
        },

        // 获取pubKey
        async getPubKey() {
            await getPubKeyApi().then((res) => {
                this.pubKey = res.data.data.pubkey;
            });
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
    async mounted() {
        let target = document.getElementById('card');
        target.style.opacity = '0';
        target.style.zIndex = '-9999';
        target.style.transition = 'all 0.6s';
        await this.getPubKey();
    }
};
</script>
<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
@import '@/assets/scss/PcLoginForm.scss';
@import '@/assets/scss/MobileLoginForm.scss';
@import './scss/index.scss';
</style>
