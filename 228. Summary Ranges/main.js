/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res=[];
    for(let i=0;i<nums.length;i++)
    {
        let st=i;
        while(nums[i+1]===nums[i]+1)
        {
            i++;
        }
        if(st===i)
        {
            res.push(nums[st].toString());
        }
        else
        {
            res.push(`${nums[st]}->${nums[i]}`);
        }
    }
    return res;
};
