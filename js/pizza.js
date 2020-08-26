const menu = {
    chicago: {
      toppings: ['cheese', 'italian sausage', 'pepperoni'],
      price: 14
    },
    margherita: {
      toppings: ['cheese', 'basil', 'tomato sauce'],
      price: 10
    },
    pepperoni: {
      toppings: ['cheese', 'tomato sauce', 'pepperoni'],
      price: 8
    },
    hawaiian: {
      toppings: ['cheese', 'ham', 'pineapple', 'tomato sauce'],
      price: 15
    },
    philly: {
      toppings: ['cheese', 'onion', 'beef', 'pepper'],
      price: 18
    }
  }
  
  var key = Object.keys(menu)
  console.log(key)
  
  console.log(menu.hasOwnProperty("banana"))