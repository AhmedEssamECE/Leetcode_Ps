

class Solution {
public:
    ListNode* partition(ListNode* head, int x) {
        ListNode* lessHead = nullptr;
        ListNode* greaterHead = nullptr;

        ListNode* lessTail = nullptr;
        ListNode* greaterTail = nullptr;

        ListNode* current = head;

        while (current != nullptr) {
            ListNode* nextNode = current->next; // save next node
            current->next = nullptr;             // detach current node

            if (current->val < x) {
                // add to less list
                if (lessHead == nullptr) {
                    lessHead = current;
                    lessTail = current;
                } else {
                    lessTail->next = current;
                    lessTail = current;
                }
            } 
            else {
                // add to greater/equal list
                if (greaterHead == nullptr) {
                    greaterHead = current;
                    greaterTail = current;
                } else {
                    greaterTail->next = current;
                    greaterTail = current;
                }
            }

            current = nextNode;
        }

        // If no nodes less than x
        if (lessHead == nullptr) {
            return greaterHead;
        }

        // connect the two lists
        lessTail->next = greaterHead;

        return lessHead;
    }
};