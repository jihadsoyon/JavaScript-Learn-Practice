// Deep Flatten Array
// No matter how deep the nested array is, make it completely flat.



const flattened =  flatten([1, [2, [3, [4]], 5]])

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
console.log(flattened)