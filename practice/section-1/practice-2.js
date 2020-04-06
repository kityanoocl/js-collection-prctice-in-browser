'use strict';

function collectSameElements(collectionA, collectionB) {
  let flatternArray = collectionB.flat();
  return collectionA.filter(element => flatternArray.includes(element));
}
