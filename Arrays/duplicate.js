const arr = ["apple", "banana", "apple", "orange"];

const unique = arr.filter((item, index) => arr.indexOf(item) === index);

const arr1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 1, name: "John" },
];

const uniqueObjects = arr1.filter(
  (obj, index, self) => index === self.findIndex((t) => t.id === obj.id)
);
