/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);

       
       let newInterval=intervals[0];
       let result=[];
               result.push(newInterval)


    for(interval of intervals){

       if(interval[0]<=newInterval[1])
       {
        newInterval[1]=Math.max(newInterval[1],interval[1])



       }
       else{

        newInterval=interval;
        result.push(newInterval)




       }
      
                   
                   


    }

    return result;

};