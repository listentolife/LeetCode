/**
 * @param {number[]} prices
 * @return {number}
 */

 /**
  *这里只要遍历数组，每遍历到一个数，对比之前得到的最小值，获得当前最小值，然后计算当前最大利益，对比之前得到的最大利益。
  */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let min = prices[0];
    let profit =  prices[1] - prices[0];
    for (let i = 2; i < prices.length; i++) {
        min = Math.min(prices[i - 1], min);
        profit = Math.max(profit, prices[i] - min)
    }
    if (profit < 0) return 0;
    else return profit;
};
