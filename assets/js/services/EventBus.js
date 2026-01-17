import { EventBusConfigurator } from "../configurations/EventBusConfigurator.js";

export class EventBus {
    constructor() {
        this.listeners = {};
        this.eventBusHandler = new EventBusConfigurator(this);
        this.initializeListeners();
    }

    initializeListeners() {
        this.eventBusHandler.initializeListeners();
    }

    on(eventType, callback) {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(callback);
    }

    emit(event) {
        if (this.listeners[event.type]) {
            this.listeners[event.type].forEach(callback => callback(event));
        }
    }
}