/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 
 let arrSum;
     const obj={};
    for(let i =0 ; i<nums.length; i++)
    {
      const num = target-nums[i];
      if(num in obj) 
      return [i,obj[num]];
      else
       obj[nums[i]]=i;
    
    }

     
    
    
    
};
