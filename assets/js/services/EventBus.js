import { EventBusConfigurator } from "../configurations/EventBusConfigurator.js";
import { Application } from "../Application.js";

import { Clock } from "./Clock.js";

export class EventBus {

    /**
     * @type {Application}
     */
    _application;


    listeners;

    /**
     * @type {Clock}
     */
    _clock;

    constructor(application) {
        this._application = application;
        this._clock = application.clock;
        this.listeners = {};
        this.eventBusHandler = new EventBusConfigurator(this);
        this.eventQueue = []; // Initialize the event queue

        this.initializeListeners();


        // Synchronise la gestion de la pile d'event avec la clock si présente
        if (this._clock && typeof this._clock.addTickListener === 'function') {

            console.group('%cEventBus.js :: 32 =============================', 'color: #792778; font-size: 1rem');
            console.log('Linking EventBus processing to Clock ticks');
            console.groupEnd();

            this._clock.addTickListener(() => this.processEventQueue());
        }
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
        // Add the event to the queue instead of processing it immediately
        this.eventQueue.push(event);
    }
    
    /**
     * Processes all events in the queue in FIFO order
     */
    processEventQueue() {
        while (this.eventQueue.length > 0) {
            const event = this.eventQueue.shift();
            if (this.listeners[event.type]) {
                this.listeners[event.type].forEach(callback => callback(event));
            }
        }
    }
}

