/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

 
     const obj={};
    for(let i =0 ; i<numbers.length; i++)
    {
      const num = target-numbers[i];
      if(num in obj) 
      return [obj[num],i+1];
      else
       obj[numbers[i]]=i+1;
    
    }

     
    
    
    
};
    
