import { ClickCounterRenderer } from "./ClickCounterRenderer.js";
import { ClickCounterClick } from "../events/ClickCounterClick.js";

import { eventBusInstance } from "../services/EventBus.js";


export class ClickCounter {

  value = 0;
  constructor(eventBus) {
    this.renderer = new ClickCounterRenderer(this);
    this.eventBus = eventBus;
  }

  triggerClick() {
    const event = new ClickCounterClick(this);
    console.group('%cClickCounter.js :: 14 =============================', 'color: #097925; font-size: 1rem');
    console.log(event);
    console.groupEnd();
    eventBusInstance.emit(event);
  }

  increment() {
    this.value++;
    this.renderer.refresh();
  }

  render(selector) {
    this.renderer.render(selector);
  }

}