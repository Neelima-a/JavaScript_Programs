// pollyFill for Call method
// call method allows us to use the methods of another object or outside methods,
// call method is used for function borrowing.
// call method takes first argument as object, and rest arguments individually.
// Note - call method executes the borrowed function immediately unlike bind ().
let car = {
  color: "blue",
  brand: "BMW",
};

let car1 = {
  color: "Black",
  brand: "Ferrari",
};

function purchaseCar(price) {
  console.log(
    `I purchased ${this.color} color ${this.brand} at price of $${price}`
  );
}
//here this represent to the object which we passed on using call method(parameters are passed as comma separated)

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a callable`);
  }
  let newContext = context || globalThis;
  let newProp = Symbol();
  newContext[newProp] = this; // assigning this ( purchaseCar ) to newProp of currentContext
  let result = newContext[newProp](...args);
  delete newContext[newProp];

  return result;
};

purchaseCar.myCall(car, 2100000);
purchaseCar.myCall(car1, 2000000);
