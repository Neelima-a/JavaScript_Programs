// pollyFill for apply method

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
//here this represent to the object which we passed on using call method(parameters are passed in array)

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a callable`);
  }

  if (!Array.isArray(args)) {
    throw new TypeError("Create List Array called on non object");
  }
  let newContext = context || globalThis;
  let newProp = Symbol();
  newContext[newProp] = this;

  let result = newContext[newProp](...args); // Execute function
  delete newContext[newProp]; // Remove temporary function property

  return result;
};

purchaseCar.myApply(car, [2100000, "chennai"]);
purchaseCar.myApply(car1, [2000000, "hyd"]);
