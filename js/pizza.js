const menu = {
    cheese:{
      toppings:['mozzarella', 'blue cheese', 'ricotta cheese'],
      price: 2.00
    },
    pepperoni:{
      toppings: ['pepperoni', 'mozzarella', 'sauce'],
      price: 5.00
    },
    hawaiian:{
      toppings: ['pineapple','ham','mozzarella', 'sauce'],
      price: 8.00
    },
    margherita:{
      toppings: ['basil', 'extra virgin olive oil', 'mozzarella', 'sauce'],
      price: 12.00
    },
    sicillian:{
      toppings: ['tomato', 'onion', 'anchovies', 'herbs', 'mozzarella', 'sauce'],
      price: 9.00
    },
  }
  
  console.log(menu)
  
  const allPizza = Object.keys(menu)
  console.log(allPizza)
  
  if (menu.banana){
    console.log(banana)
  }else {
    console.log("This pizza does not exist.")
  }
  