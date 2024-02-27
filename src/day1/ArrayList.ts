export default class ArrayList<T> {
    public length: number;
    list: Array<T>;

    constructor(private capacity: number = 3) {
        this.length = 0;
        this.list = new Array(this.capacity);
    }

    prepend(item: T): void {
        if (this.capacity === this.length) {
            this.growCapactiy();
        }
        for (let i = this.length; i > 0; i--) {
            this.list[i] = this.list[i - 1];
        }
        this.length++;
        this.list[0] = item;
    }

    insertAt(item: T, idx: number): void {
        if (this.capacity === this.length) {
            this.growCapactiy();
        }
        for (let i = this.length; i > idx; i--) {
            this.list[i] = this.list[i - 1];
        }
        this.length++;
        this.list[idx] = item;
    }

    append(item: T): void {
        if (this.capacity === this.length) {
            this.growCapactiy();
        }
        this.list[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (this.list[i] === item) {
                this.length--;
                for (let j = i; j < this.length; j++) {
                    this.list[j] = this.list[j + 1];
                }
                return item;
            }
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx >= 0 && idx < this.length) {
            return this.list[idx];
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx >= 0 && idx < this.length) {
            this.length--;
            const value = this.list[idx];
            for (let i = idx; i < this.length; i++) {
                this.list[i] = this.list[i + 1];
            }
            return value;
        }
        return undefined;
    }

    private growCapactiy(): void {
        this.capacity *= 2;
        const newList = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newList[i] = this.list[i];
        }
        this.list = newList;
    }
}
