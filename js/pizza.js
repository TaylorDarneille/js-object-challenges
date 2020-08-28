
// 1. Make the object
const menu = {
  pepperoni: {
      toppings: ['mozzarella','tomatos','pepperoni'],
      price : '$4'
  },
  cheese: {
      toppings: ['sauce','oregano','cheese'],
      price : '$8'
  },
  margherita:{
      toppings: ['tomatos','cheese','basil'],
      price : '$10'
  },
  deluxe:{
      toppings: ['sausage','peppers','mushrooms'],
      price : '$12'
  },
  hawaiian:{
      toppings: ['ham','sauce','cheese'],
      price : '$15'
  },
}

// 2. Print the names of all Pizzas
console.log(Object.keys(menu))

// 3. Check for the existence of a special Pizza
console.log(menu.hasOwnProperty('banana'));
console.log(menu.hasOwnProperty('deluxe'));




