// hawaiian: [
  //   'pineapple',
  //   'chicken',
  //   'onion'
  // ],
  // pep: [
  //   'pepperoni',
  //   'tomato',
  //   'cheese',
  // ]
  // bbq: [
  //   'chicken',
  //   'bbq sauce',
  //   'jalapenos'
  // ]


// console.log(menu)

// menu.hawaiian = ['pineapple', 'chicken', 'onion', 5]
// menu.pepperoni = ['pepperoni', 'tomato', 'cheese', 6]
// menu.bbq = ['chicken', 'bbq sauce', 'jalapenos', 7]
// menu.delux = ['chicken', 'pepperoni', 'sausage', 8]
// menu.threeCheese = ['parm', 'cheddar', 'motza', 9]

console.log(menu)

// the above is my answer for question 1 before a screen share with Bruno and class in after hours

var menu = {
  hawaiian: {
    toppings: ['pineapple', 'chicken', 'onion'],
    price: 5
  },
  pepp: {
    toppings: ['pepperoni', 'tomato', 'cheese'],
    price: 6
  },
  bbq: {
    toppings: ['chicken', 'bbq sauce', 'jalapenos'],
    price: 7
  },
  delux: {
    toppings: ['chicken', 'pepperoni', 'sausage'],
    price: 8
  },
  threeCheese: {
    toppings: ['parm', 'cheddar', 'motza'],
    price: 9
  }
}

console.log(menu)

console.log(Object.keys(menu))

if ('banana' in menu) {
  console.log('There it is!')
} else {
  console.log('It aint there')
}