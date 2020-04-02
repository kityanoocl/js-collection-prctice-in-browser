'use strict';

function collectSameElements(collectionA, collectionB) {
  var size = collectionA.length;
  var sizeB = collectionB.length;

  var ans = [];
  for (var i = 0; i < size; i++)
  {
      for (var j = 0; j < sizeB; j++)
      {
        if (collectionA[i] == collectionB[j])
          ans.push(collectionA[i]);
      }
  }
  return ans;
}
