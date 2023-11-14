<template>
    <div class="drawer">
        <div class="setting" v-if="styleData.settingHide === '1'">
            <!-- <span @click.stop="openRight()" class="iconfont icon-setting"></span> -->
        </div>
        <!-- <div @click.stop="setboxDemo()" :class="[styleData.settingHide === '1' ? 'setbox' : 'setbox2', { show: isshow }]">
            <div class="header">
                <p class="fl">{{ $t('message.settingTitle') }}</p>
                <p class="off" @click.stop="closeRight">
                    <span class="iconfont icon-close"></span>
                </p>
            </div>
            <div class="main">
                <el-alert :title="$t('message.ssolimit')" type="warning" show-icon v-if="showElAlert"></el-alert>

                <el-alert :title="$t('message.footerlimit')" type="warning" show-icon v-if="showElAlert2"> </el-alert>

                <el-alert :title="$('message.addImglimit')" type="warning" show-icon v-if="showElAlert3"> </el-alert>
                <div class="middle">
                    <el-form ref="form" :model="form" :rules="rules" label-width="150px">
                        <Comlang :msg="lang" @sendmsg="getlangval"></Comlang>
                        <el-form-item :label="$t('message.ClientName')">
                            <el-input v-model="userData.username" size="small" type="text" />
                        </el-form-item>
                        <el-form-item :label="$t('message.QFversion')">
                            <el-radio-group v-model="elGroup" @change="getCheckRadio">
                                <template v-for="item in useQingFlowVersion">
                                    <el-badge value="new" class="new" v-if="item.isNew" type="success" :key="item">
                                        <el-radio :label="item" border size="small">
                                            {{ item }}
                                        </el-radio>
                                    </el-badge>
                                    <el-badge value="hot" class="hot is-checked" :key="item" v-else-if="item.isBase">
                                        <el-radio :label="item" border size="small">
                                            {{ item }}
                                        </el-radio>
                                    </el-badge>
                                    <el-radio :label="item" border size="small" :key="item">
                                        {{ item }}
                                    </el-radio>
                                </template>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item :label="$t('message.allView')">
                            <el-radio v-model="styleData.qf_homeStyle" label="leftAndright">{{ $t('message.lf') }}</el-radio>
                            <el-radio v-model="styleData.qf_homeStyle" label="allView">{{ $t('message.fullView') }}</el-radio>
                        </el-form-item>

                        <el-form-item :label="$t('message.autoPlay')" v-show="styleData.qf_homeStyle === 'leftAndright'">
                            <el-switch v-model="styleData.qf_loopvalue" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
                        </el-form-item>

                        <el-form-item
                            :label="$t('message.moveDir')"
                            v-show="styleData.qf_homeStyle === 'leftAndright' && styleData.qf_loopvalue === true"
                        >
                            <el-radio v-model="styleData.qf_swiper_way" label="horizontal">{{ $t('message.horizontal') }}</el-radio>
                            <el-radio v-model="styleData.qf_swiper_way" label="vertical">{{ $t('message.vertical') }}</el-radio>
                        </el-form-item>
                        <el-form-item :label="$t('message.Pager')" v-show="styleData.qf_homeStyle === 'leftAndright'">
                            <el-radio v-model="styleData.qf_swiper_pages" label="inside">{{ $t('message.show') }}</el-radio>
                            <el-radio v-model="styleData.qf_swiper_pages" label="none">{{ $t('message.hide') }}</el-radio>
                        </el-form-item>

                        <el-form-item :label="$t('message.imgLocation')" prop="background" id="imgsp">
                            <el-tag
                                :key="index"
                                v-for="(tag, index) in dynamicTagsImg"
                                closable
                                :disable-transitions="false"
                                @close="handleCloseImg(tag)"
                            >
                                <img style="display: block" :src="tag" width="80px" alt="" />
                            </el-tag>
                            <el-input
                                class="input-new-tag"
                                v-if="inputVisibleImg"
                                v-model="inputValueImg"
                                ref="saveTagInputImg"
                                size="small"
                                @keyup.enter.native="handleInputConfirmImg"
                                @blur="handleInputConfirmImg"
                            >
                            </el-input>

                            <el-button v-else class="button-new-tag" size="small" @click="showInputImg">{{
                                $t('message.addImg')
                            }}</el-button>
                        </el-form-item>
                        <el-form-item :label="$t('message.loginWay')" prop="loginway">
                            <el-radio v-model="styleData.login_type" label="passport">{{ $t('message.passport') }}</el-radio>
                            <el-radio v-model="styleData.login_type" label="passportsso">{{ $t('message.passportsso') }}</el-radio>
                            <el-radio v-model="styleData.login_type" label="sso">{{ $t('message.sso') }}</el-radio>
                        </el-form-item>

                        <el-form-item v-if="styleData.login_type == 'passportsso' || styleData.login_type == 'sso'">
                            <el-tag
                                :key="index"
                                v-for="(tag, index) in dynamicTags"
                                closable
                                :disable-transitions="false"
                                @close="handleCloseMY(tag, dynamicTags, loginWaysData, 'WayName')"
                                id="el-tag-img"
                            >
                                {{ tag }}
                            </el-tag>
                            <el-input
                                class="input-new-tag"
                                v-if="inputVisible"
                                v-model="inputValue"
                                ref="saveTagInput"
                                size="small"
                                @blur="handleInputConfirm"
                            >
                            </el-input>
                            <el-button v-else class="button-new-tag" size="small" @click="showInput">{{
                                $t('message.addSsoWays')
                            }}</el-button>
                        </el-form-item>

                        <el-dialog :title="$t('message.ssoLoginSet')" :visible.sync="dialogFormVisible" :append-to-body="true" width="50%">
                            <el-form :model="formNewData" label-position="left" label-width="135px" :rules="rulesDialog" ref="ruleForm">
                                <el-form-item :label="$t('message.WayName')" required prop="WayName">
                                    <el-input v-model="formNewData.WayName" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item :label="$t('message.WayImgUrl')" required prop="WayImgUrl">
                                    <el-input v-model="formNewData.WayImgUrl" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item :label="$t('message.WayToUrl')" required prop="WayToUrl">
                                    <el-input v-model="formNewData.WayToUrl" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button @click="dialogFormVisible = false">{{ $t('message.cancel') }}</el-button>
                                    <el-button @click="resetForm('ruleForm')" type="warning">{{ $t('message.reset') }}</el-button>
                                    <el-button
                                        type="primary"
                                        @click="submitForm('ruleForm', loginWaysData, formNewData, 'WayName', dynamicTags)"
                                        >{{ $t('message.ok') }}</el-button
                                    >
                                </el-form-item>
                            </el-form>
                        </el-dialog>

                        <el-form-item :label="$t('message.logoAdd')" prop="logo_path">
                            <el-input v-model="logo_path" :placeholder="$t('message.logoAddmsg')" size="small" @blur="getInputText" />
                        </el-form-item>
                        <el-form-item :label="$t('message.iconImgAd')" prop="logo_path">
                            <el-input v-model="icon_path" :placeholder="$t('message.iconImgAdMsg')" size="small" @blur="getInputTexticon" />
                        </el-form-item>
                        <el-form-item :label="$t('message.logoPos')" prop="logo">
                            <el-radio v-model="styleData.qf_logo" label="qf-logo_left">{{ $t('message.poleft') }}</el-radio>
                            <el-radio v-model="styleData.qf_logo" label="qf-logo_center">{{ $t('message.pocenter') }}</el-radio>
                            <el-radio v-model="styleData.qf_logo" label="qf-logo_right">{{ $t('message.poright') }}</el-radio>
                        </el-form-item>
                        <el-form-item :label="$t('message.loginPosition')" prop="login" v-show="styleData.qf_homeStyle === 'allView'">
                            <el-radio v-model="styleData.qf_login" label="ms-login_left">{{ $t('message.poleft') }}</el-radio>
                            <el-radio v-model="styleData.qf_login" label="ms-login">{{ $t('message.pocenter') }}</el-radio>
                            <el-radio v-model="styleData.qf_login" label="ms-login_right">{{ $t('message.poright') }}</el-radio>
                        </el-form-item>
                        <el-form-item :label="$t('message.footering')" prop="loginfooter" v-show="styleData.qf_homeStyle === 'allView'">
                            <el-radio v-model="styleData.login_footer" label="1">{{ $t('message.show') }}</el-radio>
                            <el-radio v-model="styleData.login_footer" label="2">{{ $t('message.hide') }}</el-radio>
                        </el-form-item>
                        <el-form-item :label="$t('message.footerPo')" prop="footer" v-if="styleData.login_footer == 1">
                            <el-radio v-model="styleData.qf_footer" label="footer-bottom-center-up">{{ $t('message.above') }}</el-radio>
                            <el-radio v-model="styleData.qf_footer" label="footer-bottom-center-down">{{ $t('message.under') }}</el-radio>

                            <el-form-item v-if="styleData.qf_footer == 'footer-bottom-center-up'">
                                <el-tag
                                    :key="index"
                                    v-for="(tag, index) in dynamicTagsUp"
                                    closable
                                    :disable-transitions="false"
                                    @close="handleCloseMY(tag, dynamicTagsUp, footDatas.topArea, 'text')"
                                >
                                    {{ tag }}
                                </el-tag>
                                <el-input
                                    class="input-new-tag"
                                    v-if="inputVisible"
                                    v-model="inputValue"
                                    ref="saveTagInput"
                                    size="small"
                                    @blur="handleInputConfirm"
                                >
                                </el-input>
                                <el-button class="button-new-tag" size="small" @click="showInputUp">{{ $t('message.topMsg') }}</el-button>
                            </el-form-item>

                            <el-form-item v-else-if="styleData.qf_footer == 'footer-bottom-center-down'">
                                <el-tag
                                    :key="index"
                                    v-for="(tag, index) in dynamicTagsDown"
                                    closable
                                    :disable-transitions="false"
                                    @close="handleCloseMY(tag, dynamicTagsDown, footDatas.underArea, 'text')"
                                >
                                    {{ tag }}
                                </el-tag>
                                <el-input
                                    class="input-new-tag"
                                    v-if="inputVisible"
                                    v-model="inputValue"
                                    ref="saveTagInput"
                                    size="small"
                                    @blur="handleInputConfirm"
                                >
                                </el-input>
                                <el-button v-else class="button-new-tag" size="small" @click="showInputDown">{{
                                    $t('message.botMsg')
                                }}</el-button>
                            </el-form-item>
                        </el-form-item>
                        <el-form-item :label="$t('message.arguments')" prop="settingData">
                            <el-input v-model="form.settingData" :placeholder="$t('message.beizhuMsg')" size="small" type="textarea" />
                        </el-form-item>
                        <el-dialog :title="$t('message.footertop')" :visible.sync="dialogFormVisibleUp" :append-to-body="true" width="50%">
                            <el-form
                                :model="formNewDataFooter"
                                label-position="left"
                                label-width="132px"
                                :rules="rulesDialogFoot"
                                ref="ruleFormFootUp"
                            >
                                <el-form-item :label="$t('message.textDes')" required prop="text">
                                    <el-input v-model="formNewDataFooter.text" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item :label="$t('message.imgurl')" prop="img">
                                    <el-input v-model="formNewDataFooter.img" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item :label="$t('message.WayToUrl')" required prop="href">
                                    <el-input v-model="formNewDataFooter.href" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button @click="dialogFormVisibleUp = false">{{ $t('message.cancel') }}</el-button>
                                    <el-button @click="resetForm('ruleFormFootUp')" type="warning">{{ $t('message.reset') }}</el-button>
                                    <el-button
                                        type="primary"
                                        @click="submitForm('ruleFormFootUp', footDatas.topArea, formNewDataFooter, 'text', dynamicTagsUp)"
                                        >{{ $t('message.ok') }}</el-button
                                    >
                                </el-form-item>
                            </el-form>
                        </el-dialog>

                        <el-dialog
                            :title="$t('message.footerbottom')"
                            :visible.sync="dialogFormVisibleDown"
                            :append-to-body="true"
                            width="50%"
                        >
                            <el-form
                                :model="formNewDataFooter"
                                label-position="left"
                                label-width="135px"
                                :rules="rulesDialogFoot"
                                ref="ruleFormFootDown"
                            >
                                <el-form-item :label="$t('message.textDes')" required prop="text">
                                    <el-input v-model="formNewDataFooter.text" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item :label="$t('message.imgurl')" prop="img">
                                    <el-input v-model="formNewDataFooter.img" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item :label="$t('message.WayToUrl')" required prop="href">
                                    <el-input v-model="formNewDataFooter.href" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button @click="dialogFormVisibleDown = false">{{ $t('message.cancel') }}</el-button>
                                    <el-button @click="resetForm('ruleFormFootDown')" type="warning">{{ $t('message.reset') }}</el-button>
                                    <el-button
                                        type="primary"
                                        @click="
                                            submitForm('ruleFormFootDown', footDatas.underArea, formNewDataFooter, 'text', dynamicTagsDown)
                                        "
                                        >{{ $t('message.ok') }}</el-button
                                    >
                                </el-form-item>
                            </el-form>
                        </el-dialog>
                    </el-form>
                </div>
                <div slot="footer" class="dialog-footer">
                    <el-button type="success" @click="saveForm">{{ $t('message.save') }}</el-button>
                    <el-button type="primary" @click.stop="submitFormAll">{{ $t('message.ok') }}</el-button>
                    <el-button type="warning" @click="cancelFormData('form')">{{ $t('message.reset') }}</el-button>
                    <p class="login-tips">
                        {{ $t('message.tips') }}
                    </p>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import '@/assets/icon/iconfont.css';
export default {
    components: { },
    data() {
        return {
            //默认自动打开
            // loopvalue: true,

            //footerdata
            formNewData: {
                WayName: '',
                WayImgUrl: '',
                WayToUrl: ''
            },
            formNewDataFooter: {
                text: '',
                img: '',
                href: ''
            },
            //对话框
            dialogFormVisible: false,
            dialogFormVisibleUp: false,
            dialogFormVisibleDown: false,
            //---------edit
            dynamicTags: [],
            dynamicTagsUp: [],
            dynamicTagsDown: [],
            // 展示的内容
            dynamicTagsImg: [],

            inputVisibleImg: false,
            inputValueImg: '',

            inputVisible: false,
            // inputValue: '',
            //----------
            isshow: false,
            // 100%宽度
            fullWidth: 0,
            // 70%宽度
            changeWidth: 34,
            // 全部setting信息
            allData: {},
            // 保存版本号信息
            QFversionData: 4.3,
            //--------------setting--start
            userData: {},
            useQingFlowVersion: [4.1, 4.2, 4.3, 4.4, 4.5, 4.6],
            // ssoHideData: {},
            styleData: {
                // qf_logo: 'qf-logo_left',
                // qf_login: 'ms-login_right',
                // qf_footer: 'footer-bottom-center',
                // background_path: '../../assets/img/login-bg.jpg',
                // login_url: 'https://accounts.qingflow.com/api/user/login'
            },
            footDatas: {},
            loginWaysData: [],
            //----------------------setting--end
            logo_path: '',
            icon_path: '',
            open: false,
            param: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            },
            rulesDialog: {
                WayName: [
                    {
                        required: true,
                        message: '请输入登录方式名称（例如：微信；企业微信）',
                        trigger: 'blur'
                    }
                ],
                WayImgUrl: [
                    { required: true, message: '请输入图片的URL地址', trigger: 'blur' },
                    {
                        pattern:
                            // eslint-disable-next-line no-useless-escape
                            /((http|ftp|https):\/\/)(([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,4})*(\/[a-zA-Z0-9\&%_\.\/-~-]*)?/,
                        message: '请输入正确的地址',
                        trigger: 'blur'
                    }
                ],
                WayToUrl: [
                    {
                        required: true,
                        message: '请输入点击图片所跳转到的地址',
                        trigger: 'blur'
                    },
                    {
                        pattern:
                            // eslint-disable-next-line no-useless-escape
                            /((http|ftp|https):\/\/)(([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,4})*(\/[a-zA-Z0-9\&%_\.\/-~-]*)?/,
                        message: '请输入正确的地址',
                        trigger: 'blur'
                    }
                ]
            },
            rulesDialogFoot: {
                text: [{ required: true, message: '请输入相关描述', trigger: 'blur' }],
                img: [
                    {
                        required: false,
                        message: '请输入图片的URL地址【如果没有就留空】',
                        trigger: 'blur'
                    },
                    {
                        pattern:
                            // eslint-disable-next-line no-useless-escape
                            /((http|ftp|https):\/\/)(([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,4})*(\/[a-zA-Z0-9\&%_\.\/-~-]*)?/,
                        message: '请输入正确的地址'
                    }
                ],
                href: [
                    {
                        required: true,
                        message: '请输入点击文本所跳转到的地址',
                        trigger: 'blur'
                    },
                    {
                        pattern:
                            // eslint-disable-next-line no-useless-escape
                            /((http|ftp|https):\/\/)(([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,4})*(\/[a-zA-Z0-9\&%_\.\/-~-]*)?/,
                        message: '请输入正确的地址'
                    }
                ]
            },
            form: {
                settingData: ''
            },
            title: '',
            pubKey: '',
            EMAIL_REGEX:
                /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            MOBILENUM_REGEX: /^\d{4,11}$/,
            elGroup: '',
            //显示alert
            showElAlert: false,
            showElAlert2: false,
            showElAlert3: false,
            // 是否设置完成
            allRight: false,
            lang: ''
        };
    },
    methods: {
        getlangval(value) {
            // console.log('fffffff', value);
            this.lang = value;
        },
        changeSelect(value) {
            window.alert(value);
        },
        closeRight() {
            this.isshow = false;
            this.$emit('closeBox', this.fullWidth);
        },
        openRight() {
            this.isshow = !this.isshow;

            if (this.isshow) {
                this.$emit('openBox', this.changeWidth);
            } else {
                this.$emit('closeBox', this.fullWidth);
            }
        },
        setboxDemo() {
            this.isshow = true;
            this.$emit('openBox', this.changeWidth);
        },
        // 获取数据
        getData() {
            // **注意**
            // vue.config.js中修改publiPath的时候需要，修改这里'/qf-login/table.json'
            // this.$axios.get('./table.json').then((res) => {
            this.$axios.get('./table.json').then((res) => {
                console.log(res, 'fff');
                this.styleData = res.data.data.styleData;
                this.footerData = res.data.data.footerData;
                this.loginWaysData = res.data.data.loginWays;
                this.userData = res.data.data.userData;

                document.title = 'Login｜' + this.userData.username;
                this.footDatas = res.data.data.footData;
                this.dynamicTagsImg = res.data.data.backgroundImg;
                this.logo_path = res.data.data.logo_path;
                this.icon_path = res.data.data.icon_path;
                //为跳转链接赋随机校验值
                const loginWays = res.data.data.loginWays;
                loginWays[0].WayToUrl = loginWays[0].WayToUrl.replace('<nonce>', crypto.randomUUID().replaceAll('-', ''));
                res.data.data.loginWays = loginWays;
                this.allData = res.data.data;
                this.allData = res.data.data;
                this.elGroup = res.data.data.userData.useQingFlowVersion;
                this.lang = res.data.data.lang;
                console.log('lalalal', this.lang);
                //全部数据
                this.rulesWayData(this.loginWaysData, this.dynamicTags, 'WayName');
                this.rulesWayData(this.footDatas.topArea, this.dynamicTagsUp, 'text');
                this.rulesWayData(this.footDatas.underArea, this.dynamicTagsDown, 'text');
                this.$emit('pullData', this.allData);
                this.$emit('sendImgs', this.dynamicTagsImg);
                this.$emit('logo', this.logo_path);
                this.$emit('icon', this.icon_path);
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        // 抽离方法
        // this.loginWaysData ---dataFrom
        // this.formNewData ----FormDatas
        // WayName  ---tags
        // this.dynamicTags ---diaFromDatas
        // this.dialogFormVisible ----flag-----#####
        submitForm(formName, dataFrom, FormDatas, tags, diaFromDatas) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // console.log(this.formNewData);

                    dataFrom.push(FormDatas);
                    if (formName == 'ruleForm') {
                        this.$emit('loginwaycheck', dataFrom);
                    } else {
                        this.$emit('footArea', this.footDatas);
                    }
                    //添加展示的tag
                    diaFromDatas.push(FormDatas[tags]);

                    //判断
                    if (formName == 'ruleForm') {
                        this.dialogFormVisible = false;
                        // return false;
                    } else if (formName == 'ruleFormFootUp') {
                        this.dialogFormVisibleUp = false;
                        // return false;
                    } else if (formName == 'ruleFormFootDown') {
                        this.dialogFormVisibleDown = false;
                        // return false;
                    }
                } else {
                    return false;
                }
            });
        },
        //组织初始化数据
        //dataFrom ---this.loginWaysData
        //dataTo --- this.dynamicTags
        rulesWayData(dataFrom, dataTo, tagName) {
            dataFrom.forEach((item) => {
                dataTo.push(item[tagName]);
            });
        },
        saveForm() {
            var data = {
                data: {
                    lang: this.lang,
                    logo_path: this.logo_path,
                    icon_path: this.icon_path,
                    userData: {
                        username: this.userData.username,
                        useQingFlowVersion: this.userData.useQingFlowVersion
                    },
                    styleData: {
                        qf_logo: this.styleData.qf_logo,
                        qf_login: this.styleData.qf_login,
                        qf_footer: this.styleData.qf_footer,
                        login_type: this.styleData.login_type,
                        login_tips: this.styleData.login_tips,
                        login_footer: this.styleData.login_footer,
                        homeUrl: this.styleData.homeUrl,
                        qf_homeStyle: this.styleData.qf_homeStyle,
                        qf_swiper_way: this.styleData.qf_swiper_way,
                        qf_loopvalue: this.styleData.qf_loopvalue,
                        qf_swiper_pages: this.styleData.qf_swiper_pages,
                        // -----------
                        qflowType: this.styleData.qflowType,
                        qflowDomain: this.styleData.qflowDomain,
                        settingHide: '2'
                    },
                    backgroundImg: this.dynamicTagsImg,
                    loginWays: this.loginWaysData,
                    footData: this.footDatas
                }
                // logo_path: this.logo_path,
                // background_path: this.background_path
            };
            this.form.settingData = JSON.stringify(data);
        },
        // handleAdd() {
        //     this.open = true;
        //     this.title = '自定义登录页配置';
        // },
        cancel() {
            this.open = false;
        },
        getCheckRadio: function (value) {
            this.QFversionData = value;
        },
        //进行handleCloseMY函数的封装
        // dataFrom  -----this.dynamicTags //数据源
        // toFrom ----this.loginWaysData
        handleCloseMY(tag, dataFrom, toFrom, tagName) {
            dataFrom.splice(dataFrom.indexOf(tag), 1);
            //进行移除操作
            // this.loginWaysData.splice(this.loginWaysData.indexOf());
            let deleteIndex = 0;
            for (let index = 0; index < toFrom.length; index++) {
                const element = toFrom[index];
                if (element[tagName] == tag) {
                    deleteIndex = index;
                }
            }
            toFrom.splice(deleteIndex, 1);
        },
        showInput() {
            //改变为dialog
            if (this.loginWaysData.length >= 5) {
                this.showElAlert = true;
                setTimeout(() => {
                    this.showElAlert = false;
                }, 5000);
            } else {
                this.dialogFormVisible = true;
                // this.$refs[formName].resetFields();
                this.formNewData = {};
            }
        },
        showInputUp() {
            if (this.footDatas.topArea.length >= 5) {
                this.showElAlert2 = true;
                setTimeout(() => {
                    this.showElAlert2 = false;
                }, 5000);
            } else {
                this.dialogFormVisibleUp = true;
                // this.$refs[formName].resetFields();
                this.formNewDataFooter = {};
            }
        },
        showInputDown() {
            if (this.footDatas.underArea.length >= 5) {
                this.showElAlert2 = true;
                setTimeout(() => {
                    this.showElAlert2 = false;
                }, 5000);
            } else {
                this.dialogFormVisibleDown = true;
                // this.$refs[formName].resetFields();
                this.formNewDataFooter = {};
            }
        },
        submitFormAll() {
            this.allRight = true;
            this.$emit('allright', this.allRight);
            this.closeRight();
        },
        cancelFormData(formName) {
            this.allRight = false;
            this.$emit('allright', this.allRight);
            this.$refs[formName].resetFields();
        },

        //background img
        handleCloseImg(tag) {
            this.dynamicTagsImg.splice(this.dynamicTagsImg.indexOf(tag), 1);
        },

        showInputImg() {
            if (this.dynamicTagsImg.length >= 5) {
                this.showElAlert3 = true;
                setTimeout(() => {
                    this.showElAlert3 = false;
                }, 5000);
            } else {
                this.inputVisibleImg = true;
                this.$nextTick(() => {
                    this.$refs.saveTagInputImg.$refs.input.focus();
                });
            }
        },

        handleInputConfirmImg() {
            let inputValueImg = this.inputValueImg;
            if (inputValueImg) {
                this.dynamicTagsImg.push(inputValueImg);
            }
            this.inputVisibleImg = false;
            let innerObj = {
                flag: this.inputVisibleImg
            };
            this.$emit('theNewImg', innerObj);
            this.inputValueImg = '';
        },
        getInputText(value) {
            console.log(value);
            // alert('dasf');
            this.$emit('logo', this.logo_path);
        },
        getInputTexticon() {
            this.$emit('icon', this.icon_path);
        }
    },

    created() {
        this.getData();
        // 将图片数据传递到父组件
    }
};
</script>
<style scoped>
@import './index.scss';
</style>
