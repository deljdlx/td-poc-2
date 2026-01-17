// assets/js/services/Grid.js
// Grille de cellules carrées, position absolue, responsive

import { Cell } from './Cell.js';

export class Grid {
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.cells = [];
    }

    render(cssSelector) {
        const container = document.querySelector(cssSelector);
        if (!container) throw new Error('Grid: container not found');
        container.innerHTML = '';
        container.style.position = 'relative';
        const { width, height } = container.getBoundingClientRect();
        const cellSize = Math.floor(Math.min(width / this.cols, height / this.rows));
        this.cellSize = cellSize;
        this.cells = [];
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const cell = new Cell(row, col);
                cell.render(container, cellSize, col * cellSize, row * cellSize);
                this.cells.push(cell);
            }
        }
    }
}
