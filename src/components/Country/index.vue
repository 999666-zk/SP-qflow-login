<template>
    <div class="intl-tel-input allow-dropdown">
        <div class="flag-container">
            <div class="selected-flag" :title="currentData.name + ': +' + currentData.dialCode" @click="hideSubMenu = !hideSubMenu">
                <div :class="'iti-flag ' + currentData.code"></div>
                <div id="downs_icon" :class="hideSubMenu ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></div>
            </div>
            <transition name="fade">
                <ul class="country-list" v-show="!hideSubMenu">
                    <li
                        v-for="item in frontCountriesArray"
                        :key="item.id"
                        :class="'country ' + (item.code == currentCode ? 'highlight' : '')"
                        @click="
                            currentCode = item.code;
                            hideSubMenu = true;
                            setCountry(item);
                        "
                    >
                        <div class="flag-box">
                            <div :class="'iti-flag ' + item.code"></div>
                        </div>
                        <span class="country-name">{{ item.name }}</span>
                        <span class="dial-code">+{{ item.dialCode }}</span>
                    </li>
                    <li class="divider"></li>
                    <li
                        v-for="item in countriesArray"
                        :key="item.id"
                        :class="'country ' + (item.code == currentCode ? 'highlight' : '')"
                        @click="
                            currentCode = item.code;
                            hideSubMenu = true;
                            setCountry(item);
                        "
                    >
                        <div class="flag-box">
                            <div :class="'iti-flag ' + item.code"></div>
                        </div>
                        <span class="country-name">{{ item.name }}</span>
                        <span class="dial-code">+{{ item.dialCode }}</span>
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
import countries from './countryList';

export default {
    props: {
        toFront: {
            type: Array,
            default: () => {
                return [];
            }
        },
        // 193 新加坡
        // 43 中国
        countryCode: {
            type: String,
            default: Object.keys(countries)[193],
            validator(code) {
                var clearCode = String(code).toLowerCase();
                return !!countries[clearCode];
            }
        }
    },

    data() {
        return {
            currentCode: this.countryCode,
            hideSubMenu: true
        };
    },

    computed: {
        currentData() {
            return countries[this.currentCode];
        },
        frontCountriesArray() {
            const toFrontCodes = {};
            this.toFront.forEach((code) => {
                const stringCode = String(code);
                const needObj = countries[stringCode];

                if (needObj) {
                    toFrontCodes[stringCode] = needObj;
                }
            });
            return toFrontCodes;
        },
        countriesArray() {
            const countryCopie = { ...countries };
            this.toFront.forEach((code) => {
                delete countryCopie[code];
            });
            return countryCopie;
        }
    },

    watch: {
        countryCode(newCode) {
            this.setCountry(countries[newCode]);
        }
    },

    methods: {
        setCountry(item) {
            this.currentCode = item.code;
            this.toFront.push(String(item.code));
            this.$emit('excountry', item);
        }
    },

    mounted() {
        this.$emit('excountry', countries[this.countryCode]);
    }
};
</script>

<style lang="scss" scoped>
@import 'intl.css';

.intl-tel-input {
    width: 30px;
    height: 33px;
    color: #666;
    font-size: 14px;
    .country-list {
        width: 335px;
        height: 400px;
        margin-top: 2px;
    }
}
 
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

#downs_icon {
    position: absolute;
    left: 60%;
    top: 35%;
    color: #c0c4cc;
    transition: all 1s;
}
</style>
