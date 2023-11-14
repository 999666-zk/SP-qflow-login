<template>
    <div><el-button @click="goto"> click </el-button></div>
</template>

<script>
import JSEncrypt from 'jsencrypt';
export default {
    components: {},
    data() {
        return {
            pubKey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCo/FEQ9gWvoUasO+POmAmjOFsBgACvzVRr8pRz1SrHmyP1TFNnrw89iPsgEAihRDaNJzm/Gu+z3mzZ6hS389yC3dU1Km6/mtIS+9+xQNpQVg0AeIfSEs80h5TVnOg/ip1BAyqxMTRE7Ta7lA2bcVjbYwj5fmckDAwIhi30yokkTwIDAQAB'
        };
    },
    computed: {},
    methods: {
        goto() {
            // let res = ES.encrypt(, );
            // console.log(res);

            let encryptor = new JSEncrypt();
            encryptor.setPublicKey(this.pubKey);
            let res = encryptor.encrypt({name:'jack',sex:'man'});
            console.log(res, 'pp');
            this.$router.push({ name: 'Demo', query: { res: res } });
        }
    },
    created() {},
    mounted() {}
};
</script>

<style lang="scss" scoped></style>
