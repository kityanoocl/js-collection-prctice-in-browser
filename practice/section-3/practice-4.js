'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var size = collectionA.length;
  var ans = [];
  var c;
  var co = 0;
  for (var i = 0; i < size; i++)
  {
    if (collectionA[i].indexOf('-') > 0) // special case
    {
      var s = collectionA[i].split('-');
      if (c != null && s[0] != c)
      {
        ans.push({"key" : c, "count" : co});
        co = 0;
      }
      co += parseInt(s[1]);
      c = s[0];
    }
    else // normal case
    {
      if (c != null && c != collectionA[i])
      {
        ans.push({"key" : c, "count" : co});
        co = 1
      }
      else
      {
        co++;
      }
      c = collectionA[i];
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
