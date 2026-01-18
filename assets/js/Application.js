



import { CellPositionService } from './services/CellPositionService.js';
import { CanvasLayerService } from './game/CanvasLayerService.js';
import { DebugPanel } from './game/DebugPanel.js';
import { ClickCounter } from './clickCounter/ClickCounter.js';
import { EventBus } from './services/EventBus.js';
import { EntityManager } from './services/EntityManager.js';

import { Grid } from './game/Grid.js';
import { Clock } from './game/Clock.js';


export class Application {
  constructor() {


    console.group('%cApplication.js :: 23 =============================', 'color: #519611; font-size: 1rem');
    console.log("Application constructor");
    console.groupEnd();

    this._eventBus = new EventBus(this);
    this.entityManager = new EntityManager(this);


    // Création d'un layer canvas plein écran pour futurs tests
    this.testCanvas = CanvasLayerService.createFullViewportCanvas('test-canvas', 200);


    // Création et rendu de la grille 10x15 dans #grid-container
    this.grid = new Grid(10, 15);

    this.entityManager.addEntity('grid', this.grid);



    // Instanciation et démarrage de la clock globale
    this.clock = new Clock(this.entityManager, 60);
  }

  get eventBus() {
    return this._eventBus;
  }

  star() {
    console.log('Application started');
    this.grid.render('#grid-container');
    this.clock.start();

    for (let i = 0; i < 5; i++) {
        const counter = new ClickCounter();
        this.entityManager.addEntity('clickCounter', counter);
        counter.render('#click-counters');
    }
  }
}

export const appInstance = new Application();