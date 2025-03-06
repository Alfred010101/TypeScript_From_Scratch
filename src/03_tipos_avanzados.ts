//union types
let puntaje: number | string = 23;
console.log(puntaje);
puntaje = "dos";
console.log(puntaje);

function sumaDos(n: number | string): number {
  if (typeof n === "number") return n + 2;
  return parseInt(n) + 2;
}

console.log(sumaDos(7));
console.log(sumaDos("9"));

//intersection types
type Audit = {
  created_at: string;
  modified_at: string;
};

type Product = {
  name: string;
};

const product: Audit & Product = {
  name: "algun nombre",
  created_at: "algo mas",
  modified_at: "otra cosa xD",
};

//literal types
type Fibo = 0 | 1 | 2 | 3 | 5;
const nDeFibo: Fibo = 5;

//valores nulos
function toNombre(s: string | null | undefined) {
  if (!s) {
    return 0;
  }
  return parseInt(s);
}

const an = toNombre(undefined);

//optional chain operator
function getUser(id: number) {
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
//arreglos
const arr1 = null;
console.log(arr1?.[0]);
//funciones
const fn5: any = null;
console.log(fn5?.());

//nullish coalescing operator
const difficulty: number | null = 0;

const user2 = {
  user_name: "Alfred",
  difficulty: difficulty ?? 1,
};

console.log(user2);

//type assertion
const elem: any = null;
const elem1 = elem as number;
// const input = document.getElementById('usename') as HTMLInputElement
// const input = <HTMLInputElement> document.getElementById('usename')
// input.value
//100% del valor recivido

//type narrowing
function algo(x: string | number) {
  if (typeof x === "number") {
  }
  if (typeof x === "string") {
  }
}

//type unknown
function procesa(algo: unknown) {
  if (typeof algo === "string") {
    algo.toUpperCase();
  }

  //clase instanciada
  if (algo instanceof String) {
  }
}
