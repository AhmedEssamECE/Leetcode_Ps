function addBinary(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;

        if (i >= 0) sum += parseInt(a[i--]);  // ناخد خانة من a
        if (j >= 0) sum += parseInt(b[j--]);  // ناخد خانة من b

        result.push(sum % 2);   // الباقي (0 أو 1)
        carry = Math.floor(sum / 2); // نحسب الـ carry
    }

    return result.reverse().join("");
}
