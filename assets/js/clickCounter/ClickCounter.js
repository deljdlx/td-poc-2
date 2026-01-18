import { ClickCounterRenderer } from "./ClickCounterRenderer.js";
import { ClickCounterClick } from "../events/ClickCounterClick.js";

export class ClickCounter {

  value = 0;

  _application;
  constructor(application) {
    this.renderer = new ClickCounterRenderer(this);

    this._application = application;
    this._eventBus = application.eventBus;

  }

  triggerClick() {
    const event = new ClickCounterClick(this);
    console.group('%cClickCounter.js :: 14 =============================', 'color: #097925; font-size: 1rem');
    console.log(event);
    console.groupEnd();
    this._eventBus.emit(event);
  }

  increment() {
    this.value++;
    this.renderer.refresh();
  }

  render(selector) {
    this.renderer.render(selector);
  }

}