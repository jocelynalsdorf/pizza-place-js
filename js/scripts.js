function Pizza(toppings, size, orderName) {
	this.toppings = toppings;
	this.size = size;
	this.orderName = orderName;

  this.price = function() {
  		var totalPrice = 8;
  	if(this.toppings === "cheese" && this.size === "large") {
  		 totalPrice += 1;
  	}
  	if(this.toppings === "pepperoni" && this.size === "small") {
  		totalPrice += 2;
  	}
  	if(this.toppings === "pepperoni" && this.size === "large") {
  		 totalPrice += 3;
  	}
    if((this.toppings === "veggie" || this.toppings === "mushroom") && this.size === "small") {
  		totalPrice = totalPrice + 4;
  	}
  	if((this.toppings === "veggie" || this.toppings === "mushroom") && this.size === "large"){
  		totalPrice += 5;
  	}
  	return totalPrice;
  	}
  }

Pizza.prototype.finalPrice = function(quantity) {
  return this.price() * quantity;
}


$(document).ready(function(){

  $("form#new-pizza").submit(function(event){
    event.preventDefault();

    var pizzaType = $('input[name="pizza-type"]:checked').val();
    var pizzaSize = $('input[name="pizza-size"]:checked').val();
    var orderName = $("input#first-name").val();
    var howManyPizzas = parseInt($("input#how-many").val());

    var newPizza = new Pizza(pizzaType, pizzaSize, orderName);

    var totalDue = newPizza.finalPrice(howManyPizzas);

    $(".first-name").text(orderName);
    $(".pizza-order").text(howManyPizzas + " " + pizzaSize + " " + pizzaType + " " + " pizza/pizzas");
    $(".total-due").text("$" + totalDue);
  });



});
