//DishdetailView Object constructor
var LasagneView = function (container,model) {

	// Important change: 
	// In order to create the function fillStaticElements to be used in the update function,
	// it was necessary to remove "this" from the elements. Otherwise, "this" inside the
	// function would refer to its scope and generate conflict. TODO that in the other views.

	var dishID = model.getChosenDish(); 
 	
 	this.container = container[0]; //converts jQuery object to Javascript object. "container" is used by StateController to show or hide views

	model.addObserver(this);
	this.update = function (obj) {
		//call "bigger" functions that build the view. We may have to embed some code into new functions to call here (see loadShapes() in 
		//the drawing example)
		dishID = model.getChosenDish();
		console.log("Dish changed to: " + dishID);
		fillStaticElements();
		generateIngredientsTable();
		//alert(model.getNumberOfGuests());	
	}
 
	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)

	// Find and bind to a container (static elements, same amount always)
	dishName = container.find("#dishName");
	dishDescription = container.find("#dishDescription");
	numberOfGuests = container.find("#numberOfGuests");
	imgDish = container.find("#imgDish");
	this.backButton = container.find("#backButton"); // Exception with this, only used in the controller
	this.confirmDishBtn = container.find("#confirmDishBtn");

	// Fields of variable size
	ingredientsList = new Array;
	ingredientsTableArea = container.find("#tableArea");

	// Fill static elements with HTML code
	function fillStaticElements () {
		numberOfGuests.html(model.getNumberOfGuests());
		dishName.html(model.getDish(dishID).name);
		dishDescription.html(model.getDish(dishID).description);
		imgDish.attr("src", "images/" + model.getDish(dishID).image); // Changes container (selector) src attribute to corresponding in 
	}																		// model.dishes through items in the menu

	// Generate ingredients table
	function generateIngredientsTable () {
		// Defines variable-length elements content using model function
		ingredientsList = model.getDish(dishID).ingredients;
		var ingredientsTableAreaJS = ingredientsTableArea[0];

		var table = container.find("#ingredientsTable")[0];
		table.innerHTML = ""; // Very important!! Clear table each time before creating another one.

		var row = new Array;
		var cell = new Array;
		console.log("ingredientsList length: " + ingredientsList);
		console.log("ingredientsTableJS html: " + ingredientsTableAreaJS);

		for (var i = 0; i < ingredientsList.length; i++) { // Create an empty <tr> element and add it 
			row[i] = table.insertRow(i);
			
			for (var j = 0; j < 4; j++) { // Insert new cells (<td> elements) at the created row <tr> above
				cell[j] = row[i].insertCell(j);
				// Fills cell with content depending on the position (0 to 3) according to sketch 
				switch(j) {
				    case 0:
				        cell[j].innerHTML = (ingredientsList[i]['quantity']*model.getNumberOfGuests()).toFixed(1).replace(/[.,]0$/, "") + " " + this.ingredientsList[i]['unit'];
				        break;  // First part of code above makes sure every number has only 1 decimal digit. If the digit is 0 (exact number), it removes the decimal notation.
				    case 1:
				        cell[j].innerHTML = ingredientsList[i]['name'];
				        break;
				    case 2:
				        cell[j].innerHTML = "SEK";
				        break;
				    case 3:
				        cell[j].innerHTML = (ingredientsList[i]['price']*model.getNumberOfGuests()).toFixed(0);
				        break;
				    default:
				        "error here";
				}
			};
		};

		ingredientsTableAreaJS.appendChild(table);
	}

	//get the Persons input field and set the value from dinnerModel.js
/*	this.numberOfGuests = container.find("#numberOfGuests");
	var numberOfGuests = this.numberOfGuests[0];
	numberOfGuests.value = model.getNumberOfGuests();*/	
}
