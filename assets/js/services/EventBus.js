import { EventBusConfigurator } from "../configurations/EventBusConfigurator.js";
import { Application } from "../Application.js";

export class EventBus {

    /**
     * @type {Application}
     */
    _application;

    constructor(application) {

        console.group('%cEventBus.js :: 13 =============================', 'color: #514785; font-size: 1rem');
        console.log(application);
        console.groupEnd();

        this._application = application;
        this.listeners = {};
        this.eventBusHandler = new EventBusConfigurator(this);
        this.initializeListeners();
    }

    get application() {
        return this._application;
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

