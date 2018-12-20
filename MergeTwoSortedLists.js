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
var mergeTwoLists = function(l1, l2) {
	/**
	 *这里直接从头对比两个链表的值，值小的直接连到新链表中，并把指针指向下一位
	 */
	 /*
    let head = {val: -1, next: null};
    let p = head;
    while (l1 && l2) {
    	if (l1.val < l2.val) {
    		p.next = l1;
    		l1 = l1.next;
    	} else {
    		p.next = l2;
    		l2 = l2.next;
    	}
    	p = p.next;
    }
    p = l1 || l2;
    return head.next;
    */

    /**
     *这里算法同上，但是做成递归，对比两个链表的当前值，值小的节点的next指向下一位对比后值小的节点
     *递归会对比到最后再把链表连接起来
     */
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }
};