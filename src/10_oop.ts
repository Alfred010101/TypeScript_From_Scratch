class Personaje {
  profecion?: string;

  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number
  ) {}

  subirNivel(): number {
    this.nivel++;
    return this.nivel;
  }

  cambiarHP(cantidad: number): number {
    this._hp = this._hp + cantidad;
    return this._hp;
  }

  get hp(): number {
    return this._hp;
  }

  set hp(cantidad: number) {
    this._hp = this._hp + cantidad;
  }
}

const personaje = new Personaje(1, "Alfred", 1, 100);
personaje.cambiarHP(32);
personaje.hp = -32;
console.log(personaje);
