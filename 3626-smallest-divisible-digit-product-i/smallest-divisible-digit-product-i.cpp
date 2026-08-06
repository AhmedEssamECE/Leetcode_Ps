class Solution {
public:
   int multiplyDigits(int num) {
    // Handle negative numbers by converting to positive
    if (num < 0) {
        num = -num;
    }
    
    // Handle the special case where the input is exactly 0
    if (num == 0) {
        return 0;
    }

    int product = 1;

    while (num > 0) {
        product *= (num % 10); // Extract the last digit and multiply
        num /= 10;            // Remove the last digit
    }

    return product;
}
    int smallestNumber(int n, int t) {
        int multip=multiplyDigits(n);
        for(int i=n;i<n+10;i++){
                   multip=multiplyDigits(i);

          if(multip%t==0){
            return i;
          }

        }
        return -1;
      }
};