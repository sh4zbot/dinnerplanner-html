//DinnerPreparationView Object constructor
var DinnerOverviewView = function (container,model) {

var dishID = 100; // Using dish 100 (meat balls as example). Change here to get another one.
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 
 // Find and bind to a container (static elements, same amount always)
 this.starterName = container.find("#starterName");
 this.starterSummary = container.find("#starterSummary");
 this.starterPrice = container.find("#starterPrice");
 this.starterImage = container.find("#starterImage");
 this.mainCourseName = container.find("#mainCourseName");
 this.mainCourseSummary = container.find("#mainCourseSummary");
 this.mainCoursePrice = container.find("#mainCoursePrice");
 this.mainCourseImage = container.find("#mainCourseImage");
 this.dessertName = container.find("#dessertName");
 this.dessertSummary = container.find("#dessertSummary");
 this.dessertPrice = container.find("#dessertPrice");
 this.dessertImage = container.find("#dessertImage");
 
 this.numberOfGuests = container.find("#numberOfGuests");
 
 this.selectedDishes = model.getSelectedDishes(); // Gets selectedDishes through a getter!


// Fill static elements with HTML code
 this.numberOfGuests.html(model.getNumberOfGuests());
 
 this.starterName.html(model.getDish(this.selectedDishes['starter']).name);
 this.starterPrice.html(model.getTotalDishPrice(this.selectedDishes['starter']) + " SEK");
 this.starterImage.attr("src", "images/" + model.getDish(this.selectedDishes['starter']).image); // Changes container (selector) src attribute to corresponding in model.dishes through items in the menu

 this.mainCourseName.html(model.getDish(this.selectedDishes['main course']).name);
 this.mainCoursePrice.html(model.getTotalDishPrice(this.selectedDishes['main course']) + " SEK");
 this.mainCourseImage.attr("src", "images/" + model.getDish(this.selectedDishes['main course']).image);

 this.dessertName.html(model.getDish(this.selectedDishes['dessert']).name);
 this.dessertPrice.html(model.getTotalDishPrice(this.selectedDishes['dessert']) + " SEK");
 this.dessertImage.attr("src", "images/" + model.getDish(this.selectedDishes['dessert']).image);

 console.log(model.getTotalDishPrice(1));

/* DEBUG console.log("imagem: " + this.starterImage.src);
 console.log("id do starter: " + this.selectedDishes['starter']);
 //model.addDishToMenu(100);
 for (key in this.selectedDishes){
 	console.log("print do menu: " + this.selectedDishes[key]);
 }*/
 

// >>>> STUCK HERE: HOW TO GET THE ID FROM THE SELECTED DISHES ARRAY AND USE HERE?
// this.starterName.html(model.getDish(selectedDishes['starter']);
// console.log(this.starterName.html(model.getDish(selectedDishes['starter'])));


// this.dishDescription.html(model.getDish(dishID).description);
// this.imgDish.src = model.getDish(dishID).image;
 
 
 // Defines variable-length elements content using model function
 this.ingredientsList = model.getDish(dishID).ingredients;
 
 /* DEBUG // Separate the components of the ingredients list
 for(key1 in this.ingredientsList){
	for(key2 in this.ingredientsList[key1]) {
		console.log(this.ingredientsList[key1][key2]);	
	}
	//console.log(this.ingredientsList[key]);
 }*/

	//price
	this.totalPrice.html(model.getTotalMenuPrice() + ".00 SEK");
 console.info("Alou_testando_view");
}

