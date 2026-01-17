export class EventBusConfigurator {

  constructor(EventBus) {
    this.eventBus = EventBus;
  }


  initializeListeners() {
    this.eventBus.on('clickCounterClicked', (event) => {
      const counter = event.source;
      counter.increment();
    });
  }

}