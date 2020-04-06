'use strict';

function arrayToObjectArray(collection) {
  let objectArray = [];
  objectArray = collection.reduce(function(allElements, element) {
    let s = element.split('-');
    let data = allElements.find(elementInAllElement => elementInAllElement.key == s[0]);
    const addValue = (s[1])? s[1] : 1;
    if (data)
      data.count += addValue;
    else
      allElements.push({"key" : s[0], "count" : addValue});
    return allElements;
  }, [])
  return objectArray;
}

function createUpdatedCollection(collectionA, objectB) {
   const arrOfObjectB = objectB.value;
   const objectArrayOfCollectionA = arrayToObjectArray(collectionA);

   return objectArrayOfCollectionA.map(function(element) {
         if (arrOfObjectB.includes(element.key))
           element.count -= Math.floor(element.count / 3);
         return element;
       })
}
