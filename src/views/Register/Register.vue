<template>
    <div>
        <div class="out-box">
            <div class="top_box">
                <div class="form_title">
                    <span>Registration Form</span>
                </div>
                <div class="innerhtml">
                    <el-row>
                        <el-col :span="24">
                            <div id="sprichhtml" v-html="textMes"></div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="middle_box">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" label-position="top">
                    <el-row :gutter="24">
                        <!-- <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="ID Type" prop="IDType">
                                <el-select
                                    v-model="ruleForm.IDType"
                                    filterable
                                    placeholder="Please Select Your ID Type"
                                    style="width: 100%"
                                    @focus="getAllidType"
                                >
                                    <el-option v-for="item in IDTypeSelect" :key="item" :label="item" :value="item"> </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col> -->
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="ID No" prop="IDNo">
                                <el-input v-model="ruleForm.IDNo" clearable placeholder="Please Input Your ID No"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Full Name" prop="FullName">
                                <el-input v-model="ruleForm.FullName" clearable placeholder="Please Input Your Full Name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Sex" prop="Sex">
                                <el-radio-group v-model="ruleForm.Sex" @click.native="handleRadioClick">
                                    <el-radio :label="option.value" v-for="option in options" :key="option.value">{{
                                        option.label
                                    }}</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!-- <el-row :gutter="24">
                    </el-row> -->
                    <el-row :gutter="24">
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Place of Birth" prop="PlaceofBirth">
                                <el-select
                                    v-model="ruleForm.PlaceofBirth"
                                    filterable
                                    placeholder="Please Select Your Place of Birth"
                                    style="width: 100%"
                                    @focus="getAllPlaceofBirth"
                                >
                                    <el-option v-for="item in PlaceofBirthSelect" :key="item" :label="item" :value="item"> </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Date of Birth" prop="DateofBirth">
                                <el-date-picker
                                    v-model="ruleForm.DateofBirth"
                                    type="date"
                                    placeholder="Please Select Your Date of Birth"
                                    id="sp_date"
                                    class="pp_date"
                                    @change="changeDates"
                                    style="width: 100%"
                                    :picker-options="pickerOptions"
                                    format="dd-MM-yyyy"
                                >
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Citizenship" :prop="CitizenshipComputed ? 'spCitizenship' : 'Citizenship'">
                                <template v-if="CitizenshipComputed">
                                    <el-input
                                        v-model="ruleForm.spCitizenship"
                                        @clear="clearingTochangeCiti"
                                        clearable
                                        placeholder="Please Input Your Citizenship"
                                    ></el-input>
                                </template>
                                <template v-else>
                                    <el-select
                                        v-model="ruleForm.Citizenship"
                                        filterable
                                        placeholder="Please Select Your Citizenship"
                                        style="width: 100%"
                                    >
                                        <el-option v-for="item in CitizenshipSelect" :key="item" :label="item" :value="item"> </el-option>
                                    </el-select>
                                </template>
                            </el-form-item>
                        </el-col>
                        <!-- <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Race" :prop="RaceComputed ? 'spRace' : 'Race'">
                                <template v-if="RaceComputed">
                                    <el-input
                                        v-model="ruleForm.spRace"
                                        clearable
                                        @clear="clearingTochange"
                                        placeholder="Please Input Your Race"
                                    ></el-input>
                                </template>
                                <template v-else>
                                    <el-select v-model="ruleForm.Race" filterable placeholder="Please Select Your Race" style="width: 100%">
                                        <el-option v-for="item in RaceSelect" :key="item" :label="item" :value="item"> </el-option>
                                    </el-select>
                                </template>
                            </el-form-item>
                        </el-col> -->
                        <!-- <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Marital Status" prop="MaritalStatus">
                                <el-select
                                    v-model="ruleForm.MaritalStatus"
                                    filterable
                                    placeholder="Please Select Your Marital Status"
                                    style="width: 100%"
                                >
                                    <el-option v-for="item in MaritalStatusSelect" :key="item" :label="item" :value="item"> </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col> -->
                    </el-row>
                    <el-row :gutter="24">
                        <!-- <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Type of Dwelling" prop="TypeofDwelling">
                                <el-input
                                    v-model="ruleForm.TypeofDwelling"
                                    clearable
                                    placeholder="Please Input Your Type of Dwelling"
                                ></el-input>
                            </el-form-item>
                        </el-col> -->
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Mobile Number" prop="MobileNumber">
                                <!-- <el-input
                                    placeholder="Please Input Your Mobile Number"
                                    v-model="ruleForm.MobileNumber"
                                    id="iphone_number"
                                    clearable
                                    type="number"
                                >
                                    <i slot="prefix" style="display: flex; align-items: center">
                                        <img class="img_number" src="@/assets/img/union.svg" alt />
                                    </i>
                                </el-input> -->
                                <el-input
                                    placeholder="Please Input Your Mobile Number"
                                    v-model="ruleForm.MobileNumber"
                                    class="input-with-select"
                                    type="number"
                                >
                                    <template slot="prepend">
                                        <Country @excountry="getCountrys"></Country>
                                    </template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Email Address" prop="EmailAddress">
                                <el-input
                                    v-model="ruleForm.EmailAddress"
                                    placeholder="Please Input Your Email Address"
                                    autocomplete="off"
                                    clearable
                                >
                                    <i slot="prefix" style="display: flex; align-items: center">
                                        <img class="img_number" src="@/assets/img/email.svg" alt />
                                    </i>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Confirm Email Address" prop="ConfirmEmailAddress" autocomplete="off" clearable>
                                <el-input v-model="ruleForm.ConfirmEmailAddress" placeholder="Please Input Your Email Address Again">
                                    <i slot="prefix" style="display: flex; align-items: center">
                                        <img class="img_number" src="@/assets/img/email.svg" alt />
                                    </i>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="24">
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Create Password" prop="CreatePassword" clearValidate>
                                <el-input
                                    v-model="ruleForm.CreatePassword"
                                    show-password
                                    clearable
                                    type="password"
                                    placeholder="Please Input Your Create Password"
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
                                        <!-- 密码强度 -->
                                        <div>
                                            <div>
                                                <el-progress
                                                    v-if="passwordStrength"
                                                    :percentage="passwordStrength.score * 25"
                                                    status="text"
                                                    :text-inside="true"
                                                    :color="getProgressColor(passwordStrength.score * 25)"
                                                ></el-progress>
                                                <transition>
                                                    <div v-if="passwordStrength">
                                                        <p style="font-size: 12px; font-weight: 800; width: 80%">
                                                            <span>Password Strength:</span>
                                                            {{
                                                                passwordStrength.score === 0
                                                                    ? 'Very Weak'
                                                                    : passwordStrength.score === 1
                                                                    ? 'Weak'
                                                                    : passwordStrength.score === 2
                                                                    ? 'Moderate'
                                                                    : passwordStrength.score === 3
                                                                    ? 'Strong'
                                                                    : 'Very Strong'
                                                            }}
                                                        </p>
                                                    </div>
                                                </transition>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-col>
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Confirm Password" prop="ConfirmPassword">
                                <el-input
                                    v-model="ruleForm.ConfirmPassword"
                                    show-password
                                    clearable
                                    type="password"
                                    placeholder="Please Input Your Password Again"
                                ></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!-- <el-row :gutter="24">
                        <el-col :sm="10" :md="10" :lg="10" :xl="10" :xs="24" id="sp_ul">
                            <div class="sp_ul_li">
                                <ul>
                                    <li>Minimum length of 12 characters</li>
                                    <li>Must contain at least 2 of the following:</li>
                                    <li>uppercase,lowercase, digits and special characters</li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row> -->
                    <!-- <el-row :gutter="24">
                    </el-row> -->
                    <el-row :gutter="24">
                        <el-col :sm="8" :md="8" :lg="8" :xl="8" :xs="24">
                            <el-form-item label="Terms and Conditions" prop="TermsandConditions" style="padding: none !important">
                                <el-checkbox v-model="ruleForm.TermsandConditions" style="font-weight: normal"
                                    >I accept the
                                    <span class="sp_link"
                                        ><a href="https://www.psc.gov.sg/terms-of-use" target="_blank">Terms of Use</a></span
                                    >，<span class="sp_link"
                                        ><a href="https://www.psc.gov.sg/privacy-statement" target="_blank">Privacy Statement</a></span
                                    >
                                    <span id="mobile_sp">
                                        and
                                        <span class="sp_link"
                                            ><a href="https://uat.scholarshipsgateway.gov.sg/dashboard/fe47afcb/view" target="_blank"
                                                >Terms and Conditions</a
                                            ></span
                                        >
                                    </span>
                                </el-checkbox>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" id="submit_middle">
                        <el-col :span="24">
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <!-- 验证 -->
                <el-dialog title="Swipe And Verify" :visible.sync="dialogVisible" :width="dialogWidth" :close-on-click-modal="false">
                    <DragVerify :message="{ isPass, mainKey }" @sendMessage="sendMessage" :key="mainKey" />
                </el-dialog>
            </div>
        </div>

        <!-- 注册失败提醒 -->
        <el-dialog title="Tips" :visible.sync="dialogVisibleTips" :width="dialogWidthTips" :before-close="handleClose">
            <span>{{ registerMessage }}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelSubmitForm" id="cancelbtn">Cancel</el-button>
                <el-button type="primary" style="width: max-content" @click="toLoginIn">To Log In</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import JSEncrypt from 'jsencrypt';
import zxcvbn from 'zxcvbn';
import DragVerify from '@/components/DragVerify.vue';
import { EMAIL_REGEX, PHONE_REG, PASSWORD_REG, REGEXLENGHT, MAXLENGHT } from '@/common/reg/index.js';
import { getAllDataApi, getPubKeyApi, checkTwoFARegisterApi } from '@/api/https.js';
import { isMobile, sortArrayByFirstLetter } from '@/utils/fun.js';
import { timesToFormateall } from '@/utils/times.js';
import Country from '../../components/Country/index';
import { cn_Reg, sg_Reg, hk_Reg, mo_Reg, tw_Reg, my_Reg } from '../../common/reg/phoneCountry';
export default {
    components: { DragVerify, Country },
    data() {
        // 邮箱校验
        var validateEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter your Email Address'));
            } else {
                // if (this.ruleForm.EmailAddress !== '') {
                //     this.$refs.ruleForm.validateField('checkPass');
                // }
                callback();
            }
        };
        var validateEmail2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter email again.'));
            } else if (value !== this.ruleForm.EmailAddress) {
                callback(new Error('The new email address and confirmation email address do not match.'));
            } else {
                callback();
            }
        };
        // 密码校验
        var validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter your Password'));
            } else if (value.indexOf(this.ruleForm.MobileNumber) != -1 && this.ruleForm.MobileNumber != '') {
                callback(new Error('The password cannot contain a Mobile Number, Please reset your password'));
            } else if (value.indexOf(this.ruleForm.IDNo) != -1 && this.ruleForm.IDNo != '') {
                callback(new Error('The password cannot contain a ID No, Please reset your password'));
            } else if (value.indexOf(this.ruleForm.EmailAddress) != -1 && this.ruleForm.EmailAddress != '') {
                callback(new Error('The password cannot contain a Email Address, Please reset your password'));
            } else if (this.passwordStrength.score < 3) {
                callback(new Error('Your password strength is low, Please reset your password'));
            } else {
                // if (this.ruleForm.CreatePassword !== '') {
                // this.$refs.ruleForm.validateField('checkPass');
                // }
                callback();
            }
        };
        var validatePassword2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter Password again'));
            } else if (value !== this.ruleForm.CreatePassword) {
                callback(new Error('The new password and confirmation password do not match.'));
            } else {
                callback();
            }
        };
        // 手机号正则判断
        var validateMobilePhone = (rule, value, callback) => {
            // console.log(this.codeType, 'pp');
            switch (this.codeType) {
                // case 'cn':
                //     cn_Reg.test(value) ? callback() : callback(new Error('Please enter your legal mobile phone number in your country'));
                case 'sg':
                    sg_Reg.test(value) ? callback() : callback(new Error('Please enter your legal mobile phone number in your country'));
                // case 'hk':
                //     hk_Reg.test(value) ? callback() : callback(new Error('Please enter your legal mobile phone number in your country'));
                // case 'mo':
                //     mo_Reg.test(value) ? callback() : callback(new Error('Please enter your legal mobile phone number in your country'));
                // case 'tw':
                //     tw_Reg.test(value) ? callback() : callback(new Error('Please enter your legal mobile phone number in your country'));
                // case 'my':
                //     my_Reg.test(value) ? callback() : callback(new Error('Please enter your legal mobile phone number in your country'));
                default:
                    callback();
            }
        };

        return {
            // code 的种类
            codeType: '',
            passwordStrength: null,
            regexLength: false,
            regexLower: false,
            passwordCheckResult: null,
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now() - 8.64e6;
                },
                onPick(picker) {
                    // 阻止用户查看将来时间
                    if (picker.$options.name === 'ElDatePicker') {
                        const { minDate, maxDate } = picker;
                        const currentDate = new Date();

                        if (maxDate && maxDate.getTime() > currentDate.getTime()) {
                            picker.$emit('pick', [minDate, currentDate]);
                        }
                    }
                }
            },
            pubKey: '',
            sendTargetObj: {},
            isShow: true,
            QRCodeUrl: '',
            mainKey: 0,
            // 验证信息
            registerMessage: 'The account has been registered, please check the information or choose to log in',
            // 是否通过验证
            isPass: false,
            // 对话框的宽度
            dialogWidth: '',
            dialogWidthTips: '',
            textMes: '',
            IDTypeSelect: [],
            PlaceofBirthSelect: [],
            MaritalStatusSelect: [],
            CitizenshipSelect: [],
            RaceSelect: ['CHINESE', 'MALAY', 'INDIAN', 'EURASIAN', 'Others'],
            dialogVisible: false,
            dialogVisibleTips: false,
            // 表单规则
            ruleForm: {
                IDType: '',
                IDNo: '',
                FullName: '',
                Sex: '',
                PlaceofBirth: '',
                Race: '',
                spRace: '',
                MaritalStatus: '',
                DateofBirth: '',
                Citizenship: '',
                spCitizenship: '',
                TypeofDwelling: '',
                spTypeofDwelling: '',
                MobileNumber: '',
                EmailAddress: '',
                ConfirmEmailAddress: '',
                CreatePassword: '',
                ConfirmPassword: '',
                TermsandConditions: []
            },

            options: [
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' }
            ],
            // 表单验证规则
            rules: {
                IDType: [{ required: true, message: 'Please choose ID Type', trigger: ['blur', 'change'] }],
                IDNo: [{ required: true, message: 'Please enter your ID No' }],
                FullName: [{ required: true, message: 'Please enter your FullName' }],
                Sex: [{ required: true, message: 'Please choose your Sex' }],
                PlaceofBirth: [{ required: true, message: 'Please choose your Place of Birth' }],
                // Race: [{ required: true, message: 'Please choose your Race' }],
                // MaritalStatus: [{ required: true, message: 'Please choose your Marital Status' }],
                DateofBirth: [{ required: true, message: 'Please choose your Date of Birth', trigger: ['blur', 'change'] }],
                Citizenship: [{ required: true, message: 'Please enter your Citizenship', trigger: ['blur', 'change'] }],
                spCitizenship: [{ required: true, message: 'Please enter your Citizenship', trigger: ['blur', 'change'] }],
                TypeofDwelling: [{ required: true, message: 'Please enter your TypeofDwelling', trigger: ['blur', 'change'] }],
                spTypeofDwelling: [{ required: true, message: 'Please enter your TypeofDwelling', trigger: ['blur', 'change'] }],
                MobileNumber: [
                    { required: true, validator: validateMobilePhone, trigger: ['blur', 'change'] }
                    // { pattern: this.getCountrys(), message: 'Please enter your right Mobile Number', trigger: ['blur', 'change'] }
                ],
                EmailAddress: [
                    { required: true, validator: validateEmail, trigger: ['blur', 'change'] },
                    {
                        pattern: EMAIL_REGEX,
                        message: 'Please enter your right Email Address',
                        trigger: ['blur', 'change']
                    }
                ],
                ConfirmEmailAddress: [
                    { required: true, validator: validateEmail2, trigger: ['blur', 'change'] },
                    {
                        pattern: EMAIL_REGEX,
                        message: 'Please enter your right Email Address',
                        trigger: ['blur', 'change']
                    }
                ],
                CreatePassword: [
                    { required: true, validator: validatePassword, trigger: ['blur', 'change'] },
                    {
                        pattern: PASSWORD_REG,
                        message: 'Please enter a password that meets the rules',
                        trigger: ['blur', 'change']
                    }
                ],
                ConfirmPassword: [
                    { required: true, validator: validatePassword2, trigger: ['blur', 'change'] },
                    {
                        pattern: PASSWORD_REG,
                        message: 'Please enter a password that meets the rules',
                        trigger: ['blur', 'change']
                    }
                ],
                TermsandConditions: [
                    {
                        type: 'array',
                        required: true,
                        message: 'Please agree to the relevant privacy agreement',
                        trigger: ['blur', 'change']
                    }
                ]
            }
        };
    },
    computed: {
        resDate() {
            return Dayjs(this.ruleForm.DateofBirth).format('YYYY-MM-DD HH:mm:ss');
        },
        RaceComputed() {
            if (this.ruleForm.Race === 'Others') {
                return true;
            } else {
                return false;
            }
        },
        CitizenshipComputed() {
            if (this.ruleForm.Citizenship === 'Others') {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        // 获取国家
        getCountrys(val) {
            this.codeType = val.code;
        },

        getProgressColor(percentage) {
            if (percentage <= 25) {
                return '#db3f29'; // 其他情况显示绿色
            } else if (percentage <= 50) {
                return '#ed8e3e'; // 当百分比小于等于75时，显示黄色
            } else if (percentage <= 75) {
                return '#f5d247'; // 当百分比小于等于50时，显示橙色
            } else {
                return '#4aab49'; // 当百分比小于等于25时，显示红色
            }
        },
        evaluatePasswordStrength(password) {
            const result = zxcvbn(password);
            return result;
        },
        checkPassword() {
            // 最小长度为 12 个字符
            REGEXLENGHT.test(this.ruleForm.CreatePassword) ? (this.regexLength = true) : (this.regexLength = false);
            // //  是否包含小写字母
            PASSWORD_REG.test(this.ruleForm.CreatePassword) ? (this.regexLower = true) : (this.regexLower = false);

            const result = this.evaluatePasswordStrength(this.ruleForm.CreatePassword);
            this.passwordStrength = result;
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
            target.style.zIndex = '9999999';
            target.style.background = 'white';
            target.style.transition = 'all 0.6s';
        },
        // 取消表单
        cancelSubmitForm() {
            this.dialogVisibleTips = false;
            this.dialogVisible = false;
            this.isPass = false;
            this.mainKey = this.mainKey + 10;
        },
        handleClose() {
            this.dialogVisibleTips = false;
            this.dialogVisible = false;
            this.isPass = false;
            this.mainKey = this.mainKey + 1;
        },

        // 跳转到登录页面
        toLoginIn() {
            this.dialogVisibleTips = false;
            this.dialogVisible = false;
            setTimeout(() => {
                this.$router.push('/login');
            }, 200);
        },

        clearingTochange() {
            this.ruleForm.Race = '';
        },
        clearingTochangeCiti() {
            this.ruleForm.Citizenship = '';
        },
        // 获取验证状态
        async sendMessage(val) {
            const { isPass } = val;
            this.isPass = isPass;
            console.log(isPass, 'res');
            setTimeout(async () => {
                this.dialogVisible = false;

                // 在这里整理数据
                const {
                    IDType,
                    IDNo,
                    FullName,
                    Sex,
                    PlaceofBirth,
                    Race,
                    MaritalStatus,
                    DateofBirth,
                    Citizenship,
                    spCitizenship,
                    TypeofDwelling,
                    spRace,
                    MobileNumber,
                    ConfirmEmailAddress,
                    ConfirmPassword,
                    TermsandConditions
                } = this.ruleForm;

                // 密码加密
                let encryptor = new JSEncrypt();
                console.log(this.pubKey,ConfirmPassword);
                encryptor.setPublicKey(this.pubKey);
                let scPwd = encryptor.encrypt(ConfirmPassword);

                // 日期处理
                let resDate = timesToFormateall(DateofBirth);

                let sendTargetObj = {
                    idType: IDType,
                    nric: IDNo,
                    fullName: FullName,
                    sex: Sex,
                    placeOfBirth: PlaceofBirth,
                    race: Race == 'Others' ? spRace : Race,
                    maritalStatus: MaritalStatus,
                    dateOfBirth: resDate,
                    citizenship: Citizenship == 'Others' ? spCitizenship : Citizenship,
                    typeOfDwelling: TypeofDwelling,
                    mobileNumber: MobileNumber,
                    emailAddress: ConfirmEmailAddress,
                    password: scPwd,
                    agreeAgreement: TermsandConditions.length != 0 ? true : false
                };
                // this.sendTargetObj = sendTargetObj;
                console.log(sendTargetObj, 'send');

                // 验证
                await this.checkTwoFA(sendTargetObj);
            }, 200);
        },

        // 请求判断是否进行了2FA认证
        async checkTwoFA(sendTargetObj) {
            await checkTwoFARegisterApi(JSON.stringify({ userId: this.ruleForm.IDNo, email: this.ruleForm.ConfirmEmailAddress })).then(
                async (res) => {
                    if (res.status === 200 && res.data.code === 0) {
                        console.log(res.data.result);
                        const { need2FA, needBind, register, qrCode, uri } = res.data.result;
                        console.log(need2FA, needBind, 'end');

                        if (register) {
                            // 进行用户状态检测是否已经注册了账号？
                            this.dialogVisibleTips = true;
                        } else {
                            if (need2FA) {
                                // 需要2FA
                                // this.isShow = true;
                                this.QRCodeUrl = qrCode;
                                // this.$router.push({ name: 'Registering', params: { formData: sendTargetObj, qrCode: qrCode } });

                                let params = { formData: sendTargetObj, qrCode: qrCode };
                                // sesstionstorage
                                await sessionStorage.setItem('params', JSON.stringify(params));
                                this.$router.push('/registering');
                            } else {
                                // 不需要2FA
                                this.$router.push('/registrationsuccess');
                            }
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

        // ios 特殊处理
        handleRadioClick(event) {
            // 在 iOS 上处理点击事件来更新选中状态
            const label = event.target.textContent.trim();
            const selectedOption = this.options.find((option) => option.label === label);
            this.ruleForm.Sex = selectedOption ? selectedOption.value : '';
        },
        // 获取所有数据
        async getAllData() {
            await getAllDataApi().then(
                (res) => {
                    if (res.status == 200) {
                        if (res.data.code === 0) {
                            const { idTypeList, maritalStatusList, placeOfBirthList, citizenshipList, registerNotes } = res.data.result;
                            this.IDTypeSelect = idTypeList;
                            this.PlaceofBirthSelect = sortArrayByFirstLetter(placeOfBirthList);
                            this.MaritalStatusSelect = sortArrayByFirstLetter(maritalStatusList);
                            this.CitizenshipSelect = sortArrayByFirstLetter(citizenshipList).filter((item) => item != 'Singapore Citizen');
                            this.textMes = registerNotes;
                        }
                    }
                },
                (error) => {
                    this.$notify.error({
                        title: 'error',
                        message: error,
                        duration: 0,
                        position: 'bottom-left',
                        showClose: true
                    });
                }
            );
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 是否通过了验证
                    if (!this.isPass) {
                        this.dialogVisible = true;
                    } else {
                        this.dialogVisible = false;
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
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
            this.dialogWidthTips = '100%';
        } else {
            // alert("pc端")
            this.dialogWidth = '30%';
            this.dialogWidthTips = '50%';
        }
    },
    async mounted() {
        let target = document.getElementById('card');
        target.style.opacity = '0';
        target.style.zIndex = '-999999';
        target.style.transition = 'all 0.6s';
        await this.getPubKey();
        await this.getAllData();
    }
};
</script>

<style lang="scss" scoped>
@import './scss/RichText.scss';
@import './scss/index.scss';

::v-deep #cancelbtn {
    transition: all 0.3s;
    &:hover {
        background: #fbf5ee !important;
        color: #ed8e3e !important;
        border-color: #ed8e3e !important;
    }
}
::v-deep p {
    margin-top: 0px !important;
}
#sprichhtml {
    height: max-content;
    max-height: 320px;
    overflow: scroll;
}
#card {
    position: absolute;
    top: 46px;
    width: 100%;
    height: max-content !important;
    border-radius: 4px;
    /* box-shadow: 16px 16px 64px rgba(12, 31, 80, 0.06); */
    box-shadow: 0px 6px 17px -4px rgba(0, 0, 0, 0.15);
    background: white;
    padding: 10px;
    z-index: -99999;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
}
svg {
    margin-right: 10px !important;
}

/* 动画 */
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
::v-deep .el-progress-bar__innerText {
    display: none !important;
}
</style>
