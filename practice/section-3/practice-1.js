'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var size = collectionA.length;
  var sizeB = objectB.value.length;

  var ans = [];
  for (var i = 0; i < size; i++)
  {
      for (var j = 0; j < sizeB; j++)
      {
        if (collectionA[i].key == objectB.value[j])
          collectionA[i].count--;
      }
  }
  return collectionA;
}
