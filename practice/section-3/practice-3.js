'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var c = collectionA[0];
  var co = 1;

  var size = collectionA.length;
  var ans = [];
  for (var i = 1; i < size; i++)
  {
    if (c != collectionA[i])
    {
      ans.push({"key" : c, "count" : co});
      c = collectionA[i];
      co = 1;
    }
    else
    {
      co++;
    }
  }
  ans.push({"key" : c, "count" : co});

  size = ans.length;
  var sizeB = objectB.value.length;

  for (var i = 0; i < size; i++)
  {
      for (var j = 0; j < sizeB; j++)
      {
        if (ans[i].key == objectB.value[j])
          ans[i].count -= Math.floor(ans[i].count / 3);
      }
  }

  return ans;
}
