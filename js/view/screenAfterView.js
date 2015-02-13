$(function() {

	var SelectDishView = function (container,model) {

	this.dishList = container.find("#dishList");
	var dishList = this.dishList[0];
	
	//get the Persons input field and set the value from dinnerModel.js
	this.numberOfGuests = container.find("#numberOfGuests");
	var numberOfGuests = this.numberOfGuests[0];
	numberOfGuests.value = model.getNumberOfGuests();
	
	var allDishes = model.getAllDishes('main dish');
	var names = new Array;
	var images = new Array;
	var descriptions = new Array;
	
	//get names, images and description
	$.each(allDishes, function(index, dish) {		
		names.push(dish.name);
		images.push(dish.image);
		descriptions.push(dish.description);		
	});
	
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
	
	
	
	
	/*
	this.dishList.html("");
	$(this.thumbnails).find( "img" ).html("");
	//this.dishList.append(JSON.stringify(dishes));
	//this.dishList.append(JSON.stringify(dishes.images));
	
	this.dishList.append("<table class='table' id='tb-ingredients'>");
	this.dishList.append("<tbody><tr>");
	for (i = 0; i < names.length; i++) {
	
		this.dishList.append("<td>");
		this.dishList.append(names[i]);
		this.dishList.append(images[i]);
		this.dishList.append(descriptions[i]);
		this.dishList.append("</td>");
	}	
	this.dishList.append("</tr>");
	
	this.dishList.append("</tbody></table>");
	
	
	this.dishList.append("<table class='table' id='tb-ingredients'><tbody><tr><td>2 tbsp</td><td>olive oil</td><td>SEK</td><td>0.20</td></tr><tr><td>750 g</td><td>beef</td><td>SEK</td><td>20.00</td></tr><tr><td>2 tbsp</td><td>olive oil</td><td>SEK</td><td>0.20</td></tr></tbody></table>");
	*/
	
	
	
	
	}
	
	
	var model = new DinnerModel();
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	
	

});