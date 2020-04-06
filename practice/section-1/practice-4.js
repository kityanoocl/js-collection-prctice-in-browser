'use strict';

function collectSameElements(collectionA, objectB) {
  const arrOfCollectionA = collectionA.map(element => element.key);
  const {value} = objectB;

  return arrOfCollectionA.filter(element => value.includes(element));
}
