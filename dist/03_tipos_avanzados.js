"use strict";
let puntaje = 23;
console.log(puntaje);
puntaje = "dos";
console.log(puntaje);
function sumaDos(n) {
    if (typeof n === "number")
        return n + 2;
    return parseInt(n) + 2;
}
console.log(sumaDos(7));
console.log(sumaDos("9"));
const product = {
    name: "algun nombre",
    created_at: "algo mas",
    modified_at: "otra cosa xD",
};
const nDeFibo = 5;
function toNombre(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const an = toNombre(undefined);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: "",
        created_at: new Date(),
    };
}
const user = getUser(1);
console.log("user", user?.created_at);
const arr1 = null;
console.log(arr1?.[0]);
const fn5 = null;
console.log(fn5?.());
const difficulty = 0;
const user2 = {
    user_name: "Alfred",
    difficulty: difficulty ?? 1,
};
console.log(user2);
const elem = null;
const elem1 = elem;
function algo(x) {
    if (typeof x === "number") {
    }
    if (typeof x === "string") {
    }
}
function procesa(algo) {
    if (typeof algo === "string") {
        algo.toUpperCase();
    }
    if (algo instanceof String) {
    }
}
//# sourceMappingURL=03_tipos_avanzados.js.map