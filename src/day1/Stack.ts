import DoublyLinkedList from "./DoublyLinkedList";

export default class Stack<T> {
    public get length(): number {
        return this.inner.length;
    }
    inner: DoublyLinkedList<T> = new DoublyLinkedList();

    constructor() {}

    push(item: T): void {
        this.inner.append(item);
    }
    pop(): T | undefined {
        return this.inner.removeAt(this.length - 1);
    }
    peek(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        return this.inner.get(this.length - 1);
    }
}
