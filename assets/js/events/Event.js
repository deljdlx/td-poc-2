export class Event {
  constructor(type, source, data = {}) {
    this.type = type;
    this.source = source;
    this.data = data;
  }
}