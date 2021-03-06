/*Сформировать список без повторений
 Реализовать функцию getUnique(arr), которая принимает аргументом массив или
 массивоподоный объект, и возвращает массив таких элементов, которые входят в массив аргумента,
 и встречаются только раз в массиве результата. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком, в котором они
 встречаются в оригинальной структуре.
 var a = {};
 var b = {};
 var u = getUnique([a,b,b,a]);
 console.log(u[0] === a); // true
 console.log(u[1] === b); // true
 console.log(u.length === 2); // true*/

(function () {
    function getUnique(arr) {
        if(!Array.isArray(arr)) {
            arr = Array.prototype.slice.call(arr);
        }

        return arr.filter(function (elem, i, arr) {

            return arr.indexOf(elem) === i;
        });

    }

    var a = {};
    var b = {};
    var u = getUnique([a,b,b,a]),
        q = getUnique([1, 2, 1, 4, 6, 2]);

    console.log(u[0] === a);
    console.log(u[1] === b);
    console.log(u.length === 2);
    console.log(q);
})();