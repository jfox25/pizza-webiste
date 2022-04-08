```Javascript
Describe: Order()

Test:"Creates a order object"
Code: let order = new Order()
      console.log(order)
Expected Result: {pizzas: {}}

Describe: Order.prototype.addPizza()

Test:"adds a pizza object to the order"
Code: let order = new Order()
      let pizza = new Pizza(["pepperoni", "ham"], "medium")
      order.addPizza(pizza)
      console.log(order)
Expected Result: {pizzas: {toppings: [pepperoni, ham], size: medium}}

Describe: Order.prototype.assignId()

Test:"assigns an id to a pizza object when added to order"
Code: let order = new Order()
      let pizza = new Pizza(["pepperoni", "ham"], "medium")
      order.addPizza(pizza)
      console.log(order)
Expected Result: {pizzas: {id: 1, toppings: none, size: medium}}

Describe: Order.prototype.findPizza()

Test:"finds a pizza object in an order object"
Code: let order = new Order()
      let pizza = new Pizza(["pepperoni", "ham"], "medium")
      order.addPizza(pizza)
      console.log(pizza)
      order.findPizza(1)
Expected Result: {id: 1, toppings: ["pepperoni", "ham"], size: medium}

Describe: Order.prototype.removePizza()

Test:"removes a pizza object in an order object"
Code: let order = new Order()
      let pizza = new Pizza(["pepperoni", "ham"], "medium")
      order.addPizza(pizza)
      order.removePizza(1)
      console.log(order)
Expected Result: {pizzas: {}}

Describe: Pizza()

Test:"Creates a new pizza object"
Code: let pizza = new Pizza("pepperoni", "small")
      console.log(pizza)
Expected Result: {toppings: [pepperoni],size: small}

Describe: Pizza.prototype.addTopping()

Test:"add toppings to a pizza object"
Code: let pizza = new Pizza(["pepperoni"], "small")
      console.log(pizza)
      pizza.addTopping("bacon")
      console.log(pizza)
Expected Result: {toppings: [pepperoni, bacon],size: small}

Describe: Pizza.prototype.changeSize()

Test:"changes the size of a pizza object"
Code: let pizza = new Pizza("pepperoni", "small")
      pizza.changeSize(large)
      console.log(pizza)
Expected Result: {toppings: [pepperoni],size:  large}

Describe: Pizza.prototype.removeTopping()

Test:"removes a topping from a pizza object"
Code: let pizza = new Pizza("pepperoni", "small")
      pizza.addTopping(bacon)
      pizza.removeTopping(pepperoni)
      console.log(pizza)
Expected Result: {toppings: [bacon],size: small}

Describe: Topping()

Test:"Creates a new topping object"
Code: let topping = new Topping(pepperoni)
      console.log(topping)
Expected Result: {name: pepperoni}
```
