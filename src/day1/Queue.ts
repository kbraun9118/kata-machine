class Node<T> {
    constructor(readonly item: T, public next?: Node<T>) {}
}

export default class Queue<T> {
    length: number;
    head?: Node<T>;
    tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const newNode = new Node(item);
        this.length++;
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (this.head) {
            const item = this.head.item;
            this.head = this.head.next;
            this.length--;

            if (!this.head) {
                this.tail = undefined;
            }
            return item;
        }
        return undefined;
    }

    peek(): T | undefined {
      return this.head?.item;
    }
}
