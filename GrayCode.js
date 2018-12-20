/*
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

Example 1:

Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1
Example 2:

Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
             A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
             Therefore, for n = 0 the gray code sequence is [0].
*/

/*
 * 格雷编码是通过上一级的编码得到的。也就是n个数的编码可以通过n  - 1个数的编码得到。
 * 如果n = 1，那么编码为[0, 1]；
 * n = 2，编码为[00, 10, 11, 01]；
 * n = 3，编码为[000, 100, 110, 010, 011, 111, 101, 001]；
 * 所以，n级的编码的生成，是从n - 1编码的最后一个编码开始倒序遍历，每遍历一个编码，就将这个编码+1后的码字添加到结果列表的后面，然后再将这个编码+0。
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if (n === 0) {
        return [0];
    }
    let next = grayCode(n-1);
    return [].concat(next).concat([].concat(next).reverse().map(el => Math.pow(2, n-1) + el));
};