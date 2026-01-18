// assets/js/game/CellPositionService.js
// Utilitaire pour obtenir la position absolue et le centre d'une cellule par rapport au viewport

export class CellPositionService {
    // cell peut être un objet Cell (avec .el) ou directement un élément DOM
    static getCellPosition(cell) {
        const el = cell && cell.el ? cell.el : cell;
        if (!el || !el.getBoundingClientRect) return null;
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        };
    }

    static getCellCenter(cell) {
        const rect = this.getCellRect(cell);
        if (!rect) return null;
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }
}
