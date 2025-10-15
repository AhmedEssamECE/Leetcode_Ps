var mySqrt = function(x) {
    if (x === 0) return 0; // حالة خاصة
    
    let left = 1;
    let right = x; // مش محتاج نستخدم MAX_SAFE_INTEGER
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let op = mid * mid;

        if (op === x) {
            return mid;
        } else if (op > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right;
};
