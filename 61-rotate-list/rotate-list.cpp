/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
 class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (head == nullptr || head->next == nullptr || k == 0)
            return head;

        // 1. Find length and tail
        int length = 1;
        ListNode* tail = head;

        while (tail->next != nullptr) {
            tail = tail->next;
            length++;
        }

        // 2. Normalize k
        k = k % length;

        if (k == 0)
            return head;

        // 3. Find new tail: length - k - 1 steps from head
        ListNode* newTail = head;

        for (int i = 0; i < length - k - 1; i++) {
            newTail = newTail->next;
        }

        // 4. Set new head
        ListNode* newHead = newTail->next;

        // 5. Rotate
        tail->next = head;      // make circular
        newTail->next = nullptr; // break the circle

        return newHead;
    }
};