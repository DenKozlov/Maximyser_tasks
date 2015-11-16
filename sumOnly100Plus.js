/*Просуммировать числа из массива, которые больше 100
 Реализовать функцию sumOnly100Plus, которая принимает аргументом массив,
 и возвращает сумму всех чисел массива, которые больше 100. В массиве могут быть не только числовые данные,
 их никак не учитывать. Пример работы:
 sumOnly100Plus([150, "200", " ", 30, 300]); // 450*/

(function() {
    var arr = [150, "200", " ", 30, 300];

    function sumOnly100Plus(array) {
        return array.reduce(function (preVal, currVal) {
            if (typeof currVal === 'number' && currVal > 100) {
                preVal += currVal
            }

            return preVal;

        }, 0);
    }

    function sumOnly100Plus2(array) {
        var arrLength = array.length,
            sum = 0,
            i;

        for (i = 0; i < arrLength; i += 1) {
            if(array[i] > 100 && typeof array[i] === 'number') {
                sum += array[i];
            }
        }

        return sum;
    }
    console.time('funcTimer');
    sumOnly100Plus(arr);
    console.timeEnd('funcTimer');
    console.time('funcTimer2');
    sumOnly100Plus2(arr);
    console.timeEnd('funcTimer2');

})();