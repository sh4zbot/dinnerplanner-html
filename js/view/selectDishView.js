$(function() {

	var SelectDishView = function (container,model) {

	this.dishList = container.find("#dishList");
	
	var allDishes = model.getAllDishes('main dish');
	var dishes = new Array;
	var names = new Array;
	var images = new Array;
	var descriptions = new Array;
	//alert(JSON.stringify(allDishes));
	
	var dishList = this.dishList[0];
	
	var table = document.createElement('table');
	table.className += 'table';
	
	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(0);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	// Add some text to the new cells:
	cell1.innerHTML = "NEW CELL1";
	cell2.innerHTML = "NEW CELL2";
	
	dishList.appendChild(table);
	alert (dishList.innerHTML);
	
	$.each(allDishes, function(index, dish) {
		
		names.push(dish.name);
		images.push(dish.image);
		descriptions.push(dish.description);
		
		dishes.push(dish);
		});
	
	
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