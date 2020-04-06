'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const arrOfObjectB = objectB.value;
  return collectionA.map(function(element) {
    if (arrOfObjectB.includes(element.key))
      element.count--;
    return element;
  })
}
