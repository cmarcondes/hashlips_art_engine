const metadata = require("../build/json/_metadata.json");

const obj = {};
const map = new Set();
const repeated = [];
metadata.forEach((data, index) => {
  let key = "";
  data.attributes.forEach((attr) => {
    if (attr.trait_type === "background") {
      return;
    }
    key += attr.value;
  });
  if (map.has(key)) {
    repeated.push(key);
  }
  obj[index] = data;
  map.add(key);
});

console.log("### caue ~ repeated", repeated);

const found = Object.values(obj)
  .map((value) => {
    let key = "";
    value.attributes.forEach((attr) => {
      if (attr.trait_type === "background") {
        return;
      }
      key += attr.value;
    });
    if (repeated.find((rep) => rep === key)) {
      return value;
    }
    return undefined;
  })
  .filter((_) => _);

console.log("### caue ~ found", found);
console.log("Unique items", map.size);
