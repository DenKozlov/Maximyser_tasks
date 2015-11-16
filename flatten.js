/*Упростить массив
 Реализовать функцию flatten(arr), которая принимает аргументом массив. Элементами массива могут быть
 как простые типы данных (числа, строки), так и массивы. Функция должна вернуть массив, состоящий из всех элементов
 вложенных массивов. Глубина вложенности массивов может быть любая. Примеры:
 flatten([1, 2, 3, [1, 2, 3]]); // [1, 2, 3, 1, 2, 3]
 flatten(['mama', ['mila'], [], [['ramu']]]); // ['mama', 'mila', 'ramu']*/

(function () {
    function flatten(arr) {
        var arrOfStr = arr.join().split(',').filter(function (elem) {

            return elem !== '';
        });

        return arrOfStr.map(function (elem) {
            if(!isNaN(elem)) {
                elem = parseFloat(elem);
            } else if(elem === 'true') {
                elem = true;
            } else if(elem === 'false') {
                elem = false;
            }

            return elem;
        })
    }


    console.log(flatten([1, 2, 3, [1, 2, 3], true]));
    console.log(flatten(['mama', ['mila'], [], [['ramu']]]));

})();
