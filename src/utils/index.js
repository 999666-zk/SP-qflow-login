// 1，设置Cookie：

function setCookie(key, val, t) {
  var oDate = new Date();

  oDate.setDate(oDate.getDate() + t); //setDate() 方法将月份中的某一天设置为日期对象。

  document.cookie = key + "=" + val + ";expires=" + oDate.toGMTString();
}

// 2，获取Cookie：

function getCookie(key) {
  var arr1 = document.cookie.split("; ");

  for (var i = 0; i < arr1.length; i++) {
    var arr2 = arr1[i].split("=");

    for (var j = 0; j < arr2.length; j++) {
      if (arr2[0] == key) {
        return decodeURI(arr2[1]);
      }
    }
  }
}

// 3，删除Cookie：

function removeCookie(key) {
  setCookie(key, "", -1);
}

// 截取后四位字符串
function cutString(str) {
  let arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  let newStr = str.substring(0, 4);
  let res = newStr.split("").reverse().join("");
  return res;
}


function getCookieCname(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}

export { setCookie, removeCookie, getCookie, cutString,getCookieCname };
