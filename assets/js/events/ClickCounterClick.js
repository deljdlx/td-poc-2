import { Event } from "./Event.js";

export class ClickCounterClick extends Event {
  constructor(clickCounter) {
    super('clickCounterClicked', clickCounter, { counter: clickCounter });
  }
}