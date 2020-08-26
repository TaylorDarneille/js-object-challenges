// Pizza Parlor!
// You've been tasked with making an app for a pizza parlor. You'll need an object to hold the menu data.

// 1. Make the Object
// Make a menu object with at least 5 pizza types as keys.
// Make each pizza value another nested object which contains a toppings key that is an array of at least 3 toppings and a price key telling what it costs.

let menu = {
    hawaiian: ['pineapples', 'ham', 'mozz'],
    margherita: ['mozz', 'tomatoes', 'sauce', 'basil'],
    meatLovers: ['italian sausage', 'ham', 'bacon', 'sirloin beef'],
    veggie: ['mozz', 'parmesan', 'basil', 'spinach'],
    plantLovers: ['secret sauce', 'tomatoes', 'zucchini'],  
  } 
  console.log(menu)
  
  // 2. Print the names of all Pizzas
  // Using an appropriate Object method, print a list of all pizza names. (Hint: The pizza names are the keys in your object. Is there a way we can get a list of all keys in an object?)
  
  console.log(Object.keys(menu));
  
  // 3. Check for the existence of a special Pizza
  // Using another appropriate Object method, check to see if the parlor offers a banana pizza. (Hint: Is there a method that can tell us whether or not an object contains a key of a certain name?)
  
  var pizza = Object.keys(menu);
  
  for(const keys in menu) 
    if(menu[keys] === "banana pizza") {
      console.log();
  } 
  
  // Bruno, can you let me know what I'm doing wrong? I'm using the for loop but ahhh!! 