<template>
    <div class="out">
        <div class="innerbox">
            <img src="https://file.qingflow.com/assets/illustration/ill-no-date.svg" width="200" style="margin: auto" alt="No data yet" />
            <span class="title">No data yet</span>
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
    methods: {},
    created() {},
    mounted() {}
};
</script>

<style lang="scss" scoped>
.out {
    width: 300px;
    height: auto;
    margin: auto;
    margin-top: 20px;
    .innerbox {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
.title {
    font-size: 14px;
    line-height: 24px;
    color: #767e89;
    text-align: center;
}
</style>
