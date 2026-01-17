import ClickCounterEntity from './ClickCounterEntity.js';

export default class ClickCounterRenderer {
    constructor(container, id, initialCount = 0) {
        this.entity = new ClickCounterEntity(id, initialCount);
        this.container = container;
        this.render();
    }

    render() {
        // Create elements
        this.counterElement = document.createElement('div');
        this.counterElement.className = 'click-counter';

        this.countDisplay = document.createElement('span');
        this.countDisplay.textContent = this.entity.getCount();

        this.incrementButton = document.createElement('button');
        this.incrementButton.textContent = '+';
        this.incrementButton.addEventListener('click', () => this.increment());

        this.decrementButton = document.createElement('button');
        this.decrementButton.textContent = '-';
        this.decrementButton.addEventListener('click', () => this.decrement());

        // Append elements
        this.counterElement.appendChild(this.decrementButton);
        this.counterElement.appendChild(this.countDisplay);
        this.counterElement.appendChild(this.incrementButton);
        this.container.appendChild(this.counterElement);
    }

    increment() {
        this.entity.increment();
        this.updateDisplay();
    }

    decrement() {
        this.entity.decrement();
        this.updateDisplay();
    }

    updateDisplay() {
        this.countDisplay.textContent = this.entity.getCount();
    }
}