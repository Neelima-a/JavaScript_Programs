// pollyFill for Call method

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
//here this represent to the object which we passed on using call method(parameters are passed as comma seperated)

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a callable`);
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car, 2100000);
purchaseCar.myCall(car1, 2000000);
