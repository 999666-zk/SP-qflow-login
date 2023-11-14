const EMAIL_REG = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// const PHONE_REG = /^[89]\d{7}$/;
const PASSWORD_REG = /^(?!(?:[A-Z]+|[a-z]+|\d+|[@#$%^&+=]+)$).{12,}$/;

// 最小长度为 12 个字符
const REGEXLENGHT = /^.{12,}$/;

//  是否包含小写字母
const REGEXLOWER = /[a-z]/;

// 是否包含大写字母
const REGEXUPER = /[A-Z]/;

// 是否包含数字
const REGEXNUMBER = /\d/;

// 特殊字符
const REGEXSP = /[\W_]/;

// 最多200个字符
const MAXLENGHT = /^.{1,200}$/;

export { EMAIL_REG, PASSWORD_REG, REGEXLENGHT, REGEXLOWER, REGEXUPER, REGEXNUMBER, REGEXSP,MAXLENGHT };
