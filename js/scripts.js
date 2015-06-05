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
