"use strict";
class Personaje {
    id;
    name;
    nivel;
    _hp;
    profecion;
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel++;
        return this.nivel;
    }
    cambiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp = this._hp + cantidad;
    }
}
const personaje = new Personaje(1, "Alfred", 1, 100);
personaje.cambiarHP(32);
personaje.hp = -32;
console.log(personaje);
//# sourceMappingURL=10_oop.js.map