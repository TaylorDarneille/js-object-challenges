var menu = {
    neapolitan:{
    toppingsN:["pepperoni","mushrooms","sausage"],
    priceN:5.99
     },
    chicago:{
    toppingsCh:["onions","bacon","extra chesse"],
    priceCh:6.99
     },
    sicilian: {
    toppingsS:["peppers","olives","chicken"],
    priceS:7.99
     },
    greek: {
    toppingsG:["pineapple","spinach","basil"],
    priceG:8.99
     },
    california: {
    toppingsCa:["ham","pesto","sausage"],
    priceCa:9.99
     }
  };
  
  //prints all the keys for the object menu
  console.log(Object.keys(menu));
  
  // checks to see if the object menu contains key "banana"
  console.log(menu.hasOwnProperty("banana"));