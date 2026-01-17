import { ClickCounter } from './assets/js/clickCounter/ClickCounter.js';
import { EventBus } from './assets/js/services/EventBus.js';
import { EntityManager } from './assets/js/services/EntityManager.js';

import { Grid } from './assets/js/services/Grid.js';

const eventBus = new EventBus();
const entityManager = new EntityManager();

// Création et rendu de la grille 10x15 dans #grid-container
const grid = new Grid(10, 15);
grid.render('#grid-container');

for (let i = 0; i < 5; i++) {
    const counter = new ClickCounter(eventBus);
    entityManager.addEntity('clickCounter', counter);
    counter.render('#click-counters');
}