<template>
    <div style="user-select: none">
        <drag-verify-img-chip
            ref="sss"
            :imgsrc="checkImg"
            :isPassing.sync="isPassing"
            :showRefresh="true"
            :barWidth="40"
            text="Swiping to the right side"
            successText="Verification passed"
            handlerIcon="el-icon-d-arrow-right"
            successIcon="el-icon-circle-check"
            @refresh="reimg"
            @passcallback="pass"
            @passfail="nopass"
            :width="280"
            refreshIcon="el-icon-refresh-right"
            successTip="Verification passed, more than 80% of users"
            failTip="Verification failed, please try again"
        >
        </drag-verify-img-chip>
    </div>
</template>

<script>
import dragVerifyImgChip from 'vue-drag-verify-img-chip';
export default {
    props: {
        message: Object,
        mainKey: Number
    },
    components: { dragVerifyImgChip },
    data() {
        return {
            pick: '',
            // 该图片路径必须为根路径
            imgURl: ['./verify1.png', './verify2.png', './verify3.png', './verify4.png', './verify5.png', './verify6.png'],
            checkImg: ``,
            isPassing: null
        };
    },
    computed: {},
    methods: {
        pass() {
            // 这里执行验证成功后的内容
            const { isPass } = this.message;
            this.$emit('sendMessage', { isPass: !isPass });
        },
        nopass() {
            // 验证未通过
            const { isFailed } = this.message;
            this.$emit('sendFiledMessage', { isFailed: !isFailed });
        },
        reimg() {
            let radomNum = this.getRandomInt(6);
            this.checkImg = this.imgURl[radomNum];
        },

        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    },
    created() {},
    mounted() {
        this.reimg()
        const min = 1;
        const max = 6;
        const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
        this.checkImg = `./verify${randomInteger}.png`;
    },
    watch: {
        mainKey(pre, next) {
            if (pre !== next) {
                this.reimg();
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
