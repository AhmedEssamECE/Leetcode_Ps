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
    public ListNode deleteDuplicates(ListNode head) {
        if(head==null){
            return null;
        }
        ListNode first=head;
        ListNode second=first.next;
        while(second!=null)
        {
            if(second.val==first.val)
            {
               second = second.next;
                continue;
            }
            first.next=second;
            first=second;
            second=second.next;

        }
        
                first.next=null;
                return head;

    }
}