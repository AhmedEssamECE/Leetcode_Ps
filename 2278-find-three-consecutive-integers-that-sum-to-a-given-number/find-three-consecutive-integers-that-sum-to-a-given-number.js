/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    let ans=[];
    if((num %3) !==0)
    {
        return ans;
    }
    
    let midNum=num/3;
    let first=num/3 -1;
    let last=num/3 +1;

   ans=[first,midNum,last];
   return ans
    
      
    
    
};