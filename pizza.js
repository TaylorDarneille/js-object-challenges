 // menu is a nested object, with pizza names as the keys and toppings and price as keys of the nested objects

var menu = {
  four_seasons: {
    toppings:[artichoke, black olives,mushrooms],
    price: 20,
    },
  veggie:{
    toppings:[tomatoes,  squash,  peppers],
    price: 30,
    },
  greek:{
    toppings: [bell pepper, feta cheese, marinara sauce],
    price: 15,
    },
  neapolitan:{
    toppings:[tomato, basil, mozzarella],
    price: 20,
    },
  newYork:{
    toppings:[sausage, onions, fennel],
    price: 25,
    },
}

console.log(menu)

// to print out the names of the pizzas we use the Object.keys() method

Object.keys(menu)

// to check if menu has a key called banana we use the method myObj.hasOwnProperty('key')

menu.hasOwnProperty('banana')
