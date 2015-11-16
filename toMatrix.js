/*Преобразовать одномерный массив в двумерный
 Реализовать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число, возвращает новый массив. 
 Число показывает количество элементов в подмассивах, элементы подмассивов беруться из массива data. Оригинальный массив не должен быть изменен.
 toMatrix([1,2,3,4,5,6,7,8,9], 3); // [[1,2,3], [4,5,6], [7,8,9]]
 toMatrix([1,2,3,4,5,6,7], 3); // [[1,2,3], [4,5,6], [7]]
 toMatrix([1,2,3], 5); // [[1,2,3]]
 toMatrix([], 3); // []*/
(function () {
    function toMatrix(data, rowSize) {
        var dataLength = data.length,
            iterAmount = Math.ceil(dataLength / rowSize),
            newArr = [],
            i = 0,
            j = 0;

        if(dataLength) {
            for(i; i < iterAmount; i++) {
                newArr.push(data.slice(j,rowSize));
                j = rowSize;
                rowSize *= 2;
            }
        }

        return newArr;
    }

    console.log(toMatrix([1,2,3,4,5,6,7,8,9], 3));
    console.log(toMatrix([1,2,3,4,5,6,7], 3));
    console.log(toMatrix([1,2,3], 5));
    console.log(toMatrix([], 3));

})();