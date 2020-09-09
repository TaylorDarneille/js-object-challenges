//Part 1: object filled with objects that are keys
const menu= {
    cheese:{
      toppings: ['sauce', 'cheese', 'other cheese' ],
      price: 10
    },
    pepperoni:{
      toppings: ['pepperoni', 'cheese', 'sauce'],
      price: 12
    },
    everything:{
      toppings: ['peppers',  'onions', 'sausage', 'olives', 'ham'],
      price: 15
    },
    meatLover:{
      toppings: ['sausage', 'pepperoni','ham'],
      price: 16
    },
    margherita: {
      toppings: ['basil', 'mozzarella', 'sauce'],
      price: 14
    }
  }
  
  //Part 2: print name of all pizzas
  //Object.keys(__objectname__) allows you to access the keys in your named object (make sure O in object is capitalized)
  console.log(Object.keys(menu));
  
  //Part 3: check for existence of a banana pizza 
  
  /*solution 1: check key using in keyword
  - create a variable, of any name
  - set it equal to the key name youre searching for
  - use the in keyword
  - then list the name of the object youd like to search in 
  */
  var hasKey= 'banana' in menu;
  console.log(hasKey); //prints false 
  
  
  /* 
  Solution 2: using .hasOwnProperty(__keyname__) to check for key 
  - set var to any name
  - put,  = __objectname__.hasOwnProperty('__keynametosearch__');
  */
  var hasBanana= menu.hasOwnProperty('banana');
  console.log(hasBanana); //prints false