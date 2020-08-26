const menu = {
    pepperoni: {
      toppings: ["garlic", "tomatos", "pepperoni"],
      price: "$5"
    },
    cheese: {
      toppings: ["garlic", "tomatos"],
      price: "$5"
    },
    Vanilla: {
      toppings: ["garlic", "oregano", "pepperoni"],
      price: "$8"
    },
    mediterrean: {
      toppings: ["garlic", "Olives", "pineapple"],
      price: "$7"
    },
    mhagarita: {
      toppings: ["garlic", "onions", "pineapple"],
      price: "$7"
    },
  }
  //Method to list all of the keys in the object
  console.log(Object.keys(menu))
  
  //check to see if the parlor offers a `banana` pizza. 
  console.log.hasOwnProperty("banana")
  console.log("test")