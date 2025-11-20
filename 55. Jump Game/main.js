var canJump = function(nums) {
    let maxJump = 0;

    for (let i = 0; i < nums.length; i++) {

        // لو مش قادر أوصل للعنصر الحالي، مستحيل أكمل
        if (i > maxJump) return false;

        // تحديث أقصى نقطة نقدر نوصل لها
        maxJump = Math.max(maxJump, i + nums[i]);

        // لو وصلنا أو عدّينا آخر عنصر
    }

    return true;
};
