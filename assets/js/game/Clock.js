// assets/js/game/Clock.js
// Clock simple à 60Hz, permet d'ajouter/retirer des callbacks


export class Clock {
    constructor(entityManager, fps = 60) {
        this.entityManager = entityManager;
        this.fps = fps;
        this.interval = 1000 / fps;
        this.listeners = new Set();
        this._timer = null;
        this._lastTick = null;
        this._tickListeners = new Set();
        this._tickCount = 0;
    }

    start() {
        if (this._timer) return;
        this._lastTick = performance.now();
        this._timer = setInterval(() => {
            const now = performance.now();
            const dt = (now - this._lastTick) / 1000;
            this._lastTick = now;
            this._tickCount++;
            // Debug : log à chaque tick
            // console.log(`[Clock] tick #${this._tickCount} (dt=${dt.toFixed(4)}s)`);
            // Appel de la méthode updateAll de l'EntityManager
            if (this.entityManager && typeof this.entityManager.updateAll === 'function') {
                this.entityManager.updateAll(dt);
            }
            this.listeners.forEach(cb => cb(dt));
            // Appel des tick listeners
            this._tickListeners.forEach(cb => cb(dt, this._tickCount));
        }, this.interval);
    }
    addTickListener(cb) {
        this._tickListeners.add(cb);
    }

    removeTickListener(cb) {
        this._tickListeners.delete(cb);
    }

    stop() {
        if (this._timer) {
            clearInterval(this._timer);
            this._timer = null;
        }
    }

    addListener(cb) {
        this.listeners.add(cb);
    }

    removeListener(cb) {
        this.listeners.delete(cb);
    }
}
