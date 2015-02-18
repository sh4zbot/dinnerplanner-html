//DishdetailView Object constructor
var DishDetailView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.dishName = container.find("#dishName");
 this.numberOfGuests = container.find("#numberOfGuests");
 
 this.numberOfGuests.html(model.getNumberOfGuests());
 this.dishName.html(model.getNumberOfGuests());
 //this.getSelectedDish.html(JSON.stringify(model.getSelectedDish('starter')));
 
}