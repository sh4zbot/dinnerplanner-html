//ExampleView Object constructor
var ExampleView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.getSelectedDish = container.find("#getSelectedDish");
 
 this.numberOfGuests.html(model.getNumberOfGuests());
 this.getSelectedDish.html(JSON.stringify(model.getSelectedDish('starter')));
}