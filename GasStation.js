/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let sum = 0;
    let total = 0;
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
        sum += gas[i] - cost[i];
        if (sum < 0) {
            start = i + 1;
            sum = 0;
        }
        total +=  gas[i] - cost[i];
    }
    if (total < 0) return -1;
    else return start;
};