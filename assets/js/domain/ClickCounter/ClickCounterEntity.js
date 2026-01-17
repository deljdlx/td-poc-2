export default class ClickCounterEntity {
    constructor(id, initialCount = 0) {
        this.id = id;
        this.count = initialCount;
    }

    increment() {
        this.count++;
    }

    decrement() {
        if (this.count > 0) {
            this.count--;
        }
    }

    getCount() {
        return this.count;
    }
}