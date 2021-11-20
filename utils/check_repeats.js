const metadata = require("../build/json/_metadata.json");

const map = new Set();
metadata.forEach((data) => {
  let key = "";
  data.attributes.forEach((attr) => {
    key += attr.value;
  });
  map.add(key);
});

console.log("Unique items", map.size);
