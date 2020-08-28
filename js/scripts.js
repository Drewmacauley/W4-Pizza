//Business Logic for the user Object
function AddPizza (topping, size, cost) {
this.topping = topping,
this.size = size,
this.cost = cost;
}

let toppings = new AddPizza (0,0,0);
let size = new AddPizza (0,0,0);

AddPizza.prototype.topping = function(cheese, pep, salami, pineapple, Ham, peppers) {
if (topping === 1) {
  this.cost += 1
}
}








//User Interface Logic
$(document).ready(function(){

  $("#totalCost").click(function() {
    let topping = size.cost() //we have topping = cost????? cost not total cost.....should they be =? should we have cost there?
  })
})