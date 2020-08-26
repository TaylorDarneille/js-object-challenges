//#1
const menu = {
  mozzarella: {
    toppings: ["onion", "tomato", "mushroom"],
    price: 8.99
  },
  mushroom: {
    toppings: ["mozzarella", "tomato", "mushroom"],
    price: 7.99
  },
  tomato: {
    toppings: ["mushroom", "mozzarella", "onion"],
    price: 9.99
  },
  onion: {
    toppings: ["mushroom", "mozzarella", "sausage"],
    price: 10.99
  },
  hamburger: {
    toppings: ["mushroom", "mozzarella", "hamburger"],
    price: 10.99
  }
}

//#2
for (var property in menu) {
  console.log(property);
}

//#3
for (var property in menu) {
  if (property === "banana") {
    console.log("Present");
  } else {
    console.log("Not Present");
  }
}
