<template>
    <div id="app">
        <!-- <video id="v1" autoplay loop muted>
            src="https://file.qingflow.com/assets/passport/passport.mp4"
            <source src="#" type="video/mp4" />
        </video> -->
        <!-- <Loading></Loading> -->
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
// import Loading from './components/Loading.vue'
export default {
    data() {
        return {};
    },
    // components:{Loading},
    methods: {},
};
</script>
<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
}
html,
body {
    font-size: 16px !important;
    color: #121315 !important;
}
video {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // min-width: 100vw;
    // min-height: 100vh;
    width: 100%;
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/
    /*filter:grayscale(100%); //背景灰度设置*/
    z-index: -11;
}
source {
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
}

#app {
    width: 100vw;
    height: max-content;
    /* padding-bottom: 24px; */
    /* background: #f8f9fb !important; */
}
.fade-enter-active,
.fade-leave-avtive {
    transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
