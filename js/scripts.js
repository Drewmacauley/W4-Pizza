//Business Logic for the user object
// Plan 1
function AddPizza (topping, size, cost) {
  this.topping = topping,
  this.size = size,
  this.cost = cost;
}

AddPizza.prototype.AddTopping = function() {
  let topping = 1
  if (topping === 1) {
    this.cost += 1;
  } 
  return this.cost;
}

AddPizza.prototype.sizePrice = function() {
  this.cost += this.size;
  this.size
}















// Plan 2
// // //Business Logic for the user Object
// // function AddPizza (topping, size, cost) {
// // this.toppings = []
// // this.size = []
// // this.cost = []
// // }

// // let toppings = new AddPizza (0,0,0);
// // let size = new AddPizza (0,0,0);

// // AddPizza.prototype.addTopping = function(topping) {
// //   topping.id = this.size();
// //   this.toppings.push(topping);
// // }

// // AddPizza.prototype.cost = function() {
// //   this.cost += 1;
// //   return this.cost;
// // }





// // //User Interface Logic

// // let AddPizza = new AddPizza();

// // function 