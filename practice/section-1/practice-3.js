'use strict';

function collectSameElements(collectionA, objectB) {
  const arrOfObjectB = objectB.value;
  return collectionA.filter(element => arrOfObjectB.includes(element));
}
