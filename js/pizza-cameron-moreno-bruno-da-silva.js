//1. Make the object
const menu = {
  pepperoni: pizza = {
    toppings: ['cheese', 'pizza sauce', 'pepperoni'],
    price: 10
  },
  pineapple: pizza = {
    toppings: ['cheese', 'pizza sauce', 'pineapple'],
    price: 11
  },
  spinach: pizza = {
    toppings: ['cheese', 'pizza sauce', 'pepperoni'],
    price: 3
  },
  anchovie: pizza = {
    toppings: ['cheese', 'pizza sauce', 'anchovie'],
    price: 3
  },
  buffalo: pizza = {
    toppings: ['cheese', 'pizza sauce', 'chicken'],
    price: 3
  }
};

//2. Print the names of the pizza keys using Object.keys(object)
console.log(Object.keys(menu));

//3. Check if menu offers 'banana' pizza using object.hasOwnProperty method
console.log(menu.hasOwnProperty('banana'));