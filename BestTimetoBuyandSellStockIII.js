/**
 * @param {number[]} prices
 * @return {number}
 */
 /**
  *两次分别从左边向右跟从右向左遍历数组，求得两边交易最大获利数组，最后再遍历求最大和，得到全局最大获利
  */
var maxProfit = function(prices) {
    
    if (prices.length <= 1) return 0;
    
    let min = prices[0],
        max = prices[0],
        profits1 = [ 0 ],
        profits2 = [ 0 ],
        profit = 0,
        cur, i;
    
    for (i = 1; i < prices.length; ++i) {
        cur = prices[i];
        
        if (cur > max) {
            max = cur;
            if (max - min > profit) profit = max - min;
        }
        if (cur < min) {
            min = cur;
            max = cur;
        }

        profits1[i] = profit;
    }
    
    min = prices[prices.length - 1];
    max = prices[prices.length - 1];
    profit = 0;
    
    for (i = prices.length - 2; i >= 0; --i) {
        cur = prices[i];
        
        if (cur < min) {
            min = cur;
            if (max - min > profit) profit = max - min;
        } else if (cur > max) {
            max = cur;
            min = cur;
        }
        
        profits2[i] = profit;
    }
    
    // find the max of (profits[i] + profits2[i]).
    max = 0;
    for (var j = 0; j < profits1.length; ++j) {
        profit = profits1[j] + profits2[j];
        if (profit > max) {
            max = profit;
        }
    }
    
    return max;
};
