$(function() {

	var overView = function (container,model) {

	
	
	this.dishList = container.find("#images");
	var dishList = this.dishList[0];
	
	//get the Persons input field and set the value from dinnerModel.js
	this.numberOfGuests = container.find("#numberOfGuests");
	var numberOfGuests = this.numberOfGuests[0];
	numberOfGuests.value = model.getNumberOfGuests();
	
	//var selectedDishes = model.getAllDishes('main dish');
	var fullMenu = model.getFullMenu();
	
	var selectedDishes = new Array;

	
	
	var names = new Array;
	var images = new Array;
	var descriptions = new Array;
	
	$.each(fullMenu,function(index,value) {
		names.push(model.getDish(value)['name']);
		images.push(model.getDish(value)['image']);
		descriptions.push(model.getDish(value)['description']);
	});
	
	//get names, images and description
	/*
	$.each(selectedDishes, function(index, dish) {		
		names.push(dish.name);
		images.push(dish.image);
		descriptions.push(dish.description);		
	});
	*/
	
	//create table
	var table = document.createElement('table');
	table.className += 'table';
	
	var row = table.insertRow(0);
	var cell = new Array;
	for (i = 0; i < names.length; i++) {
		cell[i] = row.insertCell(i);
		cell[i].innerHTML = "<img src='images/" + images[i] + "' height='140' width='80'>" + "<h4>" + 
			names[i] + "</h4>" + "<br/>" + "<h5>" + descriptions[i] + "</h5>";
	}
	
	dishList.appendChild(table);
	
	
	//total price
	this.price = container.find("#totalPrice");
	var price = this.price[0];
	
	price.innerHTML = model.getTotalMenuPrice();
	
	
	}
	
	
	var model = new DinnerModel();
	var overView = new overView($("#overView"), model);
	
	

});