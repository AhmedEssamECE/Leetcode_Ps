class MyHashSet {
  int numBuckets;
  vector<list<int>>buckets;
public:
    MyHashSet() {
        numBuckets=15000;
        buckets=vector<list<int>>(numBuckets,list<int>{});

    }
    int hash(int key){
      return key % numBuckets;
    }
    
    void add(int key) {
      int i = hash(key);
      if(find(buckets[i].begin(),buckets[i].end(),key)==buckets[i].end())
      buckets[i].push_back(key);
        
    }
    
    void remove(int key) {
         int i = hash(key);
      auto it=(find(buckets[i].begin(),buckets[i].end(),key));
      if(it!=buckets[i].end()){
           buckets[i].erase(it);
      }
   
    }
    
    bool contains(int key) {
        int i = hash(key);
      if(find(buckets[i].begin(),buckets[i].end(),key)!=buckets[i].end()){
        return true;
      }
      else{
        return false;
      }
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */