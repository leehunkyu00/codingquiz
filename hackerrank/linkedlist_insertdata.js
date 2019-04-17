
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    let walker = null;
    let tempNode = null;

    if (head == null) return [];

    const node = new SinglyLinkedListNode(data);

    walker = head;
    const insertIdx = position - 1;
    for( let i = 0; i < insertIdx; i++) {
        walker = walker.next;
    }

    tempNode = walker.next;
    walker.next = node;
    node.next = tempNode;
}
