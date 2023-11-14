// 时间戳转固定格式
export const timesToFormateall = (times) => {
    var date = new Date(times),
      Y = date.getFullYear() + "-",
      M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-",
      D = date.getDate() < 10 ? "0" + date.getDate()+" " : date.getDate() + " ",
  
      h = date.getHours() < 10 ? "0" + date.getHours()+":" : date.getHours() + ":",
      m =
        date.getMinutes() < 10
          ? "0" + date.getMinutes()+':'
          : date.getMinutes() + ":",
      s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  
    return Y + M + D + h + m + s;
  };