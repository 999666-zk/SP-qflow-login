<template>
  <div class="out-box">
    <div class="middle-box">
      <div class="top">
        <img :src="require('./imgs/403.svg')" :alt="alt" class="nofound" />
      </div>
      <div class="bottom">
        <div>{{ textTitle }}</div>
        <div>{{ text }}</div>
        <div v-if="buttonSetting.isShowButton">
          <a
            :href="buttonSetting.clickTo.href"
            :target="buttonSetting.clickTo.target"
            ><button>{{ buttonSetting.buttonText }}</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 主要图片地址
      alt:'403',
      textTitle: "You are not currently authorized to view this page",
      text: "You can try to switch the corresponding workspace, or contact the administrator",
      buttonSetting: {
        // 是否需要按钮
        isShowButton: false,
        // 按钮中的内容
        buttonText: "button",
        // 按钮相关配置
        clickTo: {
          href: "https://www.baidu.com",
          target: "_self",
        },
      },
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
  background: #fb9337;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
}
.out-box {
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .middle-box {
    text-align: center;
    img {
      width: 80%;
      /* height: 35vh; */
    }
    .bottom {
      margin-top: 20px;
      font-size: 20px;
      color: rgb(196, 196, 196);
      text-align: center;
      & > div {
        color: #767e89 !important;
        font-family: "PingFang SC";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
      }
    }
  }
}
</style>
