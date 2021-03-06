function Order() {
  this.pizzas = {};
  this.currentId = 0;
  this.isDelivering = false;
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
Order.prototype.addDelivery = function (total) {
  total += 5;
  this.totalCost += 5;
  this.isDelivering = true;
  return total;
};
Order.prototype.calculateCost = function (order) {
  let totalCost = 0;
  Object.keys(order.pizzas).forEach(function (key) {
    const pizza = order.findPizza(key);
    let cost = 5;
    const toppingCount = pizza.toppingCount;
    if (toppingCount <= 2) {
      cost += 3;
    } else if (toppingCount === 3) {
      cost += 4;
    } else {
      cost += 5;
    }
    if (pizza.size === "Medium") {
      cost += 3;
    } else if (pizza.size === "Large") {
      cost += 5;
    }
    pizza.cost = cost;
    totalCost += cost;
  });
  order.totalCost = totalCost;
  return totalCost;
};

function Pizza(toppings, size, toppingCount) {
  this.toppings = [toppings];
  this.size = size;
  this.toppingCount = toppingCount;
}
Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

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
function buildPizza(toppingCount, order) {
  let toppingsArray = [];
  for (let i = 1; i < toppingCount + 1; i++) {
    const topping = $("#topping-input-" + i).val();
    toppingsArray.push(topping);
  }
  const size = $("#size-input").val();
  let pizza = new Pizza(toppingsArray, size, toppingCount);
  order.addPizza(pizza);
}
function resetForm(pizzaForm, toppingCount) {
  toppingCount -= 1;
  for (let i = 0; i < toppingCount * 2; i++) {
    pizzaForm.removeChild(pizzaForm.lastElementChild);
  }
  $("#size-input").val("Small");
  $("#topping-input-1").val("Pepperoni");
}
function updatePizzaCounter(order) {
  $("#pizza-number").text("#" + (order.currentId + 1));
}
function buildReceipt(order) {
  const receipt = $("#receipt");
  Object.keys(order.pizzas).forEach(function (key) {
    const pizza = order.findPizza(key);
    let htmlString =
      "<ul id=" +
      pizza.id +
      "> <p>Pizza #" +
      pizza.id +
      "</p> <button class='delete'>X</button> <li> Price: $" +
      pizza.cost +
      "</li> <li> Size:" +
      pizza.size +
      "</li> <li> Number of Toppings: " +
      pizza.toppingCount;
    +"</li> </ul>";
    $(receipt).append(htmlString);
  });
  $(".delete").click(function () {
    const id = $(this).parent("ul").attr("id");
    if (!order.removePizza(id)) {
      alert("Prooblem with deleting pizza");
    }
    let total = order.calculateCost(order);
    updateTotal(total);
    $("#" + id).remove();
  });
}
function buildCheckoutPage(city, street, order) {
  if (street !== false) {
    $("#street").text("Street: " + street);
  }
  if (city !== false) {
    $("#city").text("City: " + city);
  }
  $("#total-ammont").text("Total: $" + order.totalCost);
  if (!order.isDelivering) {
    $("#order-complete")
      .children("h1")
      .text("Your Order will be ready for Pickup Soon");
  }
}
function checkout(order) {
  $("#order-form").addClass("hidden");
  $("#checkout-form").removeClass("hidden");
  let street = false;
  let city = false;
  let total = order.calculateCost(order);
  buildReceipt(order);
  updateTotal(total);
  $("#delivery").click(function () {
    let total2 = order.addDelivery(order.totalCost);
    updateTotal(total2);
    $(this).addClass("active");
    $(this).prop("disabled", true);
    $("#receipt").append("<ul><p> Delivery: $5 </p><ul>");
    $("#address-form").removeClass("hidden");
    $("#finish-button").addClass("hidden");
  });
  $("#address-form").submit(function (event) {
    event.preventDefault();
    $("#address-form").addClass("hidden");
    $("#finish-button").removeClass("hidden");
    city = $("#city-input").val();
    street = $("#street-input").val();
  });
  $("#finish-button").click(function () {
    $("#checkout-form").addClass("hidden");
    $("#order-complete").removeClass("hidden");
    buildCheckoutPage(city, street, order);
  });
}
function updateTotal(total) {
  $("#total").text("Total: $" + total);
}
function loadingIndicator() {
  const time = Math.floor(Math.random() * 2) + 1;
  $("#loading").removeClass("hidden");
  $("#pizza-form-1").addClass("hidden");
  setTimeout(() => {
    $("#loading").addClass("hidden");
    $("#pizza-form-1").removeClass("hidden");
  }, time * 1000);
}
function orderPizza(order) {
  let toppingCount = 1;
  const pizzaForm = document.getElementById("pizza-form-1");
  $("#add-topping").click(function () {
    toppingCount += 1;
    addNewToppingInput(toppingCount, pizzaForm);
  });
  $("#add-pizza").click(function () {
    buildPizza(toppingCount, order);
    resetForm(pizzaForm, toppingCount);
    toppingCount = 1;
    updatePizzaCounter(order);
    loadingIndicator();
  });
  $("#checkout").click(function () {
    buildPizza(toppingCount, order);
    checkout(order);
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
