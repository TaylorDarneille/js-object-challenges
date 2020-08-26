//PIZZA PARLOR
// step 1: make an object to hold the menu data
// Make a menu object with at least 5 pizza types as keys.
// Make each pizza value another nested object which contains a toppings key that is an array of at least 3 toppings and a price key telling what it costs.
var menu = {
    fourcheese: {
      toppings: ['mozzarella', 'parmesan', 'provolone'],
      price: 8
    },
    meatlovers: {
      toppings: ['pepperoni', 'italian sausage', 'grilled chicken'],
      price: 12
    },
    hawaiian: {
      toppings: ['ham', 'pineapples', 'cheese'],
      price: 10
    },
    vegetarian: {
      toppings: ['bell peppers', 'olives', 'mushrooms'],
      price: 9
    },
    alfredo: {
      toppings: ['alfredo sauce', 'spinach', 'grilled chicken'],
      price: 12
    }
  }
  
  // step 2: Print the names of all Pizzas
  // Using an appropriate Object method, print a list of all pizza names. (Hint: The pizza names are the keys in your object. Is there a way we can get a list of all keys in an object?)
  console.log(Object.keys(menu)) //this pulls the keys in menu object, which is the pizza types
  
  // step 3: Check for the existence of a special Pizza
  // Using another appropriate Object method, check to see if the parlor offers a banana pizza. (Hint: Is there a method that can tell us whether or not an object contains a key of a certain name?)
  if ('banana' in menu) {
    console.log('yes, we offer banana pizza!')
  } else {
    console.log('no, we do not make banana pizza!')
  }
  //the 'in' operator matches all object keys, including those in the object's prototype chain.