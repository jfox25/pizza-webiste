function Order() {
  this.pizzas = {};
  this.currentId = 0;
}

Order.prototype.addPizza = function (pizza) {
  // pizza.id = this.assignId();
  this.pizzas[pizza.size] = pizza;
};

function Pizza(toppings, size) {
  console.log(toppings);
  this.toppings = toppings;
  this.size = size;
}
