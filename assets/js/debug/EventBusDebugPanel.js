import { appInstance } from '../Application.js';

export class EventBusDebugPanel {
    constructor() {
        this.events = [];
        this.maxEvents = 50;
        this._createPanel();
        this._subscribe();
    }

    _createPanel() {
        this.panel = document.createElement('div');
        this.panel.className = 'eventbus-debug-panel';
        Object.assign(this.panel.style, {
            position: 'fixed',
            bottom: '0',
            right: '0',
            width: '400px',
            maxHeight: '40vh',
            background: 'rgba(30,30,30,0.95)',
            color: '#fff',
            fontSize: '12px',
            fontFamily: 'monospace',
            overflowY: 'auto',
            zIndex: 9999,
            border: '1px solid #444',
            borderRadius: '8px 8px 0 0',
            boxShadow: '0 0 8px #000a',
            padding: '8px',
        });
        this.panel.innerHTML = '<b>EventBus Debug Panel</b><hr><div class="event-list"></div>';
        document.body.appendChild(this.panel);
        this.eventList = this.panel.querySelector('.event-list');
    }

    _subscribe() {
        // Attend que appInstance.eventBus soit prêt
        const tryPatch = () => {
            if (appInstance.eventBus && typeof appInstance.eventBus.emit === 'function') {
                const origEmit = appInstance.eventBus.emit.bind(appInstance.eventBus);
                appInstance.eventBus.emit = (event) => {
                    this._logEvent(event);
                    origEmit(event);
                };
            } else {
                setTimeout(tryPatch, 50);
            }
        };
        tryPatch();
    }

    _logEvent(event) {
        const time = new Date().toLocaleTimeString();
        this.events.unshift({
            type: event.type,
            time,
            data: event.data || null,
            source: event.source || null
        });
        if (this.events.length > this.maxEvents) this.events.length = this.maxEvents;
        this._render();
    }

    _render() {
        const safeStringify = (obj) => {
            const seen = new WeakSet();
            return JSON.stringify(obj, function(key, value) {
                if (typeof value === 'object' && value !== null) {
                    if (seen.has(value)) return '[Circular]';
                    seen.add(value);
                }
                if (typeof value === 'function') return '[Function]';
                return value;
            }, 2);
        };
        this.eventList.innerHTML = this.events.map(e =>
            `<div><span style="color:#8f8">[${e.time}]</span> <b>${e.type}</b> <span style="color:#aaa">${e.data ? safeStringify(e.data) : ''}</span></div>`
        ).join('');
    }
}

// Pour usage direct :
export const eventBusDebugPanel = new EventBusDebugPanel();
