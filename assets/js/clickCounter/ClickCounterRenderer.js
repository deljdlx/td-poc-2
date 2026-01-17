export class ClickCounterRenderer {

    clickCounter;

    constructor(clickCounter) {
        this.clickCounter = clickCounter;
    }

    refresh() {
        this.countDisplay.textContent = `${this.clickCounter.value}`;
    }

    render(selector) {
        this.container = document.querySelector(selector);

        this.element = document.createElement('div');
        this.element.className = 'click-counter';
        this.button = document.createElement('button');

        this.button.addEventListener('click', () => {
            this.clickCounter.triggerClick();
        });


        this.countDisplay = document.createElement('span');
        this.countDisplay.classList.add('click-counter__display');

        this.button.textContent = 'Click me';
        this.button.style.marginRight = '10px';
        this.countDisplay.textContent = `${this.clickCounter.value}`;

        this.element.appendChild(this.button);
        this.element.appendChild(this.countDisplay);

        this.container.appendChild(this.element);
    }
}
