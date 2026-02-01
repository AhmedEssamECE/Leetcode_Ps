/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  
    if(s.length !==t.length)
    {
        return false;
    }
    let hashedS={};
        let hashedT={};


    for(let i=0 ;i<s.length;i++)
    {
        if(hashedS[s[i]]!==hashedT[t[i]])
        {
          return false;
        }
        hashedT[t[i]]=i+1;
        hashedS[s[i]]=i+1;
    }
    return true;
};
