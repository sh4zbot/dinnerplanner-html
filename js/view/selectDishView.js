$(function() {

	var SelectDishView = function (container,model) {

	this.dishList = container.find("#dishList");
	
	var allDishes = model.getAllDishes('main dish');
	var dishes = new Array;
	var names = new Array;
	var images = new Array;
	var descriptions = new Array;
	//alert(JSON.stringify(allDishes));
	
	$.each(allDishes, function(index, dish) {
		
		names.push(dish.name);
		images.push(dish.image);
		descriptions.push(dish.description);
		
		dishes.push(dish);
		});
	
	
	
	this.dishList.html("");
	//this.dishList.append(JSON.stringify(dishes));
	//this.dishList.append(JSON.stringify(dishes.images));
	this.dishList.append("<table class='table table-condensed table-hover'> <tbody>");
	
	this.dishList.append("<tr>");
	
	for (i = 0; i < names.length; i++) {
	
		this.dishList.append("<td>");
		this.dishList.append(names[i]);
		this.dishList.append("</td>");
	}
	
	this.dishList.append("</tr>");
	
	
	
	this.dishList.append("</tbody></table>");
	
	
	
	
	
	}
	
	
	var model = new DinnerModel();
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	
	

});