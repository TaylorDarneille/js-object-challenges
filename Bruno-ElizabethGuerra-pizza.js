/*1. Make the Object
 Make a menu object with at least 5 pizza types as keys.
 Make each pizza value another nested object which contains a toppings key that is an array of at least 3 toppings and a price key telling what it costs. */

 let menu = {
  pizza1: {
    name: 'pepperoni',
    sauce: 'marinara',
    toppings: ['pepperoni','mozzarella','red pepper'],
    price: 9.99
  },

  pizza2: {
    name: 'pepper & onion',
    sauce: 'marinara',
    toppings: ['green pepper','mozzarella','onion'],
    price: 8.99
  },

  pizza3: {
    name: 'caprese',
    sauce: 'pesto',
    toppings: ['tomato','fresh mozzarella','basil'],
    price: 11.99
  },

  pizza4: {
    name: 'three cheese',
    sauce: 'alfredo',
    toppings: ['mozzarella','cheddar','parmesan'],
    price: 8.99
  },

  pizza5: {
    name: 'stank breath',
    sauce: 'garlic cream',
    toppings: ['banana','garlic slices','anchovy'],
    price: 12.99
  }
}

/* 2. Print the names of all Pizzas
Using an appropriate Object method, print a list of all pizza names. (Hint: The pizza names are the keys in your object. Is there a way we can get a list of all keys in an object?) */

console.log(`Today's available pizzas: \n ${menu.pizza1.name} \n ${menu.pizza2.name}\n ${menu.pizza3.name}\n ${menu.pizza4.name}\n ${menu.pizza5.name}`)

/*3. Check for the existence of a special Pizza
Using another appropriate Object method, check to see if the parlor offers a banana pizza. (Hint: Is there a method that can tell us whether or not an object contains a key of a certain name?)*/

//***UPDATED ANSWER! THANK YOU!!!*** (old answer is still in my Repl for my own reference - let me know if you'd like it here too)

const detailPizzas = Object.values(menu)

detailPizzas.forEach(findTopping)

function findTopping(p){
  for (var banana in p.toppings) {
    if(p.toppings[banana] === 'banana') {
      console.log(`Yes! There are ${p.toppings[banana]}s on the ${p.name} pizza`)
    }
  }
}