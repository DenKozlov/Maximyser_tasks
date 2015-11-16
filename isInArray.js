/*Проверить вхождение элементов в массив
 Реализовать функцию isInArray , проверяющую вхождение элементов в массив.
 Первый аргумент функции - массив, последующие - элементы, вхождение в массив которых проверяется.
 Функция возвращает true, если все аргументы, кроме первого являются элементами массива.
 Пример работы:
 isInArray([1], 1); // true
 isInArray([1], 1, 2); // false
 isInArray([1, 2], 1, 2); // true*/

(function () {
    function isInArray(array) {
       var argsWithoutArr = Array.prototype.slice.call(arguments, 1);

        return argsWithoutArr.every(function (elem) {
            return array.some(function (el) {
                return el == elem
            });
        })
    }

    function isInArray2(array) {
        var argsWithoutArr = Array.prototype.slice.call(arguments, 1);

        return argsWithoutArr.every(function (elem) {
            return array.indexOf(elem) > -1
        })
    }

    console.time('timer');
    isInArray([1, 2], 1, 2);
    console.timeEnd('timer');
    console.time('timer');
    isInArray2([1, 2], 1, 2);
    console.timeEnd('timer');
})();