// EntityManager.js
// Gère toutes les entités du jeu (ClickCounters, tours, ennemis, etc.)

export class EntityManager {
  constructor() {
    // Map par type d'entité, ex: { clickCounter: [obj1, obj2], ... }
    this.entities = {};
  }

  addEntity(type, entity) {
    if (!this.entities[type]) {
      this.entities[type] = [];
    }
    this.entities[type].push(entity);
  }

  removeEntity(type, entity) {
    if (!this.entities[type]) return;
    this.entities[type] = this.entities[type].filter(e => e !== entity);
    if (this.entities[type].length === 0) {
      delete this.entities[type];
    }
  }

  getEntities(type) {
    return this.entities[type] ? [...this.entities[type]] : [];
  }

  getAllEntities() {
    // Retourne un tableau de tous les objets, tous types confondus
    return Object.values(this.entities).flat();
  }

  forEach(type, callback) {
    if (!this.entities[type]) return;
    this.entities[type].forEach(callback);
  }
}
