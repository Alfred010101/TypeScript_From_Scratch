"use strict";
class Personaje {
    id;
    name;
    nivel;
    hp;
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
    subirNivel() {
        this.nivel++;
        return this.nivel;
    }
    cambiarHP(cantidad) {
        this.hp = this.hp + cantidad;
        return this.hp;
    }
}
const personaje = new Personaje(1, "Alfred", 1, 100);
personaje.cambiarHP(32);
console.log(personaje);
//# sourceMappingURL=10_oop.js.map