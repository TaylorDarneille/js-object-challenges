menu = {
  pepperoni :{
    toppings: ['cheese','pepperoni','sauce'],
    price: 9.99
  },
  vegetable :{
    toppings: ['cheese','mushroom','onion',
    'peppers'],
    price: 10.99
  },
  meats :{
    toppings: ['pepperoni','sausage','chicken','cheese'],
    price: 12.99
  },
  vegan:{
    toppings: ['mushroom','sauce','broccoli','sadness'],
     price: 5.99
  },
  hawaiian:{
    toppings:['bacon','ham','pineapple'],
    price: 12.99
  }
}
for (item in menu){
  console.log(item);
}
// console.log(Object.keys(menu));
console.log(Object.prototype.hasOwnProperty('banana'))
