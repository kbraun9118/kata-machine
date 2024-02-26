import SinglyLinkedList from "./SinglyLinkedList";

export default class Queue<T> {
    inner: SinglyLinkedList<T> = new SinglyLinkedList();
    get length() {
        return this.inner.length;
    }

    constructor() {}

    enqueue(item: T): void {
        this.inner.append(item);
    }

    deque(): T | undefined {
        return this.inner.removeAt(0);
    }

    peek(): T | undefined {
        return this.inner.get(0);
    }
}
