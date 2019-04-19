function map(collection, fn) {
    const result = [];

    // Array.isArray(collection)
    if (collection.constructor === "Array"){
      for (let i = 0; i < collection.length; i++) {
        result.push(fn(collection[i]));
      }
    } else {
      for (let key in collection) {
        result.push(fn(collection[key]));
      }
    }
    return result;
  }
  
  // const collection = [1, 2, 3];
  const collection = {a: 1, b: 2};
  
  map(collection, a => a * 2);