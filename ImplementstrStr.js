/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 /**
  *先判断两个字符串的长度
  *设定i，j用来指定当前字符位，顺序遍历haystack，遇到与needle第一位相同后，i也开始向后移动
  *如果i移动过程中遇到不相同，则j会调回遇到与needle第一位相同的字符的后一位继续遍历
  *跳出while，如果j等于needle的长度，且没有遍历完haystack，说明遇到有相同的字符段，则返回遇到第一位字符的位置i-j
  */
var strStr = function(haystack, needle) {
	/*
	return haystack.indexOf(needle);
	*/

    if (haystack === "" || needle === "") {
    	return 0;
    }
    if (needle.length > haystack.length) {
    	return -1;
    }

    let i = 0;
    let j = 0;
    While (i < haystack.length && j < needle.length) {
    	if (haystack[i] === needle[j]) {
    		j++;
    	} else {
    		i = i - j;
    		j = 0;
    	}

    	i++;
    }

    return (i === haystack.length && j < needle.length) ? -1 : i - j;
};