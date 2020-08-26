const menu = {
    supreme : {
        toppings: ['peppers', 'pepperoni', 'onions'],
        price: 21
    },
    meatLovers : {
        toppings: ['ham', 'pepperoni', 'sausage'],
        price: 23
    },
    veggie : {
        toppings: ['peppers', 'mushrooms', 'onions'],
        price: 21
    },
    philly: {
        toppings: ['peppers', 'steak', 'onions'],
        price: 21
    },
    cadillac: {
        toppings: ['prosciutto', 'figGlaze', 'cheese'],
        price: 24
    }
}
console.log(Object.keys(menu));
console.log(menu.hasOwnProperty('banana'));
