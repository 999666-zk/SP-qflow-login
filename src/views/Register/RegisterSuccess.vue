<template>
    <div class="out-box">
        <div class="inner_box">
            <div><img width="54" src="@/assets/icon/success.svg" alt="" /></div>
            <div class="inner_text">Register successfully!</div>
            <el-button type="primary" class="btn_log" @click="toLogin">Log in</el-button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {
        toLogin() {
            this.$router.push('/login');
        }
    },
    created() {},
    mounted() {}
};
</script>

<style lang="scss" scoped>
.out-box {
    width: 100vw;
    height: 100vh;
    background: #f9f9fc;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner_box {
        width: 220px;
        height: 164px;
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        align-items: center;
        .el-icon-success:before {
            width: 54px;
            height: 54px;
            background: #43b16f;
        }
        .inner_text {
            margin-top: 6px;
            text-align: center;
            width: 100%;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
        }

        .btn_log {
            margin-top: 32px;
            font-family: 'PingFang SC';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        }
    }
}

::v-deep .el-button {
    padding: 8px 16px !important;
}

$main_color1: #ffb061;
$main_color2: #fb9337;
::v-deep .el-button--primary {
    color: #fff;
    background-color: $main_color2;
    border-color: $main_color2;
    transition: all 0.3s;
}
::v-deep .el-button--primary:hover {
    color: #fff;
    background-color: $main_color1;
    border-color: $main_color1;
}
</style>
