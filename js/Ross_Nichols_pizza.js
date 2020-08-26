//DELIVERABLE OVERVIEW
//1. Make the Object
//- Make a menu object with at least 5 pizza types as keys.
//- Make each pizza value another nested object which contains a toppings key that //is an array of at least 3 toppings and a price key telling what it costs.
//2. Print the names of all Pizzas
//- Using an appropriate Object method, print a list of all pizza names. (Hint: //The pizza names are the keys in your object. Is there a way we can get a list of //all keys in an object?)
//3. Check for the existence of a special Pizza
//- Using another appropriate Object method, check to see if the parlor offers a //banana pizza. (Hint: Is there a method that can tell us whether or not an object //contains a key of a certain name?)

//1.
var menu = {
    cheese: { 
      toppings: ['extra cheese', 'meatballs','mushrooms'],
      price: 12
    },
    pepperoni: { 
      toppings: ['sausage', 'Canadian bacon', 'salami'],
      price: 14
    },
    sausage: {
      toppings: ['meatballs', 'pepperoni', 'peppers'],
      price: 14
     },
    veggie: {
      toppings: ['onions', 'peppers', 'olives'],
      price: 12
     },
    combo: {
      toppings: ['peppers', 'Canadian bacon', 'mushrooms', 'onions'],
      price: 16
     },
  }
  
  /*Alternate method
  menu['cheese']['toppings'] = ['extra cheese', 'meatballs', 'mushrooms']
  menu['cheese']['price'] = 12
  
  menu['pepperoni']['toppings'] = ['sausage', 'Canadian bacon', 'salami']
  menu['pepperoni']['price'] = 14
  
  menu['sausage']['toppings'] = ['meatballs', 'pepperoni', 'peppers']
  menu['sausage']['price'] = 14
  
  menu['veggie']['toppings'] = ['onions', 'peppers', 'olives']
  menu['veggie']['price'] = 12
  
  menu['combo']['toppings'] = ['peppers','Canadian bacon', 'mushrooms', 'onions']
  menu['combo']['price'] = 16
  */
  
  
  //2.
  
  console.log('#2')
  console.log(Object.keys(menu))
  //Google led me here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  
  /*Alterate method
  for(var item in menu) {
    console.log([item])
  }
  */
  
  //3.
  console.log('#3')
  console.log(menu.hasOwnProperty('banana'))
  //Did some research to find hasOwnProperty is a Boolean to indicate a specific value exists: https://www.geeksforgeeks.org/how-to-check-a-key-exists-in-javascript-object/#:~:text=There%20are%20mainly%20two%20methods,property%20is%20in%20the%20object.
  
