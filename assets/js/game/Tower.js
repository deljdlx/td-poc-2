// assets/js/game/Tower.js
// Classe minimaliste pour une tourelle

export class Tower {
    constructor() {
        this.el = null;
    }

    render(container) {
        if (!this.el) {
            this.el = document.createElement('div');
            this.el.className = 'tower';
            this.el.textContent = '🗼';
            this.el.style.width = '100%';
            this.el.style.height = '100%';
            this.el.style.display = 'flex';
            this.el.style.alignItems = 'center';
            this.el.style.justifyContent = 'center';
            this.el.style.fontSize = '2em';
            this.el.style.pointerEvents = 'auto';
        }
        container.appendChild(this.el);
    }
}
