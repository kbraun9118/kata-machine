export default class Stack<T> {
    public get length(): number {
        return this.inner.length;
    }
    inner: Array<T> = [];

    constructor() {}

    push(item: T): void {
        this.inner.push(item);
    }
    pop(): T | undefined {
        return this.inner.pop();
    }
    peek(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        return this.inner[this.length - 1];
    }
}
