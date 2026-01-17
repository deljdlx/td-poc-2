// assets/js/services/Cell.js
// Représente une cellule de la grille

export class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.el = null;
    }

    render(container, size, x, y) {
        if (!this.el) {
            this.el = document.createElement('div');
            this.el.className = 'grid-cell';
            this.el.dataset.row = this.row;
            this.el.dataset.col = this.col;
        }
        this.el.style.position = 'absolute';
        this.el.style.width = this.el.style.height = size + 'px';
        this.el.style.left = x + 'px';
        this.el.style.top = y + 'px';
        if (!this.el.parentNode) {
            container.appendChild(this.el);
        }
    }
}
