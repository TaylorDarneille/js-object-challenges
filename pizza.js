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
  
  //Hi Bruno! I struggled with this one. I feel like there must be a better way than writing the same function 5 times.
  
  for (var banana in menu.pizza1.toppings) {
    if (menu.pizza1.toppings[banana] === 'banana'){  console.log(`Yes! There are ${menu.pizza1.toppings[banana]}s on the ${menu.pizza1.name} pizza`)
  }
  }
  
  for (var banana in menu.pizza2.toppings) {
    if (menu.pizza2.toppings[banana] === 'banana'){  console.log(`Yes! There are ${menu.pizza2.toppings[banana]}s on the ${menu.pizza2.name} pizza`)
  }
  }
  
  for (var banana in menu.pizza3.toppings) {
    if (menu.pizza3.toppings[banana] === 'banana'){  console.log(`Yes! There are ${menu.pizza3.toppings[banana]}s on the ${menu.pizza3.name} pizza`)
  }
  }
  
  for (var banana in menu.pizza4.toppings) {
    if (menu.pizza4.toppings[banana] === 'banana'){  console.log(`Yes! There are ${menu.pizza4.toppings[banana]}s on the ${menu.pizza4.name} pizza`)
  }
  }
  
  for (var banana in menu.pizza5.toppings) {
    if (menu.pizza5.toppings[banana] === 'banana'){  console.log(`Yes! There are ${menu.pizza5.toppings[banana]}s on the ${menu.pizza5.name} pizza`)
  }
  }