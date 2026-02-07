/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let gasTotal=0;
    let gasCost=0;
    for(let i=0;i<gas.length;i++)
    {
        gasTotal+=gas[i];
        gasCost+=cost[i];
    }
    if(gasCost>gasTotal)
    {
        return -1;
    }
        let startIdx=0;
        let commulativeGas=0;
       for(let i=0;i<gas.length;i++)
       {
       commulativeGas+=gas[i]-cost[i];
    
        if(commulativeGas<0)
        {
            startIdx=i+1;
            commulativeGas=0;
        }
        


       }
       return startIdx;

    
};