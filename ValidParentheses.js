/**
 * @param {string} s
 * @return {boolean}
 */
/**
 *直接通过栈来判断
 *如果是({[，则直接入栈，
 *如果是]})，则把栈中最后一位拿出，判断是否为对应的符号，是则继续，否则返回false
 *最后判断栈的长度是否为0
 *
 *还有一种做法是声明一个对象，把括号对应起来，再用于判断
 */

var isValid = function(s) {
	let len = s.length;
    if (len % 2 === 1) {return false;}

    let stack = [];
    for (var i = 0; i < len; i++) {
    	if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
    		stack.push(s[i]);
    	} else {
    		switch (s[i]) {
    			case ')':
    				if (stack.pop() !== '(') {
    					return false;
    				}
    				break;
    			case '}':
    				if (stack.pop() !== '{') {
    					return false;
    				}
    				break;
    			case ']':
    				if (stack.pop() !== '[') {
    					return false;
    				}
    				break;
    		}
    	}
    }
    return stack.length === 0;
}
