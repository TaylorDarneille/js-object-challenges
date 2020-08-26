// ### Pizza Parlor!
// You've been tasked with making an app for a pizza parlor. You'll need an object to hold the menu data.

// ### 1. Make the Object
// * Make a `menu` object with at least 5 pizza types as keys.
// * Make each pizza value another nested object which contains a `toppings` key that is an array of at least 3 toppings and a `price` key telling what it costs.

// ### 2. Print the names of all Pizzas
// * Using an appropriate Object method, print a list of all pizza names. (Hint: The pizza names are the keys in your object. Is there a way we can get a list of all keys in an object?)

// ### 3. Check for the existence of a special Pizza
// * Using another appropriate Object method, check to see if the parlor offers a `banana` pizza. (Hint: Is there a method that can tell us whether or not an object contains a key of a certain name?)

const menu = {
    cheese: {toppings: ["crust", "sauce", "cheese"], price: 9},
    pep: {toppings: ["sauce", "cheese", "pep"], price: 11},
    sausage: {toppings: ["sauce", "cheese", "sausage"], price: 12},
    veg: {toppings: ["onion", "pepper", "spin"], price: 8},
    spinMush: {toppings: ["cheese", "spin", "mush"], price: 13}
  }
  
  console.log(Object.keys(menu))
  
  let hasBanana = menu.hasOwnProperty("banana")
  
  if (hasBanana){
    console.log("The menu has a banana pizza")
  } else {
    console.log("There is no banana pizza that's weird")
  }