// assets/js/game/CanvasLayerService.js
// Service pour créer et gérer des layers canvas couvrant tout le viewport

export class CanvasLayerService {
    /**
     * Crée un canvas couvrant tout le viewport, avec un id et un z-index optionnels
     * @param {string} id - id du canvas (optionnel)
     * @param {number} zIndex - z-index du canvas (optionnel, défaut 10)
     * @returns {HTMLCanvasElement}
     */
    static createFullViewportCanvas(id = '', zIndex = 10) {
        const canvas = document.createElement('canvas');
        if (id) canvas.id = id;
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none'; // Par défaut, laisse passer les events
        canvas.style.zIndex = zIndex;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        // Gère le resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        return canvas;
    }
}
