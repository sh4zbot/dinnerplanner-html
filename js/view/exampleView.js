//ExampleView Object constructor
var ExampleView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.getSelectedDish = container.find("#getSelectedDish");
 this.getAllIngredients = container.find("#getAllIngredients");
  this.getTotalMenuPrice = container.find("#getTotalMenuPrice");
 
 this.numberOfGuests.html(model.getNumberOfGuests());
 this.getSelectedDish.html(JSON.stringify(model.getSelectedDish('starter')));
 this.getAllIngredients.html(JSON.stringify(model.getAllIngredients()));
 this.getTotalMenuPrice.html(model.getTotalMenuPrice());
 
 }