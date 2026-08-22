class Solution {
public:
    bool checkDivisibility(int n) {
        int sum=0;
        int product=1;
        int x=n;
        while(x>0){
          int digit=x%10;
          sum+=digit;
          product*=digit;
          x=x/10;
        }

        int total=sum+product;
        if(n%total !=0){
          return false;
        }
        return true;
    }
};