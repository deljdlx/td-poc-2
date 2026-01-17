// assets/js/services/Grid.js
// Grille de cellules carrées, position absolue, responsive

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
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.style.position = 'absolute';
                cell.style.width = cell.style.height = cellSize + 'px';
                cell.style.left = (col * cellSize) + 'px';
                cell.style.top = (row * cellSize) + 'px';
                // Optionnel : data attributes pour retrouver la cellule
                cell.dataset.row = row;
                cell.dataset.col = col;
                container.appendChild(cell);
                this.cells.push({ row, col, el: cell });
            }
        }
    }
}
