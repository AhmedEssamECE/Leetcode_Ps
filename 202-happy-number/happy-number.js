/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let number=new Set();
    if(n/10 ===0)
    {
        return false;
    }

    while(true)
 {
    let num = n.toString().split('').reduce((a,b)=> a+Math.pow(Number(b),2),0);

   if(num!==1)
   {
    if(number.has(num))
    {
        return false;
        
    }
      
      number.add(num);
      n=num;
     
   }
   else
   {
   return true;
   }

 }
    
};