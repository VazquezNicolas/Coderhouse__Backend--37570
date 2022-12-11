const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se puede dividir por cero");
    } else {
      resolve(dividendo / divisor);
    }
  });
};

// dividir(6, 2).then(console.log).catch(console.error);

async function funcionAsincrona() {
  try {
    let resultado = await dividir(10, 5);
    console.log(resultado);
    console.log("been here");
  } catch (err) {
    console.log(err);
  }
}

funcionAsincrona();
console.log("been here al finall!");
