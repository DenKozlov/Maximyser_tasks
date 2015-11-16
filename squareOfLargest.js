// Написать функцию которая принимает 3 аргумента, и возвращает сумму квадратов двух бОльших.
(function () {
    function squareOfLargest(first, second, third) {
        var arr;

        arr = Array.prototype.sort.call(arguments, function (a, b) {
            return a-b;
        });

        return Math.pow(arr[2], 2) + Math.pow(arr[1], 2);
    }
    console.log(squareOfLargest(2, 4, 3));
})();