<template>
    <div class="loading"></div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>

<style lang="scss" scoped>
.loading {
    position: relative;
    margin: auto;
    width: 26px;
    height: 26px;
    border: 3px solid #ffbd0f;
    border-top-color: rgba(251, 147, 55, 0.2);
    border-right-color: rgba(251, 147, 55, 0.2);
    border-bottom-color: rgba(251, 147, 55, 0.2);
    border-radius: 100%;
    margin-top: 50px;
    /* animation: circle infinite 0.75s linear; */
    animation: loading-360 0.8s infinite linear;
}

@keyframes loading-360 {
    0% {
        transform: rotate(0deg); /*动画起始的时候旋转了0度*/
    }
    100% {
        transform: rotate(360deg); /*动画结束的时候旋转了360度*/
    }
}
</style>
