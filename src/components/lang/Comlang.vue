<template>
    <el-form-item :label="$t('message.lang')">
        <el-radio-group v-model="language" size="mini">
            <el-radio v-for="item of lang" :label="item.value" border>{{ item.label }}</el-radio>
        </el-radio-group>
    </el-form-item>
</template>

<script>
import Vue from 'vue';
export default {
    components: {},
    data() {
        return {
            language: 0,
            lang: [
                {
                    label: this.$t('message.zh'), //模板语法的一种
                    value: 'zh'
                },
                {
                    label: this.$t('message.en'),
                    value: 'en'
                }
            ]
        };
    },
    mounted() {
        this.$i18n.locale === 'zh' ? (this.language = 0) : (this.language = 1); //数据加载时判断当前属于哪种语言，为其单选按钮赋值
    },
    watch: {
        // 侦听器
        language: function (val) {
            //侦听单选按钮的变化，从而进行切换语言
            val === 'zh' ? (this.$i18n.locale = 'zh') : (this.$i18n.locale = 'en');
            Vue.set(this.lang, 0, { label: this.$t('message.zh'), value: 'zh' });
            Vue.set(this.lang, 1, { label: this.$t('message.en'), value: 'en' });
            console.log('ff', this.language);
            this.$emit('sendmsg', this.language);
        }
    }
};
</script>

<style lang="scss" scoped></style>
