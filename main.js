import { CellPositionService } from './assets/js/services/CellPositionService.js';
// Dessine un cercle au centre de la cellule cliquée sur le canvas de test
import { eventBusInstance } from './assets/js/services/EventBus.js';
eventBusInstance.on('cell.click', (event) => {
    const cell = event.source;
    const ctx = testCanvas.getContext('2d');
    const center = CellPositionService.getCellCenter(cell);
    if (center) {
        ctx.clearRect(0, 0, testCanvas.width, testCanvas.height);
        ctx.beginPath();
        ctx.arc(center.x, center.y, 20, 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.stroke();
    }
});
import { CanvasLayerService } from './assets/js/game/CanvasLayerService.js';
import { DebugPanel } from './assets/js/game/DebugPanel.js';
import { ClickCounter } from './assets/js/clickCounter/ClickCounter.js';
import { EventBus } from './assets/js/services/EventBus.js';
import { EntityManager } from './assets/js/services/EntityManager.js';

import { Grid } from './assets/js/game/Grid.js';
import { Clock } from './assets/js/game/Clock.js';

const eventBus = new EventBus();
const entityManager = new EntityManager();


// Création d'un layer canvas plein écran pour futurs tests
const testCanvas = CanvasLayerService.createFullViewportCanvas('test-canvas', 200);


// Création et rendu de la grille 10x15 dans #grid-container
const grid = new Grid(10, 15);
entityManager.addEntity('grid', grid);
grid.render('#grid-container');

// Instanciation et démarrage de la clock globale
const clock = new Clock(entityManager, 60);
clock.start();

for (let i = 0; i < 5; i++) {
    const counter = new ClickCounter(eventBus);
    entityManager.addEntity('clickCounter', counter);
    counter.render('#click-counters');
}