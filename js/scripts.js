function Order() {
  this.pizzas = {};
  this.currentId = 0;
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.findPizza = function (id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};

Order.prototype.removePizza = function (id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
  return true;
};

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};
Pizza.prototype.changeSize = function (size) {
  this.size = size;
};
Pizza.prototype.removeTopping = function (name) {
  this.toppings.forEach((top) => {
    if ((top = name)) {
      const index = this.toppings.indexOf(top);
      this.toppings.splice(index, 1);
    }
  });
};
function Topping(name) {
  this.name = name;
}
