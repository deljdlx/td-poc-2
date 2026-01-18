import { Event } from './Event.js';

export class CellSetEntity extends Event {
  constructor(cell, entity) {
    super('cell.setEntity', cell, { cell, entity });
  }
}
