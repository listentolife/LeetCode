/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /**
  *思路：
  *按链表遍历相加
  *如果有进位则保存进位到下一轮加入
  *
  */

var addTwoNumbers = function(l1, l2) {
    var val1,val2; // l1.val,l2.val
    var value = 0; // 0 or 1 
    var newVal = 0;
    var head = new ListNode(0); // head of list

    while (l1 || l2 || value) {
    	//获取val
    	if (l1) {
    		val1 = l1.val;
    	} else {
    		val1 = 0;
    	}
    	if (l2) {
    		val2 = l2.val;
    	} else {
    		val2 = 0;
    	}
    	//计算与进位
    	value = Math.floor((val1 + val2 + value) / 10);
    	newVal = Math.floor((val1 + val2 + value) % 10);
    	//增加节点
    	if (head.next) {
    		var oldNode = head.next;
    		while (oldNode.next) {
    			oldNode = oldNode.next;
    		}
    		oldNode.next = new ListNode(newVal);
    	} else {
    		head.next = new ListNode(newVal);
    	}
    	//更新最新节点
    	if (l1) {
    		l1 = l1.next;
    	}
    	if (l2) {
    		l2 = l2.next;
    	}
    }

};
