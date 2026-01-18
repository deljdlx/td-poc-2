import { Event } from "./Event.js";

export class CellClick extends Event {
  constructor(cell) {
    super('cell.click', cell, { cell: cell });
  }
}