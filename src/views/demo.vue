<template>
    <div>
        <div>
            <el-input type="password" v-model="password" @input="checkPasswordStrength" placeholder="Enter your password"></el-input>
            <el-progress
                v-if="passwordStrength"
                :percentage="passwordStrength.score * 25"
                status="text"
                :text-inside="true"
                :color="getProgressColor(passwordStrength.score * 25)"
            ></el-progress>
            <div v-if="passwordStrength">
                <p>
                    Password Strength:
                    {{
                        passwordStrength.score === 0
                            ? 'Very Weak'
                            : passwordStrength.score === 1
                            ? 'Weak'
                            : passwordStrength.score === 2
                            ? 'Moderate'
                            : passwordStrength.score === 3
                            ? 'Strong'
                            : 'Very Strong'
                    }}
                </p>
            </div>
        </div>
        <div>
            <Country></Country>
        </div>
    </div>
</template>
<script>
import zxcvbn from 'zxcvbn';
import Country from '../components/Country/index.vue';
export default {
    components: {Country},
    data() {
        return {
            password: '',
            passwordStrength: null
        };
    },
    computed: {},
    methods: {
        evaluatePasswordStrength(password) {
            const result = zxcvbn(password);
            return result;
        },
        checkPasswordStrength() {
            const result = this.evaluatePasswordStrength(this.password);
            this.passwordStrength = result;
        },
        getProgressColor(percentage) {
            if (percentage <= 25) {
                return 'red'; // 其他情况显示绿色
            } else if (percentage <= 50) {
                return 'orange'; // 当百分比小于等于75时，显示黄色
            } else if (percentage <= 75) {
                return 'yellow'; // 当百分比小于等于50时，显示橙色
            } else {
                return 'green'; // 当百分比小于等于25时，显示红色
            }
        }
    },
    created() {},
    mounted() {}
};
</script>

<style lang="scss" scoped></style>
