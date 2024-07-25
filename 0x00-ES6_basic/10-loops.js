#!/usr/bin/node

// Rewrite the function appendToEachArrayValue to use ES6’s for...of operator.
  const updatedArray = [];

  for (const idx of array) {
    const value = idx;
    updatedArray.push(appendString + value);
  }

  return updatedArray;
}
