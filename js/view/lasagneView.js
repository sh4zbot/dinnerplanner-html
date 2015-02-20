//DishdetailView Object constructor
var LasagneView = function (container,model) {

var dishID = 100; // Using ingredient 100 (meat balls as example). Change here to get another one.
 

	model.addObserver(this);

	this.update = function (obj) {
		//call "bigger" functions that build the view. We may have to embed some code into new functions to call here (see loadShapes() in the drawing example)
		this.numberOfGuests.html(model.getNumberOfGuests());
		//alert(model.getNumberOfGuests());	
	}
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)

 // Find and bind to a container (static elements, same amount always)
 this.inputNumber = container.find("#numberOfGuestsInput");
 this.dishName = container.find("#dishName");
 this.dishDescription = container.find("#dishDescription");
 this.numberOfGuests = container.find("#numberOfGuests");
 this.ingredientsTable = container.find("#ingredientsTable");
 this.imgDish = container.find("imgDish");
 
 // Fields of variable size
 this.ingredientsList = new Array;
 //this.ingredientsList = container.find("#ingredientsList");

 
 // Fill static elements with HTML code
 this.numberOfGuests.html(model.getNumberOfGuests());
 this.dishName.html(model.getDish(dishID).name);
 this.dishDescription.html(model.getDish(dishID).description);
 this.imgDish.attr("src", "images/" + model.getDish(dishID).image); // Changes container (selector) src attribute to corresponding in model.dishes through items in the menu
 

 
 // Defines variable-length elements content using model function
 this.ingredientsList = model.getDish(dishID).ingredients;
 
 /* DEBUG // Separate the components of the ingredients list
 for(key1 in this.ingredientsList){
	for(key2 in this.ingredientsList[key1]) {
		console.log(this.ingredientsList[key1][key2]);	
	}
	//console.log(this.ingredientsList[key]);
 }*/

var ingredientsTable = this.ingredientsTable[0];

var table = document.createElement('table');
table.className += 'table';

var row = new Array;
var cell = new Array;
for (var i = 0; i < this.ingredientsList.length; i++) { // Create an empty <tr> element and add it 
	row[i] = table.insertRow(i);
	for (var j = 0; j < 4; j++) { // Insert new cells (<td> elements) at the created row <tr> above
		cell[j] = row[i].insertCell(j);
		// Fills cell with content depending on the position (0 to 3) according to sketch 
		switch(j) {
		    case 0:
		        cell[j].innerHTML = this.ingredientsList[i]['quantity'] + " " + this.ingredientsList[i]['unit'];
		        break;
		    case 1:
		        cell[j].innerHTML = this.ingredientsList[i]['name'];
		        break;
		    case 2:
		        cell[j].innerHTML = "SEK";
		        break;
		    case 3:
		        cell[j].innerHTML = this.ingredientsList[i]['price'];
		        break;
		    default:
		        "error here";
}
	};
};

 ingredientsTable.appendChild(table);

 //console.info("Alou_testando_view");


	//---selected dishes section----
	this.selectedDishes = container.find("#selectedDishes");
	var selectedDishes = this.selectedDishes[0];

	
	
	var modelDishes = model.getFullMenu();
	var selectedNames = new Array;
	var selectedPrice = new Array;
	
	$.each(modelDishes, function(index,value) {
		var price = 0;
		selectedNames.push(model.getDish(value)['name']);
		
		//alert(JSON.stringify(model.getDish(value)['ingredients']));
		
		$.each(model.getDish(value)['ingredients'], function(ind,ingredient) {
			price += ingredient['price'];
		});
		
		selectedPrice.push(price);
		
	});

	
	//create table
	
	var selectedTable = document.createElement('table');
	selectedTable.className += 'table table-condensed table-hover';
	
	//var selectedRow = selectedTable.insertRow(0);
	var selectedRow = new Array;
	var selectedCell = new Array;
	
	for (i = 0; i < selectedNames.length; i++) {
		selectedRow[i] = selectedTable.insertRow(i);
		
		var cell0 = selectedRow[i].insertCell(0);
		var cell1 = selectedRow[i].insertCell(1);
		
		cell0.innerHTML = selectedNames[i];
		cell1.innerHTML = selectedPrice[i];
		
		
	
	}
	selectedDishes.appendChild(selectedTable);
	
	//get the Persons input field and set the value from dinnerModel.js
	this.numberOfGuests = container.find("#numberOfGuests");
	var numberOfGuests = this.numberOfGuests[0];
	numberOfGuests.value = model.getNumberOfGuests();

	
	
}
