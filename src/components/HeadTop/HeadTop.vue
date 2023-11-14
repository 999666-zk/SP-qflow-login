<template>
    <div style="position: relative; z-index: 999; width: 100%; transition: all 0.3s; background: #f8f9fb">
        <div class="tops" ref="top_box">
            <div class="center">
                <div class="right">
                    <div ref="alert" role="alert" class="fade d-flex align-items-center alert alert-primary alert-dismissible show sgds">
                        <button @click="closeAlert" type="button" class="btn-close btn-sm" aria-label="Close alert"></button>
                        <div><i class="el-icon-warning" id="warning-icon"></i></div>
                        <div class="notice" @click="showDownDivs">NOTICE</div>
                        <span class="notice" @click="showDownDivs">
                            <transition>
                                <template v-if="drawer">
                                    <svg
                                        t="1692843126191"
                                        class="icon"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        p-id="1569"
                                        width="20"
                                        height="20"
                                    >
                                        <path
                                            d="M793.024 710.272a32 32 0 1 0 45.952-44.544l-310.304-320a32 32 0 0 0-46.4 0.48l-297.696 320a32 32 0 0 0 46.848 43.584l274.752-295.328 286.848 295.808z"
                                            fill="#ed8e3e"
                                            p-id="1570"
                                        ></path>
                                    </svg>
                                </template>
                                <template v-else>
                                    <svg
                                        t="1692843165150"
                                        class="icon"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        p-id="2570"
                                        width="20"
                                        height="20"
                                    >
                                        <path
                                            d="M830.24 340.688l11.328 11.312a16 16 0 0 1 0 22.624L530.448 685.76a16 16 0 0 1-22.64 0L196.688 374.624a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l288.496 288.496 288.512-288.496a16 16 0 0 1 22.624 0z"
                                            fill="#ed8e3e"
                                            p-id="2571"
                                        ></path>
                                    </svg>
                                </template>
                            </transition>
                        </span>
                        <div class="middle">
                            <div></div>
                        </div>
                        <div ref="scroll-box" class="scroll-box">
                            <div class="spinnerText" ref="spinnerText" v-html="drawer ? htmls : spHtmls"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getNoticeApi } from '@/api/https.js';
export default {
    components: {},
    name: 'HeadTop',
    data() {
        return {
            datas: [
                { message: 'The Gateway application portal will be undergoing maintenance on Sun, 7 May 12-8am.' },
                { message: 'The portal will not be accessible during this period. We apologise for any inconvenience caused.' }
            ],
            htmls: `<p>The Gateway application portal will be undergoing maintenance on Sun, 7 May 12-8am.</p><p>The portal will not be accessible during this period. We apologise for any inconvenience caused.The Gateway application portal will be undergoing maintenance on Sun, 7 May 12-8am.</p>`,
            spHtmls:
                '<p>The Gateway application portal will be undergoing maintenance on Sun, 7 May 12-8am.</p><p>The portal will not be accessible during this period. We apologise for any inconvenience caused.The Gateway application portal will be undergoing maintenance on Sun, 7 May 12-8am.</p>',
            drawer: false,
            direction: 'ttb'
        };
    },
    computed: {},
    methods: {
        // richTextSplit
        richTextSplit(richText) {
            const regex = /<\/p>/g;
            let match;
            let matchCount = 0;

            while ((match = regex.exec(richText)) !== null) {
                matchCount++;
                if (matchCount === 2) {
                    const index = match.index;
                    return index;
                }
            }
        },
        closeAlert() {
            this.$refs.alert.remove();
            let bgdom = this.$refs['top_box'];
            bgdom.style.transition = 'all 0.3s';
            bgdom.style.background = '#f9fafc';
            bgdom.style.height = '68px';
        },
        async getNotice() {
            await getNoticeApi().then((res) => {
                if (res.data.code === 0) {
                    const { loginNotes } = res.data.result;
                    this.htmls = loginNotes;
                    this.spHtmls = loginNotes.slice(0, this.richTextSplit(loginNotes) + 4) + '<p>...</p>';
                }
            });
        },

        showDownDivs() {
            let dom = this.$refs['top_box'];
            let innerTextbox = this.$refs['spinnerText'];
            if (!this.drawer) {
                dom.style.transition = 'all 0.3s';
                dom.style.height = '80vh';
                innerTextbox.style.overflow = 'scroll';
                innerTextbox.style.innerHTMl = this.htmls;
                this.drawer = true;
            } else {
                dom.style.transition = 'all 0.3s';
                dom.style.height = '68px';
                this.drawer = false;
            }
        }
    },
    created() {},
    async mounted() {
        await this.getNotice();
        let doms = document.getElementsByClassName('btn-close btn-sm')[0];
        doms.addEventListener('click', () => {
            let dom = this.$refs['top_box'];
            dom.style.height = '68px';
        });
    }
};
</script>

<style lang="scss" scoped>
@import './index.scss';
.spinnerText {
    padding: 10px 0px 40px 0px;
    width: max-content;
    max-width: 860px;
    min-width: 860px;
    /* height: max-content !important; */
    height: 80vh;
    max-height: 800px !important;
    cursor: pointer;
    padding-bottom: 20px;
    ::v-deep p {
        margin-top: 0px !important;
        color: #db3f29 !important;
        font-weight: 900 !important;
    }
}
.scroll-box {
    height: 100%;
}

::v-deep .el-drawer__wrapper {
    margin-top: 95px !important;
}
</style>
