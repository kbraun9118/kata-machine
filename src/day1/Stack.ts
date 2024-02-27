class Node<T> {
    constructor(readonly item: T, public next?: Node<T>) {}
}

export default class Stack<T> {
    public length: number;
    head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
      this.length++;
        const newNode = new Node(item, this.head);
        this.head = newNode;
    }
    
    pop(): T | undefined {
      if (this.length > 0) {
        this.length--;
      }
      const value = this.head?.item;
      this.head = this.head?.next;
      return value;
    }

    peek(): T | undefined {
      return this.head?.item;
    }
}
