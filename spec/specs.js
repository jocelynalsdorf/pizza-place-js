describe('Pizza', function() {
  it('creates a new pizza with the given specifications', function() {
    var testPizza = new Pizza("pepperoni", "small", "Michael");
    expect(testPizza.toppings).to.equal("pepperoni");
    expect(testPizza.size).to.equal("small");
    expect(testPizza.orderName).to.equal("Michael");
  });

  it('creates a new pizza with the given specifications', function() {
    var testPizza = new Pizza("cheese", "large", "Adam");
    expect(testPizza.toppings).to.equal("cheese");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.orderName).to.equal("Adam");
  });
  it('determines the price of 1 pizza with the given specifications', function() {
    var testPizza = new Pizza("cheese", "small", "Debbie");
    expect(testPizza.toppings).to.equal("cheese");
    expect(testPizza.size).to.equal("small");
    expect(testPizza.orderName).to.equal("Debbie");
    expect(testPizza.price()).to.equal(8);
  });

  it('determines the price of 1 pizza with the given specifications', function(){
    var testPizza = new Pizza("cheese", "large", "Mike");
    expect(testPizza.price()).to.equal(9);
  });

  it('determines the price of 1 pizza with the given specifications', function(){
    var testPizza = new Pizza("pepperoni", "small", "Cody");
    expect(testPizza.price()).to.equal(10);
  });

  it('determines the price of 1 pizza with the given specifications', function(){
    var testPizza = new Pizza("pepperoni", "large", "Jeannette");
    expect(testPizza.price()).to.equal(11);
  });

  it('determines the price of 1 pizza with the given specifications', function() {
    var testPizza = new Pizza("mushroom", "small", "John");
    expect(testPizza.price()).to.equal(12);
  });

  it('determines the price of 1 pizza with the given specifications', function() {
    var testPizza = new Pizza("mushroom", "large", "Cindy");
    expect(testPizza.price()).to.equal(13);
  });

  it('determines the price of 1 pizza with teh given specifications', function(){
    var testPizza = new Pizza("veggie", "small", "Joss");
    expect(testPizza.price()).to.equal(12);
  });

  it('determines the price of 1 pizza with the given specifications', function (){
    var testPizza = new Pizza("veggie", "large", "Steve");
    expect(testPizza.price()).to.equal(13);
  });



});
