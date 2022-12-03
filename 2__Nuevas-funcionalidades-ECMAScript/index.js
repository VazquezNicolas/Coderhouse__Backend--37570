// ES7
console.log("Exponencial:", 3 ** 3);
console.log("Array includes:", [1, 2, 3].includes(1));

// ES8
const foo = {
  nombre: "Lautaro",
  edad: 27,
};
console.log("object.entries:", Object.entries(foo));
console.log("object.values:", Object.values(foo));
console.log("object.keys:", Object.keys(foo));

// ES9
let sum;
try {
  throw "ERROR!";
} catch (err) {
  sum = 0;
} finally {
  console.log("try catch finally", sum);
}

new Promise((resolve, reject) => resolve())
  .then()
  .finally(() => console.log("Finally en una promesa"));

(function restFunc(first, second, ...args) {
  console.log("rest operator:", args);
})(1, 2, 3, 6, 7, 8, 9);

const numbers = [1, 2, 3];
(function sum(x, y, z) {
  console.log("spread syntax:", x + y + z);
})(...numbers);
console.log("spread syntax 2:", [0, ...numbers]);

// ES10
