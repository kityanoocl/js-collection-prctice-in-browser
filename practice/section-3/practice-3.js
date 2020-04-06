'use strict';

function arrayToObjectArray(collection) {
    return collection.reduce(function (allElements, element) {
        let data = allElements.find(elementInAllElement => elementInAllElement.key == element);
        if (data)
            data.count++;
        else
            allElements.push({ "key": element, "count": 1 });
        return allElements;
    }, [])
}

function createUpdatedCollection(collectionA, objectB) {
    const arrOfObjectB = objectB.value;
    const objectArrayOfCollectionA = arrayToObjectArray(collectionA);

    return objectArrayOfCollectionA.map(function (element) {
        if (arrOfObjectB.includes(element.key))
            element.count -= Math.floor(element.count / 3);
        return element;
    })
}
