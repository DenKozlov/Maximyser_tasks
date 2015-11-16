/*Проверить каждый элемент массива на удовлетворение условию
 Реализовать функцию every(arr, func), которая принимает аргументами массив arr
 и функцию func. Возвращает true, если функция func вернет для каждого элемента массива true.
 В функцию func нужно передавать аргументами элемет массива, индекс элемента массива и сам массив.
 Пример как должен работать код:
 // Проверка на то, что все элементы массива - строки
 every(['mama', 'mila', 'ramu'], function (arrayItem) {
 return typeof arrayItem === 'string';
 }); // true
 // Проверка на то, что все элементы массива больше своих индексов
 every([4, 8, 1], function (arrayItem, itemIndex) {
 return arrayItem > itemIndex
 }); // false*/

(function () {
    var arrOfStr = ['mama', 'mila', 'ramu'],
        arrOfNum = [4, 8, 1];

    function checkForStr(arrayItem) {
        return typeof arrayItem === 'string';
    }

    function checkForNum(arrayItem, itemIndex) {
        return arrayItem > itemIndex
    }

    function every(arr, func) {
        var arrLength = arr.length,
            i = 0;

        for(i; i < arrLength; i += 1) {
            if(!func(arr[i], i)) {
                return false;
            }
        }

        return true;
    }

    console.log(every(arrOfStr, checkForStr));
    console.log(every(arrOfNum, checkForNum));
})();