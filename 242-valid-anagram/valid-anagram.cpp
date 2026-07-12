class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length())
        {
            return false;
        }
      map<char, int> counts;
     for(int i =0 ; i<s.length() ; i++)
     {
        counts[s[i]]++;
        counts[t[i]]--;

     }
     for(auto count : counts)
       if(count.second)
       {
        return false;
       }
       return true;
        
    }
};