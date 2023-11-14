function isMobile() {
    let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
}

function sortArrayByFirstLetter(arr) {
    return arr.sort((a, b) => {
        const firstLetterA = a[0].toUpperCase();
        const firstLetterB = b[0].toUpperCase();

        if (firstLetterA < firstLetterB) {
            return -1;
        }
        if (firstLetterA > firstLetterB) {
            return 1;
        }
        return 0;
    });
}

// 判断移动端是什么类型的
async function getTerminalType() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        return 'mobile';
    } else if (/(Android)/i.test(navigator.userAgent)) {
        return 'mobile';
    } else {
        return 'pc';
    }
}

export { isMobile, sortArrayByFirstLetter, getTerminalType };
