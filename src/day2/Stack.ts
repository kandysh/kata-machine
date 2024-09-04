type Node<T> = {
    val: T,
    prev?: Node<T>
};
export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const node = { val: item } as Node<T>;
        if (!this.head) {
            this.head = node;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.val;
        }
        const head = this.head as Node<T>;
        this.head = head.prev;
        return head.val;

    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
