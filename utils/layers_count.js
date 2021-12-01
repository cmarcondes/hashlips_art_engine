const metadata = require("../build/json/_metadata.json");

const layers = {};

metadata.forEach((data) => {
  data.attributes.forEach((item) => {
    // console.log("### caue ~ item", item);
    const type = item.trait_type;
    const value = item.value;
    if (!layers[type]) {
      layers[type] = {};
    }

    const count = isNaN(layers[type][value]) ? 1 : ++layers[type][value];
    layers[type][value] = count;
  });
});

Object.keys(layers).forEach((key) => {
  const values = layers[key];
  Object.keys(values).forEach((attrKey) => {
    const total = values[attrKey];
    const percentage = total / 100;
    layers[key][attrKey] = { total, percentage: `${Math.round(percentage)}%` };
  });
});

console.log(layers);
