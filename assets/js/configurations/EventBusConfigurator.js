import { CellPositionService } from '../services/CellPositionService.js';
import { Application } from '../Application.js';
export class EventBusConfigurator {

  /**
   * @type {Application}
   */
  _application;

  constructor(eventBus) {
    this.eventBus = eventBus;
    this._application = eventBus.application;
  }

  get application() {
    return this._application;
  }

  initializeListeners() {


    this.eventBus.on('cell.click', (event) => {
      const testCanvas = this.application.testCanvas;

      const cell = event.source;

      const ctx = this.application.testCanvas.getContext('2d');
      // const ctx = testCanvas.getContext('2d');
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


    this.eventBus.on('cell.click', (event) => {
      const cell = event.source;
      const position = CellPositionService.getCellPosition(cell);
      console.group('%cEventBusConfigurator.js :: 14 =============================', 'color: #097925; font-size: 1rem');
      console.log('Cell clicked at position:', position);
      console.groupEnd();
    });

    this.eventBus.on('clickCounterClicked', (event) => {
      const counter = event.source;
      counter.increment();

      // kept for demonstration purposes, global counter update
      // const globalClickCounter = document.getElementById('global-click-counter');
      // if (globalClickCounter) {
      //   let currentCount = parseInt(globalClickCounter.textContent, 10);
      //   if (isNaN(currentCount)) {
      //     currentCount = 0;
      //   }
      //   globalClickCounter.textContent = `${currentCount + 1}`;
      // }
    });
  }

}