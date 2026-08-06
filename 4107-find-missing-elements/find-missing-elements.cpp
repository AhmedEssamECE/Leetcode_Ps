class Solution {
public:
    vector<int> findMissingElements(vector<int>& nums) {

        vector<int> solution;

        sort(nums.begin(), nums.end());

        for (size_t i = 1; i < nums.size(); ++i) {
            if (nums[i] - nums[i - 1] > 1) {
                int numToPush = nums[i - 1]+1;
                while (numToPush < nums[i]) {
                    solution.push_back(numToPush);
                    numToPush++;
                }
            }
        }
        return solution;
    }
};
