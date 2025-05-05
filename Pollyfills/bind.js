// pollyFill for bind method
// return a function where we can assign to a variable and use it multiple times

// bind method in javascript is used for function borrowing, bind method allows us
// to use the methods of other objects or outside methods

// bind method takes first argument as object, and rest arguments individually and
// returns a new function ( copy of borrowed function ).

// new function returned by bind takes arguments individually.

// Note - The bind() method returns a new function and does not execute the borrowed function
// immediately unlike call and apply.
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
  let newContext = context || globalThis;
  let newProp = Symbol();
  newContext[newProp] = this;

  return function (...newArgs) {
    let result = newContext[newProp](...args, ...newArgs);
    delete newContext[newProp];

    return result;
  };
};

// 👉 2) Using apply method
Function.prototype.customBind = function (context, ...args) {
  let borrowedFunc = this;
  return function (...outerArgs) {
    return borrowedFunc.apply(context, [...args, ...outerArgs]);
  };
};

// 👉 3) Using call method
Function.prototype.customBind = function (context, ...args) {
  let borrowedFunc = this;
  return function (...outerArgs) {
    return borrowedFunc.call(context, ...args, ...outerArgs);
  };
};

let newFun = purchaseCar.myBind(car1, 2000000);
newFun("hyd");

// let newFun = purchaseCar.newBind(car1, 2000000);
// newFun("hyd");
