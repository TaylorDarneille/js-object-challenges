const menu = {
    pepperoni: {
        toppings: ['garlic', 'oregano', 'crushed red pepper'],
        price: '$5'
    }, 
    cheese: {
        toppings: ['feta', 'spinach', 'ricotta'],
        price: '$6'
    },
    margherita: {
        toppings: ['pepperoni', 'tomato sauce', 'basil'],
        price: '$3'
    },
    prosciutto: {
        toppings: ['sauce', 'mushrooms', 'cheese'],
        price: '$4'
    },
    vodka: {
        toppings: ['vodka sauce', 'garlic', 'cheese'],
        Price: '$5'
    },
  }
  
console.log(Object.keys(menu));
console.log(menu.hasOwnProperty('banana'));