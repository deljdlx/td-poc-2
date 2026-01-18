import { CellClick } from '../events/CellClick.js';
import { appInstance } from '../Application.js';

// Représente une cellule de la grille
export class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this._element = null;
        this.entity = null;
    }

    setEntity(entity) {
        this.entity = entity;
        if (entity && typeof entity.render === 'function') {
            entity.render(this.element);
        }
    }

    get element() {
        return this._element;
    }

    render(container, size, x, y) {
        if (!this._element) {
            this._element = document.createElement('div');
            this._element.className = 'grid-cell';
            this._element.dataset.row = this.row;
            this._element.dataset.col = this.col;
        }
        this._element.style.position = 'absolute';
        this._element.style.width = this._element.style.height = size + 'px';
        this._element.style.left = x + 'px';
        this._element.style.top = y + 'px';

        this._element.addEventListener('click', () => {
            const event = new CellClick(this);
            appInstance.eventBus.emit(event);
        });

        if (!this._element.parentNode) {
            container.appendChild(this._element);
        }
    }
}
