'use strict';

function arrayToObjectArray(collection) {
  return collection.reduce(function(allElements, element) {
    let splitStringWithKeyAndCount = element.split('-');
    let data = allElements.find(elementInAllElement => elementInAllElement.key == splitStringWithKeyAndCount[0]);
    const addValue = (splitStringWithKeyAndCount[1])? splitStringWithKeyAndCount[1] : 1;
    if (data)
      data.count += addValue;
    else
      allElements.push({"key" : splitStringWithKeyAndCount[0], "count" : addValue});
    return allElements;
  }, [])
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
