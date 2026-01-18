import { Event } from "./Event.js";

export class ClickCounterClick extends Event {
  constructor(clickCounter) {
    super('clickCounter.click', clickCounter, { counter: clickCounter });
  }
}