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

Order.prototype.calculateCost = function (order) {
  let totalCost = 0;
  Object.keys(order.pizzas).forEach(function (key) {
    const pizza = order.findPizza(key);
    const cost = 5;
    const toppingCount = pizza.topping.length;
    if (toppingCount <= 2) {
      cost += 3;
    } else if (toppingCount === 3) {
      cost += 4;
    } else {
      cost += 5;
    }
    if (pizza.size === "medium") {
      cost += 3;
    } else if (pizza.size === "large") {
      cost += 5;
    }
    pizza.cost = cost;
    totalCost += cost;
  });
  return totalCost;
};

function Pizza(toppings, size) {
  this.toppings = [toppings];
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
// function Topping(name) {
//   this.name = name;
// }

// UI Logic

function addNewToppingInput(toppingCount, pizzaForm) {
  $(pizzaForm).append(
    "<label id='topping-label-" +
      toppingCount +
      "'> Topping " +
      toppingCount +
      "</label>"
  );
  const select = document.getElementById("topping-input-1");
  const selectClone = select.cloneNode(true);
  selectClone.id = "topping-input-" + toppingCount;
  $(pizzaForm).append(selectClone);
}
function orderPizza(order) {
  let toppingCount = 1;
  const pizzaForm = $("#pizza-form-1");
  $("#add-topping").click(function () {
    toppingCount++;
    addNewToppingInput(toppingCount, pizzaForm);
  });
  $("#add-pizza").click(function () {
    toppingCount++;
    addNewToppingInput(toppingCount, pizzaForm);
  });
}
function startOrder() {
  let order = new Order();
  return order;
}
$(document).ready(function () {
  const order = startOrder();
  orderPizza(order);
});
