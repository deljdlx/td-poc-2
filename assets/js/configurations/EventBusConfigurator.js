import { CellPositionService } from '../services/CellPositionService.js';
export class EventBusConfigurator {

  constructor(EventBus) {
    this.eventBus = EventBus;
  }


  initializeListeners() {

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