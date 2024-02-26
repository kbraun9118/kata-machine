export default class DoublyLinkedList<T> {
    public length: number = 0;
    head?: Node<T>;
    tail?: Node<T>;

    constructor() {}

    prepend(item: T): void {
        const newNode = new Node(item);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            return;
        }
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        if (idx === this.length) {
            this.append(item);
            return;
        }
        const newNode = new Node(item);
        let current = this.head!!;
        while (idx !== 0) {
            current = current.next!!;
        }
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev!!.next!! = newNode;
        current.prev = newNode;
        this.length++;
    }

    append(item: T): void {
        const newNode = new Node(item);
        newNode.prev = this.tail;
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        }
        let current = this.head;

        while (current.item !== item) {
            if (!current.next) {
                return undefined;
            }
            current = current.next;
        }
        if (current.prev) {
            current.prev.next = current.next;
        }
        if (current.next) {
            current.next.prev = current.prev;
        }
        if (current === this.head) {
            this.head = current.next;
        }
        if (current === this.tail) {
            this.tail = current.prev;
        }
        this.length--;
        return current.item;
    }

    get(idx: number): T | undefined {
        if (!this.head || idx < 0 || idx >= this.length) {
            return undefined;
        }
        if (idx === this.length - 1) {
            return this.tail?.item;
        }

        let current = this.head;
        while (idx !== 0) {
            idx--;
            current = current.next!!;
        }
        return current.item;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head || idx < 0 || idx >= this.length) {
            return undefined;
        }

        let current = this.head;
        if (idx === this.length - 1) {
          current = this.tail!!;
          idx = 0;
        }
        while (idx !== 0) {
            idx--;
            current = current.next!!;
        }

        if (current.prev) {
            current.prev.next = current.next;
        }
        if (current.next) {
            current.next.prev = current.prev;
        }
        if (current === this.head) {
            this.head = current.next;
        }
        if (current === this.tail) {
            this.tail = current.prev;
        }
        this.length--;
        return current.item;
    }
}

class Node<T> {
    constructor(
        readonly item: T,
        public next?: Node<T>,
        public prev?: Node<T>,
    ) {}
}
