/**
 * @param {number} n
 * @return {string}
 */
 /**
  *这里直接从头遍历每列序列，计数每个数字重复次数，直到遇到不同时，把计数跟数值一并加到字符串中
  */
var countAndSay = function(n) {
    let str = '1';
    for (let i = 1; i < n; i++) {
    	let strArr = str.split('');
    	str = "";
    	let count = 1;
    	for (let j = 0; j < strArr.length; j++) {
    		if (strArr[j] !== strArr[j + 1]) {
    			str += count + strArr[j];
    			count = 1;
    		} else {
    			count++;
    		}
    	} 
    }  
    return str;
};