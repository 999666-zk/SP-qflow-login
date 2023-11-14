<template>
    <div>
        <!-- <HeadTop></HeadTop> -->
        <div
            :class="styleData.qf_homeStyle == 'allView' ? 'everyDayRate login-wrap' : 'everyDayRate-lr login-wrap-lr'"
            :style="{
                backgroundImage:
                    styleData.qf_homeStyle == 'allView' ? `url(${imgObj.flag == false ? Imgs[Imgs.length - 1] : Imgs[aroundNum]})` : 'none',
                width: `${100 - changeWidth}%`
            }"
            @click.stop="hiddenRight"
        >
            <!-- 登录框的位置 -->
            <div :class="styleData.qf_homeStyle == 'allView' ? styleData.qf_login : 'right-lr'" id="mobile_form">
                <div :class="styleData.qf_homeStyle == 'allView' ? 'left-box' : 'left-box-lr'">
                    <!-- 在这里展示轮播图 -->
                    <div v-show="styleData.qf_homeStyle == 'leftAndright'" id="swiper-out-box">
                        <el-carousel
                            :direction="styleData.qf_swiper_way"
                            :autoplay="styleData.qf_loopvalue"
                            :loop="true"
                            arrow="never"
                            :interval="3500"
                            :indicator-position="styleData.qf_swiper_pages"
                        >
                            <el-carousel-item v-for="(item, index) in Imgs" :key="index">
                                <img :src="item" alt="图片" class="swipermy-imgs" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div :class="styleData.qf_homeStyle == 'allView' ? 'right-box' : 'right-box-lr'">
                    <div class="inner-box">
                        <LoginNew
                            :allObj="allData"
                            :styleData="styleData"
                            :logo_path="logo_path"
                            :sendData="{ formData: formData, qrCode: qrCode }"
                        />
                    </div>
                </div>

                <div class="setting-right">
                    <SettingTools
                        ref="child"
                        @openBox="openB"
                        @closeBox="closeB"
                        @pullData="getAllData"
                        @loginwaycheck="getway"
                        @footArea="getTopData"
                        @sendImgs="getImgs"
                        @allright="getBlu"
                        @theNewImg="getNewImg"
                        @logo="getlogo"
                        @pubkey="getpubkey"
                        @icon="geticon"
                    ></SettingTools>
                </div>
            </div>

            <!-- footer的位置 -->
            <div class="footer-bottom" v-if="styleData.login_footer == 1 && styleData.qf_homeStyle === 'allView'">
                <div class="footer-bottom-center">
                    <div class="move-box">
                        <div
                            class="top-area"
                            :class="
                                styleData.qf_footer == 'footer-bottom-center-up' && allRight == false ? styleData.qf_footer : 'top-area'
                            "
                        >
                            <div class="footer-item" v-for="(item, index) in footDatas.topArea" :key="index">
                                <a :href="item.href">
                                    <img v-if="item.img" :src="item.img" alt="" width="20px" height="20px" />
                                    <img onerror="this.style.display='none'" src="#" alt="" />
                                    <p style="float: right; height: 20px; line-height: 20px; margin: 0px 0px 0px 5px; color: #fff">
                                        {{ item.text }}
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div
                            class="under-area"
                            :class="
                                styleData.qf_footer == 'footer-bottom-center-down' && allRight == false ? styleData.qf_footer : 'under-area'
                            "
                        >
                            <div class="footer-item" v-for="(item, index) in footDatas.underArea" :key="index">
                                <a :href="item.href">
                                    <img v-if="item.img" :src="item.img" alt="" width="20px" height="20px" />
                                    <img onerror="this.style.display='none'" src="#" alt="" />
                                    <p style="float: right; height: 20px; line-height: 20px; margin: 0px 0px 0px 5px; color: #fff">
                                        {{ item.text }}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginNew from '@/views/Register/LoginNew.vue';
import SettingTools from '@/components/SettingTools/SettingTools.vue';
import HeadTop from '@/components/HeadTop/HeadTop.vue';
export default {
    name: 'LoginPage',
    filters: {
        capitalize: function (value) {
            return value + 'Login';
        }
    },
    props: {
        msg: String
    },
    data() {
        return {
            styleData: {},
            logo_path: '',
            footerData: [],
            open: false,
            param: {
                username: '',
                password: ''
            },
            form: {
                settingData: ''
            },
            title: '',
            pubKey: '',
            EMAIL_REGEX:
                /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            MOBILENUM_REGEX: /^\d{4,11}$/,
            changeWidth: 0,
            loginWays: [],
            footDatas: {},
            allRight: false,
            // 背景图片
            Imgs: [],
            imgObj: {},
            // 所有的数据
            allData: {},
            // icon图标路径
            icon_path: '',
            // ip api url地址
            ipAddress: '',

            // 表单数据
            formData: {},
            qrCode: ''
        };
    },
    created() {},
    beforeUpdate() {
        this.setIcon();
    },
    computed: {
        aroundNum: function () {
            return Math.floor(Math.random() * this.Imgs.length);
        }
    },
    methods: {
        hiddenRight() {
            this.$refs.child.closeRight();
            // console.log('asdfa');
        },
        closeB: function (res) {
            this.changeWidth = res;
        },
        openB: function (res) {
            this.changeWidth = res;
        },
        //----------可优化-----------
        getpubkey(res) {
            this.pubKey = res;
        },
        getNewImg(res) {
            this.imgObj = res;
        },
        getImgs(res) {
            this.Imgs = res;
        },
        getway(res) {
            this.loginWays = res;
        },
        getTopData(res) {
            this.footDatas = res;
        },
        getBlu(res) {
            this.allRight = res;
        },
        getAllData(res) {
            this.styleData = res.styleData;
            this.footerData = res.footerData;
            this.loginWays = res.loginWays;
            this.footDatas = res.footData;
            this.allData = res;
        },
        getlogo(res) {
            this.logo_path = res;
        },
        geticon(res) {
            console.log(res);
            this.icon_path = res;
        },
        // icon
        setIcon() {
            document.querySelector('link').href = this.icon_path;
        }
    },
    async mounted() {
        let res = await sessionStorage.getItem('params');
        // if (res == null) {
        //     this.$router.push('/register');
        //     return;
        // }
        console.log(res, 'session');
        const { formData, qrCode } = JSON.parse(res);
        this.formData = formData;
        this.qrCode = qrCode;
    },
    components: {
        LoginNew,
        SettingTools,
        HeadTop
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../LoginPage/index.scss';
</style>
