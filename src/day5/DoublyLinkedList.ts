type Node<T> = {
        value?: T,
        next?: Node<T>,
        prev?: Node<T>
}
export default class DoublyLinkedList<T> {
        public length: number;
        private head?: Node<T>;
        private tail?: Node<T>;

        constructor() {
                this.length = 0;
                this.head = undefined;
                this.tail = undefined;
        }

        prepend(item: T): void {
                const node = { value: item } as Node<T>;
                this.length++;
                if (!this.head) {
                        this.head = this.tail = node;
                }
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
                return;

        }
        insertAt(item: T, idx: number): void {
                if (idx > this.length)
                        throw new Error("oh no");
                if (idx === this.length)
                        this.append(item);
                if (idx === 0)
                        this.prepend(item);

                this.length++;
                let currNode = this.getAt(idx);
                currNode = currNode as Node<T>;
                const node = { value: item } as Node<T>;
                node.next = currNode;
                node.prev = currNode.prev;
                currNode.prev = node;
                if (currNode.prev) {
                        currNode.prev.next = node;
                }
                return;


        }
        append(item: T): void {
                this.length++;
                const node = { value: item } as Node<T>;
                if (!this.tail) {
                        this.head = this.tail = node;
                        return;
                }
                node.prev = this.tail;
                this.tail.next = node;
                this.tail = node;
        }
        remove(item: T): T | undefined {
                let curr = this.head;
                for (let i = 0; curr && i < this.length; ++i) {
                        if (curr.value === item) {
                                break;
                        }
                        curr = curr.next;
                }

                if (!curr) return undefined;
                return this.removeNode(curr);
        }
        getAt(idx: number): Node<T> | undefined {
                let currNode = this.head;
                for (let i = 0; currNode && i < idx; ++i)
                        currNode = currNode.next;
                return currNode;

        }
        get(idx: number): T | undefined {
                return this.getAt(idx)?.value;
        }
        removeNode(curr: Node<T>): T | undefined {
                this.length--;
                if (this.length === 0) {
                        const val = this.head?.value;
                        this.head = this.tail = undefined;
                        return val;
                }
                if (curr.prev) {
                        curr.prev.next = curr.next;
                }
                if (curr.next) {
                        curr.next.prev = curr.prev;
                }
                if (curr === this.head) {
                        this.head = curr.next;
                }
                if (curr === this.tail) {
                        this.tail = curr.prev;
                }
                curr.prev = curr.next = undefined;
                return curr.value;


        }
        removeAt(idx: number): T | undefined {
                const node = this.getAt(idx);
                if (!node)
                        return undefined;
                return this.removeNode(node);

        }
}
