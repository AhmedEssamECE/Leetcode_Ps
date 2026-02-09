/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const hashedNums=new Set(nums);
        if (nums.length === 0) {
        return 0;
    }


   let longest=0;
    for(let num of hashedNums)
    {
       if(!hashedNums.has(num-1))
       {
        let length=1;
           let currentNum = num;

        while(hashedNums.has(currentNum+1))
        {
            currentNum+=1;
            length++;
        }

        longest=Math.max(longest,length)


       }
    }
    return longest;
    
};