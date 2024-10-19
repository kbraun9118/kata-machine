class Node {
    isWord: boolean;
    children: (Node | undefined)[];

    constructor() {
        this.isWord = false;
        this.children = new Array(26).fill(undefined);
    }
}
export default class Trie {
    head: Node;

    constructor() {
        this.head = new Node();
    }

    private idx(ch: string): number {
        return ch.charCodeAt(0) - "a".charCodeAt(0);
    }

    private ch(idx: number): string {
        return String.fromCharCode(idx + "a".charCodeAt(0));
    }

    insert(item: string): void {
        let current = this.head;
        for (let i = 0; i < item.length; i++) {
            let idx = this.idx(item.charAt(i));
            if (current.children[idx] === undefined) {
                current.children[idx] = new Node();
            }
            current = current.children[idx]!!;
        }
        current.isWord = true;
    }

    delete(item: string): void {
        let path: Node[] = [];
        let current = this.head;

        for (let i = 0; i < item.length; i++) {
            let idx = this.idx(item.charAt(i));
            if (current.children[idx]) {
                current = current.children[idx]!!;
                path.push(current);
            } else {
                throw new Error("could not delete");
            }
        }
        current.isWord = false;
    }

    find(partial: string): string[] {
        let current = this.head;

        for (let i = 0; i < partial.length; i++) {
            let idx = this.idx(partial.charAt(i));
            if (current.children[idx]) {
                current = current.children[idx]!!;
            } else {
                return [];
            }
        }

        return this.wordsFrom(partial, "", current, []);
    }

    private wordsFrom(
        partial: string,
        rest: string,
        node: Node,
        words: string[],
    ): string[] {
        if (node.isWord) {
            words.push(partial + rest);
        }

        if (node.children.every((n) => n === undefined)) {
            return words;
        }

        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i]) {
                this.wordsFrom(
                    partial,
                    rest + this.ch(i),
                    node.children[i]!!,
                    words,
                );
            }
        }

        return words;
    }
}
