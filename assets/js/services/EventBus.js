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

    off(eventType, callback) {
        const list = this.listeners[eventType];
        if (!list) return;
        this.listeners[eventType] = list.filter(cb => cb !== callback);
        if (this.listeners[eventType].length === 0) {
            delete this.listeners[eventType];
        }
    }

    emit(event) {
        if (this.listeners[event.type]) {
            this.listeners[event.type].forEach(callback => callback(event));
        }
    }
}

export const eventBusInstance = new EventBus();
