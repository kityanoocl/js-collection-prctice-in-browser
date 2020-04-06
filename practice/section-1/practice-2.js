'use strict';

function collectSameElements(collectionA, collectionB) {
  const flattenArray = collectionB.flat();
  return collectionA.filter(element => flattenArray.includes(element));
}
