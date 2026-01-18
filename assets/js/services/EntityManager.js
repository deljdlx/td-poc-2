import { Tower } from '../game/Tower.js';
// EntityManager.js
// Gère toutes les entités du jeu (ClickCounters, tours, ennemis, etc.)

export class EntityManager {
  constructor() {
    // Map par type d'entité, ex: { clickCounter: [obj1, obj2], ... }
    this.entities = {};
  }

  /**
   * Crée une Tower à la position (row, col), la place dans la cellule correspondante et l'ajoute à l'entity manager
   * @param {number} row
   * @param {number} col
   * @returns {Tower|null}
   */
  createTower(row, col) {
    // On suppose qu'il n'y a qu'une seule grille
    const grid = this.getEntities('grid')[0];
    if (!grid) return null;
    const cell = grid.getCell(row, col);
    if (!cell) return null;
    const tower = new Tower();
    cell.setEntity(tower);

    const id = this.generateId('tower');

    this.addEntity(id, tower);
    return tower;
  }

  generateId(type) {
    const existing = this.getEntities(type);
    return `${type}-${existing.length + 1}`;
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
