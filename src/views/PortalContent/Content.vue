<template>
    <div class="loading" v-if="loading">
        <loading></loading>
    </div>
    <div v-else>
        <template v-if="result.length == 0">
            <Nodata></Nodata>
        </template>
        <template v-else>
            <div class="out-bb">
                <el-row :gutter="24">
                    <div>
                        <!-- 核心 元素 -->
                        <el-col
                            class="color2"
                            :sm="spanColnumEmpty"
                            :md="spanColnumEmpty"
                            :lg="spanColnumEmpty"
                            :xl="spanColnumEmpty"
                            :xs="spanColnumEmpty"
                        ></el-col>
                        <el-col
                            v-for="(item, index) in result"
                            :class="index % 4 === 0 || index % 4 === 1 ? 'color1' : 'color2'"
                            :key="item.titles"
                            :sm="spanColnum"
                            :md="spanColnum"
                            :lg="spanColnum"
                            :xl="spanColnum"
                            :xs="spanColnumsp"
                            ><a :href="item.targetUrl" target="_blank">
                                <div class="grid-content bg-purple">
                                    <div class="left_box">
                                        <div class="icon"><img :src="item.iconurl" width="18" height="18" /></div>
                                        <div class="color1_font">{{ item.titles }}</div>
                                    </div>
                                    <div class="right_box"><img class="rows" src="@/assets/icon/rows.svg" alt="" /></div>
                                </div> </a
                        ></el-col>
                    </div>
                </el-row>
            </div>
        </template>
    </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import Nodata from './nonedata.vue';
import { reportShowApi } from '@/api/https.js';
export default {
    components: { Loading, Nodata },
    data() {
        return {
            titles: '',
            spanColnumEmpty: 0,
            targetUrl: '',
            spanColnum: 12,
            spanColnumsp: 24,
            userid: '',
            result: [],
            showData: [],
            iconUrl: [
                { flag: 'PSS', icon: require('@/assets/icon/icon_1.svg') },
                { flag: 'PTS', icon: require('@/assets/icon/icon_2.svg') },
                { flag: 'PIS', icon: require('@/assets/icon/icon_3.svg') },
                { flag: 'PI', icon: require('@/assets/icon/icon_4.svg') }
            ],
            loading: false
        };
    },
    computed: {},
    methods: {
        // 获取请求的数据
        async getAlldatas() {
            if (this.userid != null) {
                await reportShowApi(JSON.stringify({ userId: this.userid })).then(
                    (res) => {
                        // console.log(res);
                        if (res.status == 200) {
                            if (res.data.code == 0) {
                                const { result } = res.data;
                                this.result = result;
                                //开启开关
                                this.loading = false;

                                for (let i = 0; i < this.iconUrl.length; i++) {
                                    for (let j = 0; j < this.result.length; j++) {
                                        if (this.iconUrl[i].flag == this.result[j].flag) {
                                            this.result[j].iconurl = this.iconUrl[i].icon;
                                        } else {
                                            this.result[j].iconurl = this.iconUrl[0].icon;
                                        }
                                    }
                                }
                                // 灵魂判断
                                if (this.result.length == 1) {
                                    this.spanColnum = 8;
                                    this.spanColnumEmpty = 8;
                                }
                                if (this.result.length == 2) {
                                    this.spanColnumEmpty = 0;
                                    this.spanColnum = 12;
                                }
                                if (this.result.length == 3) {
                                    this.spanColnumEmpty = 0;
                                    this.spanColnum = 8;
                                }
                                if (this.result.length > 3) {
                                    this.spanColnumEmpty = 0;
                                    this.spanColnum = 12;
                                }
                            } else {
                                this.$notify.error({
                                    title: `error${res.data.code}`,
                                    message: 'Request error, please check your parameters',
                                    duration: 2000,
                                    position: 'top-right',
                                    showClose: true
                                });
                            }
                        }
                    },
                    (err) => {
                        this.$notify.error({
                            title: `Error Code ${err.response.status}`,
                            message: 'Request error, please check your parameters',
                            duration: 2000,
                            position: 'top-right',
                            showClose: true
                        });
                    }
                );
            } else {
                this.$notify.error({
                    title: 'error',
                    message: 'Request error, please check your parameters',
                    duration: 2000,
                    position: 'top-right',
                    showClose: true
                });
            }
        }
    },
    created() {},
    async mounted() {
        //开启开关
        this.loading = true;
        this.userid = this.$route.query.qfExtUserId || null;
        await this.getAlldatas();
    }
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
