/*Объединить объекты
 Реализовать функцию extend(obj1, obj2), которая скопирует свойства из объекта obj2 в объект obj1.
 Функция должна возвращать obj1. Значения одинаковых ключей должны перетирать оригинальные. Пример:
 extend({foo: 'bar', baz: 1}, {foo: true, zoop: 0}); // {foo: true, baz: 1, zoop: 0}*/

(function () {
    var obj1 = {foo: 'bar', baz: 1},
        obj2 = {foo: true, zoop: 0};

    function extend(obj1, obj2) {
        for(var prop in obj2) {
                obj1[prop] = obj2[prop];
        }

        return obj1;
    }

    function extend2(obj1, obj2) {
        Object.keys(obj2).forEach(function (elem) {
            obj1[elem] = obj2[elem]
        });

        return obj1;
    }

    console.time('timer');
    console.log(extend(obj1, obj2));
    console.timeEnd('timer');
    console.time('timer');
    console.log(extend2(obj1, obj2));
    console.timeEnd('timer');
})();