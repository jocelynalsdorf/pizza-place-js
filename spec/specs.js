describe('Pizza', function() {
  it('creates a new pizza with the given specifications', function() {
    var testPizza = new Pizza("pepperoni", "small", "Todd");
    expect(testPizza.toppings).to.equal("pepperoni");
    expect(testPizza.size).to.equal("small");
    expect(testPizza.orderName).to.equal("Todd");
  });

  it('creates a new pizza with the given specifications', function() {
    var testPizza = new Pizza("cheese", "large", "Todd");
    expect(testPizza.toppings).to.equal("cheese");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.orderName).to.equal("Todd");
  });




});
