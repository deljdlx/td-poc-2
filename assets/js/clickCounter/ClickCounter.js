import { ClickCounterRenderer } from "./ClickCounterRenderer.js";
import { ClickCounterClick } from "../events/ClickCounterClick.js";
import { appInstance } from '../Application.js';

export class ClickCounter {

  value = 0;

  _application;
  constructor() {
    this.renderer = new ClickCounterRenderer(this);
    this._application = appInstance;
    this._eventBus = appInstance.eventBus;

  }

  triggerClick() {
    const event = new ClickCounterClick(this);
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