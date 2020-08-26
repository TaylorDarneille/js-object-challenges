// AMAL AMCHTAL TA: MATEEN KAZIA

// part 1

const menu = {
    pizza1: toppings = {
        topping1: 'pizza 1 top 1',
        topping2: 'pizza 1 top 2',
        topping3: 'pizza 1 top 4',
        price: 21
    },
    pizza2: toppings = {
        topping1: 'pizza 2 top 1',
        topping2: 'pizza 2 top 2',
        topping3: 'pizza 2 top 3',
        price: 22
    },
    pizza3: toppings = {
        topping1: 'pizza 3 top 1',
        topping2: 'pizza 3 top 2',
        topping3: 'pizza 3 top 3',
        price: 23
    },
    pizza4: toppings = {
        topping1: 'pizza 4 top 1',
        topping2: 'pizza 4 top 2',
        topping3: 'pizza 4 top 3',
        price: 24
    },
    pizza5: toppings = {
        topping1: 'pizza 5 top 1',
        topping2: 'pizza 5 top 2',
        topping3: 'pizza 5 top 3',
        price: 25
    }
}
// part 2
for(var pizza in menu){
    console.log(pizza)
}
// part 3 
var bananaFound = false;


for(var pizza in menu){
  //console.log(menu[pizza])
  var values = Object.values(menu[pizza]);
  //console.log(values)
  for(var value of values){
    if(value == 'banana'){
      //console.log("here")
      bananaFound = true;
    }
  }
}
console.log(bananaFound)