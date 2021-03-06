$(function() {

	var SelectDishView = function (container,model) {

	
	
	//get the Persons input field and set the value from dinnerModel.js
	this.numberOfGuests = container.find("#numberOfGuests");
	var numberOfGuests = this.numberOfGuests[0];
	numberOfGuests.value = model.getNumberOfGuests();
	
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

	
	
	//alert(JSON.stringify(table));
	
	selectedDishes.appendChild(selectedTable);
	
	
	
	
	
	//----the thumbnails section----
	this.dishList = container.find("#dishList");
	var dishList = this.dishList[0];
	
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

	//trying to make "table" with bootstrap row/columns
	/*
	var bootstrapRow = document.createElement('div');
	bootstrapRow.className += 'row';
	var bootstrapCells = new Array;

	for (i = 0; i < names.length; i++) {
		bootstrapCells[i]	
	}
		
	var bootstrapRow = document.createElement('div');
	bootstrapRow.className += 'row';
	
	var bootstrapColumn1 = document.createElement('div');
	bootstrapColumn1.className += 'col-md-6';
	bootstrapColumn1.innerHTML = 'test left';

	var bootstrapThumbnail1 = document.createElement('div');
	bootstrapThumbnail1.className += 'thumbnail';
	bootstrapColumn1.appendChild(bootstrapThumbnail1);



	var bootstrapColumn2 = document.createElement('div');
	bootstrapColumn2.className += 'col-md-6';
	bootstrapColumn2.innerHTML = 'test right';

	bootstrapRow.appendChild(bootstrapColumn1);
	bootstrapRow.appendChild(bootstrapColumn2);

	dishList.appendChild(bootstrapRow);

	alert(bootstrapRow.innerHTML);
	*/

	/*
	<div class="col-md-2 col-md-offset-1">
		    <div class="thumbnail">
		      <img src="..." alt="...">
		      <div class="caption">
		        <h4>Thumbnail label</h4>
		        <p>...</p>
		      </div>
		    </div>
	</div>
	*/
	
	
	
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
