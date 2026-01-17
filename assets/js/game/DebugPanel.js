// assets/js/game/DebugPanel.js
// Panneau de debug live, synchronisé avec la clock

export class DebugPanel {
    constructor(clock, entityManager) {
        this.clock = clock;
        this.entityManager = entityManager;
        this.tickCounter = 0;
        this.refreshRate = 4; // rafraîchit le DOM tous les 4 ticks
        this._initDOM();
        this.clock.addTickListener(this._onTick.bind(this));
    }

    _initDOM() {
        this.el = document.createElement('section');
        this.el.id = 'debug-panel';
        this.el.style.position = 'fixed';
        this.el.style.bottom = '10px';
        this.el.style.right = '10px';
        this.el.style.background = 'rgba(30,40,60,0.95)';
        this.el.style.color = '#fff';
        this.el.style.padding = '12px 18px';
        this.el.style.borderRadius = '8px';
        this.el.style.fontFamily = 'monospace';
        this.el.style.fontSize = '1rem';
        this.el.style.zIndex = 1000;
        this.el.style.boxShadow = '0 2px 8px #0008';
        document.body.appendChild(this.el);
    }

    _onTick(dt, tickCount) {
        this.tickCounter++;
        if (this.tickCounter % this.refreshRate !== 0) return;
        this.render();
    }

    render() {
        // Exemple : affiche le nombre de ticks, le nombre de clickCounters, etc.
        const clickCounters = this.entityManager.getEntities('clickCounter') || [];
        const grid = this.entityManager.getEntities('grid')[0];
        this.el.innerHTML = `
            <b>Debug Panel</b><br>
            Ticks: ${this.tickCounter}<br>
            ClickCounters: ${clickCounters.length}<br>
            ${clickCounters.map((c, i) => `CC[${i}]: ${c.value}`).join('<br>')}<br>
            Grid: ${grid ? `${grid.cols} cols × ${grid.rows} rows` : 'none'}
        `;
    }
}
