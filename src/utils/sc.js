import CryptoJS from 'crypto-js';
import { SECRETKEY } from '@/config/index';

function myCryptoJs(plaintext) {
    const encryptedText = CryptoJS.TripleDES.encrypt(plaintext, SECRETKEY, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    return encryptedText;
}

function myDeCryptoJs(plaintext) {
    const decryptedBytes = CryptoJS.TripleDES.decrypt(plaintext, SECRETKEY);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}
export { myCryptoJs, myDeCryptoJs };
