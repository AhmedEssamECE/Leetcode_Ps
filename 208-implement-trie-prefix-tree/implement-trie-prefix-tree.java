class TrieNode{
  public  boolean endOfWord=false;
   public  Map<Character , TrieNode> children=new HashMap<>();
}

class Trie {
    private TrieNode root;

    public Trie() {
        this.root=new TrieNode();
        
        
    }
    
    public void insert(String word) {
        TrieNode curr=root;

        char[] arr=word.toCharArray();
        for(char currChar:arr){
            if(curr.children.containsKey(currChar)==false){
                curr.children.put(currChar,new TrieNode());
            }
            curr=curr.children.get(currChar);
        }
        curr.endOfWord=true;
        
    }
    
    public boolean search(String word) {
              TrieNode curr=root;

        char[] arr=word.toCharArray();
        for(char currChar:arr){
            if(curr.children.containsKey(currChar)==false){
                return false;
            }
            curr=curr.children.get(currChar);
        }

        return   curr.endOfWord;
        
    }
    
    public boolean startsWith(String prefix) {
           TrieNode curr=root;

        char[] arr=prefix.toCharArray();
        for(char currChar:arr){
            if(curr.children.containsKey(currChar)==false){
                return false;
            }
            curr=curr.children.get(currChar);
        }

        return   true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */