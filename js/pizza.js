//1. 
var menu = {
    plain: {
      toppings: ['mozzarella', 'tomatosauce','herbs'],
      price: '8.00' 
    },
    
    usual: {
      toppings: ['mozzarella','pepperoni','tomatosauce'],
      price: '10.00'
    },
    
    supreme: {
      toppings: ['vegetables','pepperoni','sausage','tomatosauce'],
      price: '12.00'
    },
    
    veggie: {
      toppings: ['vegetables','tomatosauce','mozzarella'],
      price: '9.00'
    },
    
    roadkill: {
      toppings: ['surprise','stuff','things'],
      price: '25.00'
    }
}

console.log(menu)

//2.
  
  for(var pizzatype in menu){
      console.log(pizzatype)
    }

//3.

if (menu.banana){
  console.log('Gurl, you nasty')
} else {
  console.log('I don\'t know why you\'d want that anyway')
}
