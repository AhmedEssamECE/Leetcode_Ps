class Solution {
public:
    int hammingWeight(int n) {
        int sum=0;
        while(n){
            n=n&(n-1);
            sum+=1;
        }
        return sum;
        
        
    }
};