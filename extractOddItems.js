/*Отфильтровать элементы массива с нечетным индексом
 Реализовать функцию extractOddItems(arr), которая возвращает новый массив,
 в котором содержатся только те элементы, которые обладали нечетным индексом в массиве,
 переданном в качестве аргумента. Пример работы:
 extractOddItems([0,1,0,1,0,1]); // [1,1,1]
 extractOddItems([1,2,3,4,5]); [2, 4]*/

(function () {
    var firstArr = [0,1,0,1,0,1],
        secondArr = [1,2,3,4,5,7,8,9,10];

    function extractOddItems(array) {
        return array.filter(function (el, i) {

         return i % 2;
        })
    }

    function extractOddItems2(array) {
        var arrLength = array.length,
            newArr = [],
            i = 0;

        for(i; i < arrLength; i += 1) {
            if(i % 2) {
                newArr.push(array[i])
            }
        }

     return newArr;
    }

    console.time('timer1');
    console.log(extractOddItems(firstArr));
    console.timeEnd('timer1');
    //console.log(extractOddItems(secondArr));
    console.time('timer2');
    console.log(extractOddItems2(firstArr));
    console.timeEnd('timer2');
    //console.log(extractOddItems2(secondArr));
})();