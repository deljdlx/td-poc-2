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