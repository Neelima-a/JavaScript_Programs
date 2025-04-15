// pollyFill for bind method
//return a function where we can assign to a variable and use it multiple times
let car = {
  color: "blue",
  brand: "BMW",
};

let car1 = {
  color: "Black",
  brand: "Ferrari",
};

function purchaseCar(price, location) {
  console.log(
    `I purchased ${this.color} color ${this.brand} at price of $${price} in ${location}`
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} can't bound as it's not callable`);
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs); 
  };
};

Function.prototype.newBind = function (...args) {
  let obj = this;
  return function (...newArgs) {
    return obj.call(...args, ...newArgs);
  };
};

let newFun = purchaseCar.myBind(car1, 2000000);
newFun("hyd");

// let newFun = purchaseCar.newBind(car1, 2000000);
// newFun("hyd");
