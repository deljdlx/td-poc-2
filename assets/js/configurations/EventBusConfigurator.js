export class EventBusConfigurator {

  constructor(EventBus) {
    this.eventBus = EventBus;
  }


  initializeListeners() {
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