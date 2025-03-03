"use strict";
let extincion_dinosaurios = 76_000_000;
let dinosaurios = "T-Rex";
let extintos = true;
let dato;
dato = "Hola ->";
function saludo(msj) {
    console.log(msj);
}
saludo(dato);
let animales = ["animal 1", "animal 2", "animal 3"];
let nums = [2, 3, 5];
let checks = [];
let nums2 = [];
let tupla = [2, "Algo"];
var Talla;
(function (Talla) {
    Talla[Talla["Chica"] = 0] = "Chica";
    Talla[Talla["Mediana"] = 1] = "Mediana";
    Talla[Talla["Grande"] = 2] = "Grande";
    Talla[Talla["ExtraGrande"] = 3] = "ExtraGrande";
})(Talla || (Talla = {}));
const variable = Talla.Grande;
console.log(variable);
const estado = 2;
const objeto = {
    id: 1,
    nombre: "Alfred",
    tall: Talla.Chica,
    direccion: {
        numero: 23,
        calle: "mi calle",
        pais: "Mx",
    },
};
console.log(objeto);
const arr = [];
const fn = (edad = 17) => {
    if (edad > 17)
        return "puedes ingresar";
    return "no puedes ingresar";
};
console.log(fn(21));
console.log(fn());
function suma(a, b = 3) {
    return a + b;
}
console.log(suma(23));
function resta(a, b = 3) {
    return a - b;
}
console.log(resta(23));
function ErrorUsuario() {
    throw Error("Error");
}
//# sourceMappingURL=02_tipos_basicos.js.map