let student = {
  name: "Raja",
  age: 27,
  subjects: [
    { name: "English", marks: 70 },
    { name: "Maths", marks: 90 },
  ],
};

let frozenStudent = Object.freeze(student);
frozenStudent.age = 26;
frozenStudent.class = "4th";
delete frozenStudent.name;
// console.log(frozenStudent);
console.log(Object.isFrozen(sealObj));

let originalBox = {
  shape: "cube",
  capacity: 3,
};

let sealObj = Object.seal(originalBox);
sealObj.color = "red";
delete sealObj.capacity;
sealObj.shape = "cuboid";

console.log(sealObj);
console.log(Object.isSealed(sealObj));
