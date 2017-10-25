/**
 * @param {number} x
 * @return {number}
 */

 /**
  *思路：
  *通过取余获得低位，加入新变量中
  *同时原参数通过除以10减位
  *
  */

var reverse = function(x) {
    var res = 0;

    while (x) {
    	res = res * 10 + x % 10;
    	x = parseInt(x / 10);
    }

    if (res > Math.pow(2, 31) || -res > Math.pow(2, 31)) {
    	res = 0;
    }

    return res;
};
