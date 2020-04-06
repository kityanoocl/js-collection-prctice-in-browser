'use strict';

function collectSameElements(collectionA, objectB) {
  const arrOfCollectionA = collectionA.map(element => element.key);
  const arrOfCollectionB = objectB.value;

  return arrOfCollectionA.filter(element => arrOfCollectionB.includes(element));
}
