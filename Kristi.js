const menu = {
  pepperoni: {
    toppings: [ "pepperoni", "sauce", "cheese"],
    price: 10
   },
  meatlovers: {
    toppings: ["bacon", "sausage", "hamburger"],
    price: 12
  },
  mushroom: {
    toppings: ["sauce", "cheese", "mushroom"],
    price: 10
  },
  buffalochicken: {
    toppings: ["buffalo, sauce","chicken", "cheese"],
    price: 15
  },
  pepper: {
    toppings: ["pepper", "cheese", "sauce"],
    price: 9
 },
};
console.log(Object.keys(menu));

menu.hasOwnProperty('banana')