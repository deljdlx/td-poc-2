// assets/js/game/DebugPanel.js
// Panneau de debug live, synchronisé avec la clock

export class DebugPanel {
    constructor() {
        this._initDOM();
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
        this.el.innerHTML = '<b>Debug Panel</b><br>Ready.';
        document.body.appendChild(this.el);
    }

    setContent(html) {
        this.el.innerHTML = html;
    }
}
