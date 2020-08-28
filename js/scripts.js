
//Business Logic for the user Object
function AddPizza (topping, size, cost) {
this.topping = topping,
this.size = size,
this.cost = cost;
}

let toppings = new AddPizza (0,0,0);
let size = new AddPizza (0,0,0);

//function AddPizza() {
  this.toppingsChoices = [];
  this.sizeChoices = [];


AddPizza.prototype.topping = function(cheese, pepperoni, salami, pineapple, Ham, peppers) {
if (topping === 1) {
  this.topping += 1
}
return topping;
}

AddPizza.prototype.size = function(small, medium, large) {
  this.topping += size;
  if (small === 10) {
  this.size = cost;
} else (medium === 15) {
  this.size = cost;
} else (large === 20) {
  this.size = cost;
}
return this.cost;
}



//User Interface Logic
$(document).ready(function(){

  $("#totalCostButton").click(function() {
    let topping = size.cost() 
    $("#totalCost").show();

  })
})