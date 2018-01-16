/**
 * @param {number[]} prices
 * @return {number}
 */
 /**
  *只要遍历数组时对比前后值， 前值小于后值，则可以做一次买卖，并累计利益。
  */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) profit += prices[i] - prices[i - 1];
    }
    return profit;
};
