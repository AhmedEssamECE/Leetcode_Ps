/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
    ListNode fast=head;
    ListNode slow=head;

    while(fast!=null &&fast.next!=null){
        fast=fast.next.next;
        slow=slow.next;
    }
    if(fast!=null){
        fast=fast.next;
    }
    slow =reverseLl(slow);
    fast=head;
    while(slow!=null){

        if(fast.val!=slow.val){
            return false;
        }
        fast=fast.next;
        slow=slow.next;
    }
    return true;
        
    }
    private ListNode reverseLl(ListNode head){
        ListNode pre=null;
        ListNode curr=head;
        while(curr!=null){
            ListNode next=curr.next;
            curr.next=pre;
            pre=curr;
            curr=next;
        }
        head=pre;
        return head;
    }
}