// 1. Make the Object
let menu = {
    chickenPesto: {
     toppings: ['chicken', 'tomatoes', 'mozarella', 'pesto sauce'],
     price: 15,
    },
    hawaiian: {
      toppings: ['pineapple', 'Canadian bacon', 'mozarella', 'red sauce'],
      price: 20,
    },
    veggieCowboy: {
      toppings: ['mock duck', 'banana peppers', 'onions', 'barbecue sauce'],
      price: 22,
    },
    aLaVodka: {
      toppings: ['prosciutto', 'tomatoes', 'mozarella', 'vodka sauce'],
      price: 20,
    },
    shroomer: {
      toppings: ['button mushrooms', 'portabella', 'shitake', 'garlic', 'red sauce'],
      price: 25,
    }
  }
  // 2. Print the name of all Pizzas
  for(var pizza in menu){
      console.log(pizza)
    }
  
  // 3. Check for the existence of a special Pizza
  
      if (menu.banana){
      console.log('It\'s Banana Pizza season!')
      }else {
        console.log('No bananas here, bro.')
      }
    
  