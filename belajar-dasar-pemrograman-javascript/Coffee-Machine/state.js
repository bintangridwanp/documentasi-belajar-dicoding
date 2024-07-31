//Penggunaan export pada Java Script

// const coffeeStock = {
//   arabica: 100,
//   robusta: 150,
//   liberica: 200,
// };

// const isCoffeeMachineReady = true;

// tidak bisa seperti ini
// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

// module.exports = { coffeeStock, isCoffeeMachineReady };

// console.log(module)


const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
  };
   
  const isCoffeeMachineReady = true;
 
export { coffeeStock, isCoffeeMachineReady };
