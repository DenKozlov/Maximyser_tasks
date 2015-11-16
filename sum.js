/*Сложить все аргументы
 Реализуй функцию sum(), которая суммирует все передаваемые ей аргументы.
 В аргументах могут быть любые данные. Пример работы:
 sum(10, 20); // 30*/

(function () {
    function sum() {
        var args = Array.prototype.slice.call(arguments);

        return args.reduce(function (prevVal, curVal) {

            return prevVal + curVal;
        })
    }

    function sum2() {
        var argsLength = arguments.length,
            sum = 0,
            i = 0;

        for(i; i < argsLength; i += 1) {
            sum += arguments[i];
        }

        return sum;
    }

    console.time('timer');
    sum(10, 20);
    console.timeEnd('timer');
    console.time('timer');
    sum2(10, 20);
    console.timeEnd('timer');
})();