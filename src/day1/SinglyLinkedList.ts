export default class SinglyLinkedList<T> {
    public length: number = 0;

    private head?: Node<T> = undefined;

    constructor() {}

    prepend(item: T): void {
        const newNode = new Node(item);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx >= this.length) {
            return;
        }
        if (idx === 0) {
            this.prepend(item);
        }
        let previous = undefined;
        let current = this.head;
        while (idx !== 0) {
            previous = current;
            current = current?.next;
            idx--;
        }
        const newNode = new Node(item);
        if (previous) {
            previous.next = newNode;
        }
        newNode.next = current;
        length++;
    }

    append(item: T): void {
        if (this.head) {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(item);
            this.length++;
        } else {
            this.prepend(item);
        }
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let previous = undefined;
        let current: Node<T> | undefined = this.head;
        while (current) {
            if (current.item === item) {
                this.length--;
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.head = current.next;
                }
                return current.item;
            }
            previous = current;
            current = current.next;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return undefined;
        }
        let current = this.head;
        while (idx !== 0) {
            current = current?.next;
            idx--;
        }
        return current?.item;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        let previous = undefined;
        let current = this.head;
        if (idx === 0) {
            const value = this.head?.item;
            this.head = this.head?.next;
            this.length--;
            return value;
        }
        while (idx !== 0) {
            previous = current;
            current = current?.next;
            idx--;
        }
        const value = current?.item;
        previous!!.next = current?.next;
        this.length--;
        return value;
    }
}

class Node<T> {
    public next?: Node<T> = undefined;

    constructor(public item: T) {}
}
