# Pizza Website

By James Fox

A website that allows you to build one or more pizzas with toppings.

## Technologies Used

- HTML
- CSS
- JavaScript
- GIT

## Info

Simulates a pizza checkout website. Add Toppings of you choosing and look at your receipt for details on your order.

## Setup

1. Clone this repository to your desktop using git clone
2. Click on the index.html file to view the website.
3. Start ordering pizzas!

## GitHub Link

[Link to Code on GitHub](https://github.com/jfox25/pizza-webiste)

## Bugs

No known bugs at this time.

## Future Improvements

- Plan to edit the css to add more elements.

## License

MIT
Copyright (c) 2022 James Fox

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
      pizza.addTopping("bacon")
      console.log(pizza)
Expected Result: {toppings: [pepperoni, bacon],size: small}

Describe: Pizza.prototype.changeSize()

Test:"changes the size of a pizza object"
Code: let pizza = new Pizza(["pepperoni"], "small")
      pizza.changeSize("large")
      console.log(pizza)
Expected Result: {toppings: [pepperoni],size:  large}

Describe: Pizza.prototype.removeTopping()

Test:"removes a topping from a pizza object"
Code: let pizza = new Pizza(["pepperoni"], "small")
      pizza.addTopping("bacon")
      pizza.removeTopping("pepperoni")
      console.log(pizza)
Expected Result: {toppings: [bacon],size: small}

Describe: Topping()

Test:"Creates a new topping object"
Code: let topping = new Topping(pepperoni)
      console.log(topping)
Expected Result: {name: pepperoni}
```
