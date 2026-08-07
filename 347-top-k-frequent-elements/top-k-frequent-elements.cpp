class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        map<int,int>mp;
        int n =nums.size();
        vector<vector<int>>buckets(n+1);
        vector<int>answer;

        for(int i=0;i<n;i++){
          mp[nums[i]]++;
        }
        for(auto it:mp){
          buckets[it.second].push_back(it.first);
        }
        for(int i=n;i>=0;i--){
          if(answer.size()>=k){
            break;
          }
          answer.insert(answer.end(),buckets[i].begin(),buckets[i].end());
        }
        return answer;
    }
};