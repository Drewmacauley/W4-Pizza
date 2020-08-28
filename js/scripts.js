
//Business Logic for the user Object
function AddPizza (topping, size, cost) {
this.toppings = []
this.size = []
this.cost = []
}

// let toppings = new AddPizza (0,0,0);
// let size = new AddPizza (0,0,0);

AddPizza.prototype.addTopping = function(topping) {
  topping.id = this.assignId();
  this.toppings.push(topping);
}

AddPizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// This button adds the selected topping to the Pizza
$("#btnAddTopping").click(function() {
  var myTopping = $("#pizzaToppings").val();
  myPie.addTopping(myTopping);
  displayPie();
  });


//User Interface Logic
$(document).ready(function(){

  $("#totalCostButton").click(function() {
    let topping = size.cost() 
    $("#totalCost").show();

  })
})