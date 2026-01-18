import { Tower } from './game/Tower.js';




import { CellPositionService } from './services/CellPositionService.js';
import { CanvasLayerService } from './services/CanvasLayerService.js';
import { ClickCounter } from './clickCounter/ClickCounter.js';
import { EventBus } from './services/EventBus.js';
import { EntityManager } from './services/EntityManager.js';

import { Grid } from './grid/Grid.js';
import { Clock } from './services/Clock.js';


export class Application {
  constructor() {

  }


  init() {

    console.group('%cApplication.js :: 23 =============================', 'color: #519611; font-size: 1rem');
    console.log("Application constructor");

    this.clock = new Clock(this.entityManager, 60);

    this._eventBus = new EventBus();


    this.entityManager = new EntityManager(this);


    // Création d'un layer canvas plein écran pour futurs tests
    this.testCanvas = CanvasLayerService.createFullViewportCanvas('test-canvas', 200);


    // Création et rendu de la grille 10x15 dans #grid-container
    this.grid = new Grid(10, 15);

    this.entityManager.addEntity('grid', this.grid);


    console.groupEnd();
  }


  start() {
    console.log('Application started');
    this.grid.render('#grid-container');

    this.entityManager.createTower(1, 1);

    this.initClickCounters();

    this.clock.start();
  }

  initClickCounters() {

    for (let i = 0; i < 5; i++) {
      const counter = new ClickCounter();
      this.entityManager.addEntity('clickCounter', counter);
      counter.render('#click-counters');
    }
  }


  get eventBus() {
    return this._eventBus;
  }

}

export const appInstance = new Application();