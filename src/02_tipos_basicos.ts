/**
 * Tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * Tipos de TS
 * any
 * unknowm
 * never
 * arrays
 * tuplas
 * Enums
 *
 * Tipos Inferidos
 */

let extincion_dinosaurios: number = 76_000_000;
let dinosaurios = "T-Rex";
let extintos = true;
let dato: string;

dato = "Hola ->";

function saludo(msj: string) {
  console.log(msj);
}

saludo(dato);

//arrays
let animales = ["animal 1", "animal 2", "animal 3"];
let nums: number[] = [2, 3, 5];
let checks: boolean[] = [];
let nums2: Array<number> = [];

//tuplas
let tupla: [number, string] = [2, "Algo"];

//enums
enum Talla {
  Chica,
  Mediana,
  Grande,
  ExtraGrande,
}

const variable = Talla.Grande;
console.log(variable);

//no construye el bloque en js
const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

//Implementacion compleja
// const objeto: {
//   readonly id: number;
//   nombre: string;
//   telefono?: number;
//   tall: Talla;
// } = {
//   id: 1,
//   nombre: "Alfred",
//   tall: Talla.Chica,
// };

//Implementacion mas comoda
type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number;
  nombre: string;
  telefono?: number;
  tall: Talla;
  direccion: Direccion;
};

const objeto: Persona = {
  id: 1,
  nombre: "Alfred",
  tall: Talla.Chica,
  direccion: {
    numero: 23,
    calle: "mi calle",
    pais: "Mx",
  },
};

// esto no es permitido
// objeto.dir = "calle"

console.log(objeto);

const arr: Persona[] = [];

//funciones
const fn: (_?: number) => string = (edad = 17) => {
  if (edad > 17) return "puedes ingresar";
  return "no puedes ingresar";
};

console.log(fn(21));
console.log(fn());

function suma(a: number, b = 3): number {
  return a + b;
}

console.log(suma(23));

function resta(a: number, b: number = 3): number {
  return a - b;
}

console.log(resta(23));

// NEVER usado para lanzamiento de errores
function ErrorUsuario(): never {
  throw Error("Error");
}
